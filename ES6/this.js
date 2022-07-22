const person = {
    name:'Mosh',
    walk() {
        console.log(this);
    }
};

person.walk();
const walk = person.walk.bind(person);
//function are object in javascript we above use bind() with a function like as it is an object
walk();