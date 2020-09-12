class Person {
    constructor(name = "Nobody", age=0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `hi, ${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name = "Nobody", age=0, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getGreeting() {
        return `hi, ${this.name} is ${this.age} year(s) old and my major is ${this.major}`;
    }
}

const me = new Person('Vicky', 5);
console.log(me.getGreeting());

const student = new Student('Vicky', 5, "IT");
