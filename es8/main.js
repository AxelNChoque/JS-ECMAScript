//Object.entries devuelve una matriz con el contenido de un objeto

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);

console.log(values);

//padding

const string = 'hello';
console.log(string.padStart(7,'hi'));

console.log(string.padEnd(12,'----------'));    

//trueling coma

const obj = {
    name: 'oscar',
}