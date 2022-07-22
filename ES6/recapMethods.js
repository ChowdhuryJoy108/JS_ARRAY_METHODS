const cart = [
    {pName:'Bike', price:10000},
    {pName:'Tv', price:200},
    {pName:'Ac', price:500},
    {pName:'calculator', price:100},
    {pName:'light', price:50},
    {pName:'laptop', price:1000},
    {pName:'chocolate', price:10},
]

// filter()

const filterArray = cart.filter(item =>{
    return item.price >=200;
}).map(item =>{
    console.log(item.pName);
})

// console.log(filterArray);

// map() 

const mapArray = cart.map(item =>{
    return item.pName;
})
console.log(mapArray);

// find () 

const findInArray = cart.find(item =>{
    return item.pName === 'light';
})

console.log(findInArray);

// forEach()

const iterating = cart.forEach(item =>{
    console.log(item.pName, item.price);
})
console.log(iterating);

// some ()

const someArray  = cart.some(item =>{
    return item.price >=200;
})
console.log(someArray);


//every ()

const everyArray  = cart.every(item =>{
    return item.price;
})
console.log(everyArray);


// reduce ()

const total = cart.reduce((currentTotal,item)=>{
        return item.price + currentTotal;
},0);

console.log(total);


//includes ()

const array = [3,3,456,7,7,89,99,0];
const names = ['moon','kalam','jamal','tomal'];
console.log(array.includes(456));//true
console.log(array.includes(45)); //false
console.log(names.includes('opi')); // false

