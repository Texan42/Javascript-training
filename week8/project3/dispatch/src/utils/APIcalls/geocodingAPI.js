/**
 * Parameter: customerAddress 
 * Type: Object
 * Properties: street1, street2, city, state, zip
 * 
 * {
 *  street1: String,
 *  street2: String,
 *  city: String,
 *  state: String,
 *  zip: Strig
 * }
 * 
 */
export function geocodingAPI(customerAddress) {
    console.log(customerAddress);
    return new Promise((resolve, reject) => {
        let lat = "";
        let lng = "";

        // Check if all properties of customer address are filled 
        if (customerAddress["street1"]
            && customerAddress["city"]
            && customerAddress["state"]
            && customerAddress["zip"]) {

            /**
             *  Need to change input address into the address Geocoding API can understand.
             * ex) "1600 Amphitheatre Parkway, Mountain View, CA" => 1600+Amphitheatre+Parkway,+Mountain+View,+CA
             */
            let addressQuery = `${customerAddress["street1"].split(" ").join("+")},+${customerAddress["city"]},+${customerAddress["state"]}`;

            /**
             * Request query using the JSON output flag.
             * 1. Address: addressQuery
             * 2. Component filtering: Return address results restricted to a specific area by postal code and State
             */
            let apiQuery = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressQuery}&components=postal_code:${customerAddress["zip"]}|administrative_area:${customerAddress["state"]}&key=${process.env.REACT_APP_MAP_KEY}`;

            fetch(apiQuery)
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    } else if (res.status === "ZERO_RESULTS") {
                        reject("Invalid Address");
                    } else {
                        reject("REQUEST_DENIED: Invalid API key");
                    }
                })
                .then(res => {
                    console.log(res);
                    lat = res.results[0].geometry.location.lat
                    lng = res.results[0].geometry.location.lng
                    resolve({ lat, lng });
                })
        }
        else {
            reject("There is an unfilled field of the address")
        }
    })
}