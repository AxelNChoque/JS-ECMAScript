//replaceAll

const string = 'Javascript ta tremendo, con Javascript se pueden hacer webs';
const replacedString = string.replace('Javascript', 'Python');

console.log(replacedString);

const replacedString2 = string.replaceAll('Javascript', 'Python');

console.log(replacedString2);

//Metodos privados
/*
class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
        console.log(val)
    }
}

const message = new Message();
message.show('Hola');
*/

//Promise any

const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

class Anyclass {
    constructor(element){
        this.ref = new WeakRef(element)}
    }

 //3 operadores de logica nuevos

 let isTrue = true;
 let isFalse = false;
 console.log(isTrue &&= isFalse);
 console.log(isTrue ||= isFalse);
 
 let isUndef = undefined;
 console.log(isUndef ??= isFalse);
