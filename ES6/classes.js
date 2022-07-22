
class Person {
    constructor(name){
        this.name = name;
    }
    
    walk(name){
        console.log(`${name} is walking!`);
    }
}


class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher('Mosh','MSc');
console.log(teacher);





