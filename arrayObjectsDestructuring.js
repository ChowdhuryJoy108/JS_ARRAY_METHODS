const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'Rice',
    address: {
        city: "LaLaLand",
        state: 'LA'
    }
}

const personTwo = {
    name: 'Kendell',
    age: 22,
    address: {
        city: "offland",
        state: 'Dallas'
    }
}

const { name: firstName, age, ...rest } = personOne;
console.log(firstName);
console.log(age)
console.log(rest);
// console.log(favoriteFood);

// 1st way 
const { city } = personTwo.address;
console.log(city);

//2nd way
const { address: { state } } = personTwo;
console.log(state);

// overwrite and combining two objects.

// const personThree = {...personOne, ...personTwo};
// console.log(personThree);

const  printUser = function({name, age,favoriteFood="steak"}){
    console.log(`name is ${name} and age is ${age} her favorite food is ${favoriteFood}`);
}

console.log(printUser(personOne));



















// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
// const numbers = [1, 2, 3, 4, 5, 6];
// // const a = alphabet[0];
// // const b = alphabet[1];

// //destructuring array.

// const [a, , c, ...rest] = alphabet;

// console.log(a, c);
// console.log(rest);

// //spread operator.

// const newArray = [...alphabet, ...numbers];
// console.log(newArray);

// // using concat().

// const newArray2 = alphabet.concat(numbers);
// console.log(newArray2);


// function sumMultiply(a, b) {
//     return [a + b, a * b, a / b];
// }
// const [sum, multiply, division = "no division"] = sumMultiply(2, 3);
// console.log("sum :", +sum);
// console.log("Multiplication :", +multiply);
// console.log(division);






