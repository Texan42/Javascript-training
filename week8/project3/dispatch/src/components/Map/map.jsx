import { apiCalls } from '../../utils/APIcalls/api';
import { useEffect, useState } from "react";
import { setMapOptions, clearRoute, calcRoute } from '../../utils/APIcalls/mapScripts';
import pizzaStorm from "./zaStorm.png";
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { Logger } from '../../utils/logger';
import "./map.css";
import TripInfo from './tripInfo';

const Map = ({ google }) => {

    // pieces of state our Map components will access and manipulate.
    const [directionsRenderer, setDirectionsRenderer] = useState({});
    const [directionsService, setDirectionsService] = useState({});
    const [map, setMap] = useState({});
    const [directionsObjects, setDirectionsObjects] = useState(false);
    const customerData = useSelector(state => state.customerSelected);
    const [tripData, setTripData] = useState({});
    const [tripTaken, setTripTaken] = useState(false);
    const { t, i18n } = useTranslation();


    /**
     * useEffect to set our important pieces of state that we need to interact with google API
     * 
     * map is the map that is rendered to the screen
     * directionsService is their API to calculate how far lat and lng coordinates are from one another
     * directionsRenderer is what actually displays the best route to the map.
     * directionsObjects is a boolean value we use to check if the two Directions API's have already been set 
     */
    useEffect(() => {
        console.log('inside here');
        console.log(google);
        let mapOptions = setMapOptions(30.242195, -81.549787);
        // conditional check to make sure google object prop has been set correctly.
        // if it hasn't it will return from the useEffect and not attempt to do any logic.
        if (Object.keys(google).length === 0) {
            return;
        } else {
            console.log('hitting here');
            // creates map from google API and sets a circle with a 9 mile radius around 
            const map = new google.maps.Map(document.getElementById("map"), mapOptions);
            new google.maps.Circle({
                strokeColor: "#F68d28",
                stokeWeight: 1,
                fillOpacity: .1,
                map,
                center: { lat: mapOptions.center.lat, lng: mapOptions.center.lng },
                radius: 14484.1
            });
            // set map to a piece of state that we can use to pass into other functions.
            setMap(map);

            // creates a maker at our store location with the pizzaStorm icon.
            new google.maps.Marker({
                position: { lat: mapOptions.center.lat, lng: mapOptions.center.lng },
                map: map,
                icon: pizzaStorm,
            })

            // setting the two API objects into variables with their initials. 
            const dr = new google.maps.DirectionsRenderer();
            const ds = new google.maps.DirectionsService();
            dr.setMap(map); // this line is what is setting the directionsRenderer onto our created map to display directions.

            // setting all relevant pieces of state at the end to use later in our component.
            setDirectionsService(ds);
            setDirectionsRenderer(dr);
            setDirectionsObjects(true);
        }
    }, [google])

    /**
     * second useEffect.  checks if directionsObjects are empty and if they are
     * will return from useEffect and checks if directionsObjects state changes. 
     * 
     * also listens to when the customerData is changing in the LeftPanel. 
     * useEffect is called again when selected customerData changes.  
     */
    useEffect(() => {
        setTripTaken(false);
        if (!directionsObjects || customerData.customer === undefined) {
            console.log(customerData);
            return;
        } else {
            const customer = customerData.customer;
            let coordinates = apiCalls(customer);
            Logger.info('INFO', coordinates)
            coordinates.then(coors => {
                console.log(coors);
                calcRoute(directionsRenderer, directionsService, coors)
                    .then(legsObj => {
                        setTripData(legsObj);
                        setTripTaken(true);


                    });
            })

        }
    }, [customerData.customer])

    // clears the routes on the map when the there is no current customer selected.
    if (directionsObjects && !customerData.customer) {
        clearRoute(directionsRenderer, map)
    }

    return (
        <div>
            <div id="map">

            </div>
            <div id="directionsPanel">
                {/*  customer fName / lName could be the key for list elements */}
                {(tripTaken) ?
                    <TripInfo tripData={tripData} t={t} />
                    :
                    <div id='routeHeader'>
                        <h3> {t("RouteInformation")} </h3>
                    </div>
                }
            </div>
        </div>
    );
};

export default Map;