/* ECMAScript 6*/

function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || '32';
    var country = country || 'MX';
    console.log (name, age, country);
}
//newFunction('axel', 22, 'ARG');

//es6

function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}
//newFunction2();
//newFunction2('Axel', 22, 'ARG');

//template literal

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);