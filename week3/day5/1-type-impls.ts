// typescript variable declaration


let one = 1;
// let one: number = 1; same thing

// union types
let union: number | string = 1;
union = 'one';

//type assertions

//useful when we know as the developer more than the compiler does
// give explicit instructions to treat it as a certain type

let hello: any = 'hello world';
// cast to type of string
let result: string = (<string>hello).toUpperCase()
result = (hello as string).toUpperCase(); //functionally the same

// function annotations

function regularFn(name: string, age): number {
    console.log(name, age);
    return age;
}

regularFn('one', 'two');

// optional function parameters

function optionalFn(name?: string, age?: number) {

}

optionalFn();

// tuples

function createTuple(): [string, number] {
    return ['one', 1];
}

const tuple: [string, number] = createTuple();

const tuple2: [string, number] = ['one', 2]

//enums

enum color {
    RED = "FF0000",
    GREEN = "00FF00",
    BLUE = "0000FF"
}

console.log(color.RED);

/**
 * interfaces:
 * 
 * - interface is a contract that anything implementing it will have its fields
 * - interfaces cannot be instantiated
 * - interfaces do not compile to anything in JS
 */

interface Vehicle {
    make: string;
    model: string;
    year?: number; //optional
}

interface Driveable extends Vehicle {
    drive: (distance: number) => void;
}

const jeep: Driveable = {
    make: 'jeep',
    model: 'grand cherokee',
    drive: function (distance: number): void {
        throw new Error(`Driving ${distance} miles.`);
    }
};

jeep.drive(100);

// classes

class Developer{

    private name;
    #age;
    private favoriteLanguage;

    constructor(name: string, age: number, favoriteLanguage: string) {
        this.name = name;
        this.#age = age;
        this.favoriteLanguage = favoriteLanguage;
    }

    public get age(){
        return this.age;
    }
}

const james = new Developer('James', 42, 'Javascript');

// classes implementing interfaces

class Car implements Driveable {
    make: string;
    model: string;
    year?: number;
    
    constructor(make: string, model: string, year: number = 2000){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive(distance: number): void {
        console.log(`Driving ${distance} miles.`)
    }
}

const jeep2: Car = new Car('Jeep', 'Grand Cherokee');


// generics
// works with Type 'T' as a generic type
class List<T, Value> {

    private list: T[] = [];

    add(elem: T) {
        this.list.push(elem);
    }

    log(value: Value): void {
        console.log(value);
    }
}

const list = new List<string, number>();
list.add('One');

list.log(2);

//abstract classes

abstract class AClass {
    constructor() {
        console.log('Inside abstract constructor')
    }

    speak(){
        console.log('Hello.')
    }
}

class RegularClass extends AClass{

}
const regularClass = new RegularClass();
regularClass.speak();