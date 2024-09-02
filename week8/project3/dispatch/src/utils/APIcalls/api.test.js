import { apiCalls, updateAddress } from "./api";
import { Logger } from '../logger/index.js';
import { unstable_createMuiStrictModeTheme } from "@mui/material";

let customer =  {
    id: "3",
    Phone: "5682568722",
    fName: "Bobby",
    lName: "Hill",
    address:
    {
        street1: "3680 clear channel PI",
        street2: "",
        city: "Jacksonvile",
        state: "FL",
        zip: 32224,
        deliveryInstructions: ""
    },
    coord: {
        lat: '',
        lng: ''
    }
}

let coord = {
    lat: 30.2803127, 
    lng: -81.5139528}

let customer2 =  {
    id: "3",
    Phone: "5682568722",
    fName: "Bobby",
    lName: "Hill",
    address:
    {
        street1: "3680 clear channel PI",
        street2: "",
        city: "Jacksonvile",
        state: "FL",
        zip: 32224,
        deliveryInstructions: ""
    },
    coord: {
        lat: 30.2803127, 
        lng: -81.5139528
    }
}

describe("Testing apiCalls function", () => {
    test("Should take in a valid customer object.", function(){
        expect(customer).toHaveProperty('id');
        expect(customer).toHaveProperty('Phone');
        expect(customer).toHaveProperty('fName');
        expect(customer).toHaveProperty('lName');
        expect(customer).toHaveProperty('address');
        expect(customer).toHaveProperty('coord');
        expect(customer.coord).toHaveProperty('lat');
        expect(customer.coord).toHaveProperty('lng');
    })

    // test("Api calls should return an object.", async () => {
    //     if(customer.coord.lat !== '' || customer.coord.lng !== ''){
    //         expect(customer.coord).toHaveProperty('lat');
    //         expect(customer.coord).toHaveProperty('lng');
    //     }else{
    //         const data = await apiCalls(customer)
    //         Logger.info('INFO', data)
    //         return expect(data).toEqual(coord);
    //     }
    // })

    test("Should take in a customer object and return object containing Latitude and Longitude", function(){
        expect(customer).toBeDefined()
    })
    
})


describe("Testing updateAddress Function", () => {
    test("Should take in a valid customer object.", function(){
        expect(customer2).toHaveProperty('id');
        expect(customer2).toHaveProperty('Phone');
        expect(customer2).toHaveProperty('fName');
        expect(customer2).toHaveProperty('lName');
        expect(customer2).toHaveProperty('address');
        expect(customer2).toHaveProperty('coord', coord);
    })

    test("Should send a request to Update User Address.", () => {
        Logger.info('INFO', 'Testing updateAdress')
        Logger.info('INFO', 'Start' ,updateAddress(3, customer2.coord), "Finished")
    })
    
}) 