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
// console.log(education);


//let name = 'oscar';
//let age = 32;
//es5
/*obj = {name: name, age: age};
es6
obj2 = {name, age};
console.log(obj);
console.log(obj2);

const  names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age:27}
]

let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(item.name);
}

const listOfNames4 = name => {
    console.log(item.name);
}

const square = num => num * num;
*/
//Promise

const hellopromise = () => {
    return new Promise ((resolve, reject) => {
        if(false){
            resolve('Hey')
        } else {
            reject('Ups!!');
        }
    })
}

/*hellopromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))*/


class calculator{
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

//console.log(calc.sum(2,2));

//import es6

//import { hello } from './module';

//hello();

function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);