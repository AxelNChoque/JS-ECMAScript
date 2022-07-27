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

/*let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);*/

let lorem = "blabla blabla blabla\n "
+ "blablabla 2";
let lorem2 = `vlavlavlavla
vlavlavla2`;

/*console.log(lorem);
console.log(lorem2);*/

// Destructuracion de elementos

/* let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX',
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person ;
console.log(name, age, country); */ 

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);