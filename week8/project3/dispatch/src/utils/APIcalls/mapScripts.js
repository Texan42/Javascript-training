import { formControlLabelClasses } from "@mui/material";
import "../../components/Map/map.css";
/**
 * global variables that could potentially be grabbed from an API 
 * depending on the stores service area and where their store is located
 */
let serviceRadius = .125; 
let center = {lat: 30.242195 ,lng: -81.549787 };

/**
 * helper function to create mapOptions for map rendered in the Map
 * component.
 * 
 * @param {Number} latitude 
 * @param {Number} longitude 
 * @param {Number} zoom 
 * @returns an object of mapOptions
 */
const setMapOptions = (latitude, longitude, zoom = 11) => {
  let mapOptions;
  if(typeof(latitude) !== "number" && typeof(longitude) !== "number") {
    throw new Error("latitude and longitude must be of type number");
  } else {
    // map restrictions based off of the starting points latitude and longitude
    let restrictions = {
        latLngBounds: {
          north: latitude + serviceRadius,
          south: latitude - serviceRadius,
          east: longitude + serviceRadius,
          west: longitude - serviceRadius,
      }
  }
    mapOptions = {
      center: {lat: latitude, lng: longitude},
      zoom: zoom,
      restriction: restrictions
    }
  }
    return mapOptions;
  }

/**
 * removes directions from the map, empties the directionsPanel div
 * and resets the map to the original center and zoom values. 
 * 
 * @param {google.maps.DirectionsRenderer} directionsRenderer 
 * @param {google.maps.Map} map  
 */  
const clearRoute = (directionsRenderer, map) => {
    directionsRenderer.set("directions", null);
    map.setCenter(center);
    map.setZoom(11);
}

/**
 * calculates the distance from the store's location and the passed in locations 
 * of first and second. 
 * 
 * if second is null only calculates from origin -> first
 * if second is present and is an Object with lat and lng then first becomes a waypoint
 * on the way to second from origin.  origin -> first -> second. 
 * 
 * @param {google.maps.DirectionsRenderer} directionsRenderer 
 * @param {google.maps.DirectionsService} directionsService 
 * @param {Object} first 
 * @param {Object} second defaults to null if not passed in. 
 */
async function calcRoute(directionsRenderer, directionsService, first, second = null) {
    let request;

    // if we have two stops, make a route to second with first stop as a waypoint
    if(second !== null)
    {
        const firstStop = [{location: first, stopover: true}];

        // request that is send to the directionsService api. 
        request = {
            origin: center,
            waypoints: firstStop,
            destination: second,
            travelMode: 'DRIVING'
        };
    }
    // if we only have one stop, route directly to it
    else
    {
        request = {
            origin: center,
            destination: first,
            travelMode: 'DRIVING'
        }
    }

    // sends the request to the directionsService api so it can calculate fastest route.
   const tripData = await directionsService.route(request, function(response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        }
      });
    
    const legsObj = gatherLegInfo(tripData.routes[0].legs);
    return legsObj;
}

/**
 * helper function that will be called inside of calcRoute
 * grabs information from the leg (origin point -> destination)
 * places information into directionsPanel div and adds basic styles.
 * 
 * @param {Array} legs 
 */
function gatherLegInfo(legs)
{
  let legsArr = [];
  let totalTrip;
  let totalDuration = 0, totalDistance = 0;

  legs.forEach(leg => {
    const legObj = {
      travelTime: leg.duration.text,
      travelDistance: leg.distance.text,
    };

    legsArr.push(legObj);

    totalDistance += Number(leg.distance.text.substring(0, (leg.distance.text.length - 3)));
    totalDuration += Number(leg.duration.text.substring(0, (leg.duration.text.length - 5)));
})

  totalTrip = {
    legs: legsArr,
    tripDistance: totalDistance.toFixed(2),
    tripDuration: totalDuration,
  }


  return totalTrip;
}


export{
    setMapOptions,
    clearRoute,
    calcRoute,
}