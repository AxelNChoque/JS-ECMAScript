//operador de reposo destrucurar

const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

let {name, ...all} = obj;
//console.log(name,all);

const obj2 = {
    name: 'Oscar',
    age: 32,
};

const obj3 = {
    ...obj2,
    country:'MX',
};

//console.log(obj3);

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'),1000)
            : reject(new Error('Test Error'))
    });
};

/*helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))*/

    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2022-07-28');
    const year = match[1];
    const month = match[2];
    const day = match[3];
    console.log(year,month,day);