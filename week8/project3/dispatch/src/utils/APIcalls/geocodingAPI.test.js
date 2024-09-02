import { geocodingAPI } from './geocodingAPI';

let correctAddress = {
    "street1": "3680 clear channel PI",
    "street2": "",
    "city": "Jacksonvile",
    "state": "FL",
    "zip": 32224
}

let invalidAddress = {
    "street1": "1234 awesome street",
    "street2": "",
    "city": "awesome city",
    "state": "WW",
    "zip": 32224
}

let emptyStreet1 = {
    "street1": "",
    "street2": "",
    "city": "Jacksonvile",
    "state": "FL",
    "zip": 32224
}
let emptyCity = {
    "street1": "3680 clear channel PI",
    "street2": "",
    "city": "",
    "state": "FL",
    "zip": 32224
}
let emptyState = {
    "street1": "3680 clear channel PI",
    "street2": "",
    "city": "Jacksonvile",
    "state": "",
    "zip": 32224
}

let emptyZip = {
    "street1": "3680 clear channel PI",
    "street2": "",
    "city": "Jacksonvile",
    "state": "",
    "zip": "",
}

describe("Empty Field", () => {
    test("it returns an error when street1 field is empty", async () => {
        return expect(geocodingAPI(emptyStreet1)).rejects.toMatch("There is an unfilled field of the address")
    })
    
    test("it returns an error when city field is empty", async () => {
        return expect(geocodingAPI(emptyCity)).rejects.toMatch("There is an unfilled field of the address")
    })
    
    test("it returns an error when state field is empty", async () => {
        return expect(geocodingAPI(emptyState)).rejects.toMatch("There is an unfilled field of the address")
    })

    test("it returns an error when zip field is empty", async () => {
        return expect(geocodingAPI(emptyZip)).rejects.toMatch("There is an unfilled field of the address")
    })
})

describe("Invalid Address", () => {
    test("it returns an error when receiving invalid address", async () => {
        return expect(geocodingAPI(invalidAddress)).rejects.toMatch("Invalid Address")
    })
})

// describe("Get Result", () => {
//     test("Get proper Latitude and Longitude", async () => {
//         let latlng = {
//             lat: 30.2803127,
//             lng: -81.5139528
//         }
//         let res = await geocodingAPI(correctAddress)
//         console.log(res); 
//         return expect(geocodingAPI(correctAddress)).resolves.toStrictEqual(latlng)
//     })
// })