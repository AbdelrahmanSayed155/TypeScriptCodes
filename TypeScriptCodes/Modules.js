//namespace School.Archi{
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Age(age) {
        this.age = age;
    }
    get Age() {
        return this.age;
    }
    set Address(address) {
        this.address = address;
    }
    get Address() {
        return this.address;
    }
    set Email(email) {
        this.email = email;
    }
    get Email() {
        return this.email;
    }
}
export class Student extends Person {
    constructor(name, age, yearNumber, className) {
        super(name, age);
        this.yearNumber = yearNumber;
        this.className = className;
    }
    print() {
        console.log("name" + this.Name + "age" + this.Age);
    }
}
export class Teacher extends Person {
    constructor(name, age, numberExperince) {
        super(name, age);
        this.numberExperince = numberExperince;
    }
    print() {
        console.log("name" + this.Name + "age" + this.Age);
    }
}
//} 
