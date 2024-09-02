import * as winston from 'winston';
import BrowserConsole from 'winston-transport-browserconsole';

// This is the winston logger for a React app
const level = 'debug';
winston.configure({
    transports: [
        new BrowserConsole(
            {
                format: winston.format.simple(),
                level,
            },
        ),
    ],
});

// There are four levels to logging
//  - debug
//  - info
//  - warn
//  - error

// Examples: 
// winston.debug("DEBUG ", {a: 1, b: "two"});
// winston.info("INFO ", {a: 1, b: "two"});
// winston.warn("WARN", {a: 1, b: "two"});
// winston.error("ERROR ", {a: 1, b: "two"});

// The message can be any data type
// Examples: 
//  - {a: 1, b: "two"}
//  - 'Hello there'
//  - {a: 1, b: [{a: 'this array with object'}]}
//  - true

export { winston as Logger};