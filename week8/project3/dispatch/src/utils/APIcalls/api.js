import axios from 'axios';
import { geocodingAPI } from './geocodingAPI';
import { Logger } from '../logger/index.js';


async function apiCalls(customer) {
    console.log("customer");
    console.log(customer);
    let validAddress = false;
    let latLong = {};

    //check is lat and long exist
    //if yes: set equal to latLong then return it. 
    //if no: send to geocoding to get lat and long, then return result
    const latLongCheck = async (customer) => {
        if (customer.coord.lat && customer.coord.lng) {
            latLong.lat = customer.coord.lat;
            latLong.lng = customer.coord.lng;
            return latLong;
        } else {
            latLong = await geocodingAPI(customer.address);
            console.log(latLong);
            //updates coords and returns them to the backend
            updateAddress(customer._id, latLong);
            return latLong;
        }
    }

    //webpage starts with no data in customer state, therefore it breaks.
    //the if else catches the empty data. 
    if (customer) {
        validAddress = true;
        try {
            //returns a object with lat and lng inside. 
            const coordinates = await latLongCheck(customer);
            console.log(coordinates);
            return coordinates;
        } catch (err) {
            Logger.error('ERROR', err);
        }

    } else {
        Logger.info('INFO', "you need to click something first.");
        validAddress = false;
    }
}

function updateAddress(id, coordinates) {

    /** we will be using customer id
     * to send a coord object back to the backend
     * so they can use that to update the DB
     */

    // REACT_APP_BASE_URL = `52.226.194.111:8125`;

    //coordinates is an object created in apiCalls.
    axios({
        method: 'Post',
        url: `http://${process.env.REACT_APP_BASE_URL}/customers/v1/id/${id}/address`,
        data: coordinates
    })
        .then(res => {
            Logger.info('INFO', res, 'Update Address response');
        });
}
export { apiCalls, updateAddress };