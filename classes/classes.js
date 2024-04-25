class Student {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayHello() {
        return `Salut moi c'est ${this.name} et j'ai ${this.age} ans. Je viens de ${this.city}.`
    }
}

const john = new Student('John', 25, 'New York');

console.log(john.sayHello());

console.log(john);