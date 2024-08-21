const MAX_AGE = 'maxAge';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setMaxAge(mA) {
        this[MAX_AGE] = mA; // Using MAX_AGE as a computed property name
    }

    getMaxAge() {
        return this[MAX_AGE];
    }
}

// Usage
const person = new Person('John Doe', 30);
person.setMaxAge(120);

console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.getMaxAge()); // Output: 120
console.log(person.maxAge); // Output: 120 (Direct access to the dynamically set property)
