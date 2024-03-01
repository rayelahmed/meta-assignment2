// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        console.log(`${this.name} slept and gained 10 energy. Energy level: ${this.energy}`);
    }

    doSomethingFun() {
        if (this.energy >= 10) {
            this.energy -= 10;
            console.log(`${this.name} did something fun and lost 10 energy. Energy level: ${this.energy}`);
        } else {
            console.log(`${this.name} is too tired to do something fun.`);
        }
    }
}

// Example usage:
const person1 = new Person("Alice", 25, 90);
person1.sleep(); // Output: Alice slept and gained 10 energy. Energy level: 100
person1.doSomethingFun(); // Output: Alice did something fun and lost 10 energy. Energy level: 90


// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
        this.energy -= 20; // Going to work costs energy
        console.log(`${this.name} went to work, gained 10 experience points. XP: ${this.xp}, Energy: ${this.energy}`);
    }
}

// Example usage:
const worker1 = new Worker("Bob", 30, 80);
worker1.goToWork(); // Output: Bob went to work, gained 10 experience points. XP: 10, Energy: 60


// Task 3: Code an intern object, run methods
function intern() {
    const newIntern = new Worker("Bob", 21, 110, 0, 10);
    newIntern.goToWork();
    return newIntern;
}

// Creating and using the intern object
const newIntern = intern();
console.log(newIntern);


// Task 4: Code a manager object, methods
function manager() {
    const newManager = new Worker("Alice", 30, 120, 100, 30);
    newManager.doSomethingFun();
    return newManager;
}

// Creating and using the manager object
const newManager = manager();
console.log(newManager);
