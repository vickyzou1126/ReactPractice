class Person {
    constructor(name = "Nobody", age=0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `hi, ${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Person('Vicky', 5);
console.log(me.getGreeting());