/*
Closure: function that contains encapsulated references to its surrounding "kexucak environment"
aka: an inner function that has access to the outer function's state
*/

const a = 'a';


function printA() {
    console.log(a);
}

printA();

function closure(name) {
    let favColor = 'blue';
    //IIFE -> immediately invoke function expression -> self executing function
    (function() {
        console.log('inside IIFE ', name, favColor);
    })();
}

closure('Sean');


function closureWithReturn(name, age) {
    //inner function with access to parent functions scope
    function sayNameAndAge() {
        console.log(`Hello my name is ${name} and i am ${age} years old`);
    }

    return sayNameAndAge;
}

const sean = closureWithReturn('Sean', 24);
const sally = closureWithReturn('sally', 27);
sean();
sally();
sean();

//maileable function
function timesX(x) {
    return function(y) {
        return x*y;
    }
}

const times2 = timesX(2);
console.log(times2(3));