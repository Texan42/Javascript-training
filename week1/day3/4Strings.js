const string = 'I am a test string';

//toString
console.log(string.toString());
console.log(string);

//character access
console.log(string[2]);//'a'
console.log(string[-1]);//undefined
console.log(string.charAt(2));//'a'

//length
console.log(string.length);

//upercase/lowercase

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string);//^^^doesnt actually change the string

//string comparison
console.log(string === string.toUpperCase());//JS is case sensitive

console.log('a' < 'b');//true because its comparing ASCII value of the letters string

//spliting strings
const strArr = string.split(' ');
console.log(strArr);

for (val of strArr){
    console.log(val);
}