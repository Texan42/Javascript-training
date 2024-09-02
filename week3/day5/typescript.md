## What is typescript

A superset of standard JavaScript

add no new features to JS because it needs to be backwards compatible with base JS

adds new types to JS
JS is implicitely typed (dynamic, determined at runtime)

Ex.
let a = 'a';
a = 1;
a = {};

typescript is statically typed (strongly typed)

// invalid code
let a: string = 'a';
a = 1; //not allowed

typescript only checks at compile time (NOT at runtime)

big benefits:
    - developer experience
    - more clear what each value is (and what you're working with)
    - on bigger, enterprise projects. becomes easier to maintain
    - catch bugs in development (compile time) rather than runtime

# compiling typescript

Transpiling: compiling from one language to another (usually older version)

# typescript types

returning types:
    - number
    - string
    - boolean
    - symbol
    - undefined
    - null
    - bigInt
    - object
    - array

new types:
    - tuple
    - enums (constants)
    - unknown
    - any (standard JS)
    - never
    - void (no return/value)