//...opreator on array and object.

const first = [1,2,3];
const second = [4,5,6];

console.log(first.concat(second));

const fullArray = [...first,...second];
console.log(fullArray);

const name = {
    name:"Mosh"
}

const profession = {
    job:'Instructor'
}

const combined = {...name, ...profession,location:'Australia'};
console.log(combined);

const clone = {...name};
console.log(clone);