// 1.// // filter() Methods.

const items = [
    {name:'bike', price:10000},
    {name:'TV', price:200},
    {name:'Album', price:50},
    {name:'book', price:10},
    {name:'phone', price:500},
    {name:'PC', price:1000},
    {name:'keyboard', price:20}
]

const filterItems = items.filter(item =>{
    return item.price >=100;
})

console.log(items); //does not change original array.
console.log(filterItems);

//2. // map() methods 

const mapItems = items.map(item =>{
    return item.price;
})

console.log(items);
console.log(mapItems);


//3. find() method.

// it will returns the found  item.

const foundItem = items.find(item =>{
    return item.name === 'Album';
    //returns the whole matched object named album.
})
console.log(foundItem);

//4. prefer forEach() over for loop

items.forEach(item =>{
    console.log(item.name, item.price);
})


//5. some() method.

const inexpensiveItems = items.some(item =>{
    return item.price <=100;
})
console.log(inexpensiveItems);

//6. every() methods.

const hasInexpensivItems = items.every(item =>{
    return item.price <= 10000;
})
console.log(hasInexpensivItems);


//7. reduce() method.

const grandTotal = items.reduce((currentTotal, item)=>{
    console.log(currentTotal); // print currentTotal value after each item iteration.
    return item.price + currentTotal;
},0)
console.log(grandTotal);


// 8. includes() methods. //kono akta kisu ase kina.

const numbers = [1,2,3,4,5,100];
const include100 = numbers.includes(100);
console.log(include100);




