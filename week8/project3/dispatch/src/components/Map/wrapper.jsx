import { Loader } from '@googlemaps/js-api-loader';
import {useEffect, useState} from "react";
import Map from "./map.jsx" 


const MapWrapper = () => {
    const [googleAPI, setGoogleAPI] = useState({});

    /**
     * loads in the dynamic script tag that allows us to interact with 
     * googleMaps API objects.  
     * we set that google state here and then pass it to the Map component. 
     */
    useEffect(() => {
        // dynamic loading for google maps script. 
        // so script tag with out API Key is no longer there in plain text.
        const loader = new Loader({
            apiKey: process.env.REACT_APP_MAP_KEY,
            version: "quarterly",
        })
        console.log("created loaded, about to set googleAPI");
        loader
            .load()
            .then(google => {
                setGoogleAPI(google);
                console.log("set the google api");
            })
    }, [])

        return (
            <>
                 <Map google={googleAPI}/>
            </>
        )
    
}

export default MapWrapper;