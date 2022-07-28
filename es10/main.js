//flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

//console.log(array.flat(2));

let array2 = [1,2,3,4,5];

//console.log(array2.flatMap(value => [value, value*2]));

//trimStart

let hello = '       hello world          ';
console.log(hello);
//console.log(hello.trimStart());
//console.log(hello.trimEnd());

//optional catch error

try{

}catch/*(error) Se puede omitir*/{
    error
}
//Convertir array a objeto
let entries = [['name', 'oscar'], ['age', 32]];
console.log(Object.fromEntries(entries));

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);

console.log(symbol.description);