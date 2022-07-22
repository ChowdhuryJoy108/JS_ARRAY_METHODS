const person = {
    name:"mosh",
    walk(name){
        console.log(`${name} is walking`);
    }, //walk is a method of person object
    talk(name){
        console.log("talking");
    },// with es6 
    eat(name){
        console.log("eating");
    }
};
person.name = 'Joy';
person.walk(person["name"]);
person.talk();
person.eat();

console.log(person);