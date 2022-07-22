const square = function(number){
    return number * number;
}

const square2 = number => number * number;

square(5); // normal function
console.log(square2(10));// arrow()


const jobs = [
    {
        id:1,
        isActive:true,
    },
    {
        id:2,
        isActive:true,
    },
    {
        id:3,
        isActive:false,
    }
];

const filterActive = jobs.filter(item =>{
    return item.isActive === true;
})

console.log(filterActive);



const person = {
    talk(){console.log(this)}
}

person.talk();
