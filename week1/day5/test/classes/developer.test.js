const Developer = require('./Developer.js');

// Test suite
describe('Array default value', () => {

    /**
     * Setup/Teardown // special function jest understands
     * 
     * beforeAll() // Runs once before all tests
     * beforeEach() // Runs once before each test
     * afterEach() // Runs once after each test
     * afterAll() // Runs once after all tests complete
     */

    let dev;
     let i = 0;
    let api;
    let row;
    let rowCopy;

    // beforeAll(() => {
    //     console.log('Establishing connection to Database');
    //     row = findById(1, 'tableName');
    // });

    beforeEach(async () => {
        i++;
        dev = new Developer(0, 'Joe', 'SkillStorm', null);
    });

    afterEach(() => {
        rowCopy = row;
    });

    afterAll(() => {
        console.log('Closing connection to database');
    })

    // Tests
    it('Should convert to array', () => {
        dev = new Developer(0, 'Joe', 'SkillStorm', null);
        console.log(i);
        expect(dev.languages).toEqual([]);
    });

    it('Should take an array', () => {
        console.log(i);
        dev = new Developer(0, 'Joe', 'SkillStorm', ['JavaScript']);
        expect(dev.languages).toEqual(['JavaScript']);
    });

    it('', () => {
        console.log(i);
    });
});

// describe('Array mutation', () => {

//     let dev;

//     beforeEach(() => {
//         dev = new Developer(0, 'Joe', 'SkillStorm', []);
//     });

//     it('Can add languages', () => {
//         dev.learn('JavaScript');
//         expect(dev.languages).toEqual(['JavaScript']);
//     });

//     it('Can remove languages', () => {
//         dev.learn('JavaScript');
//         dev.learn('C++');
//         dev.forget('JavaScript');
//         // console.log(dev.languages);
//         expect(dev.languages).toEqual(['C++']);
//     });

//     it('Can remove duplicate languages', () => {
//         dev.learn('JavaScript');
//         dev.learn('C++');
//         dev.learn('JavaScript');
//         dev.forget('JavaScript');
//         expect(dev.languages).toEqual(['C++']);
//     });
// });