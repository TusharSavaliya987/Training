//1. Class:-
//2.Constructor:-
//3. Inheritance:-
//4. Super calls
//5.  Data Modifiers :- 1)Public, 2)private, and 3)protected modifiers and also 4) Static members
//6. Readonly modifier
//7. Parameter properties
//8. Interface extends classes
//9. Class implementations
//10 Getters / Setters
//11. Abstract classes
//12. Abstract methods

/*1. Class:- In TypeScript, classes provide a more intuitive and structured way to create reusable 
components, especially for developers familiar with object-oriented programming. 
Here's a detailed example and explanation of how TypeScript handles classes and object-oriented features. */
// class Person {
//     name: string; // Property
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce(): void {
//         console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
//     }
// }

// const person = new Person("Tushar", 25);
// person.introduce(); // Output: Hi, I am Tushar, and I am 25 years old.


// //2.Constructor:-A constructor initializes an object when it is created.
// class Car {
//     make: string;
//     model: string;

//     constructor(make: string, model: string) {
//         this.make = make;
//         this.model = model;
//     }

//     displayInfo(): void {
//         console.log(`Car: ${this.make} ${this.model}`);
//     }
// }

// const car = new Car("Toyota", "Corolla");
// car.displayInfo(); // Output: Car: Toyota Corolla


//3. Inheritance:- A class can inherit properties and methods from another class using the extends keyword.
// class Animal {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     move(): void {
//         console.log(`${this.name} is moving`);
//     }
// }

// class Dog extends Animal {
//     bark(): void {
//         console.log(`${this.name} says woof!`);
//     }
// }

// const dogs = new Dog("Buddy");
// dog.move(); // Output: Buddy is moving
// dog.bark(); // Output: Buddy says woof!


//4. Super calls :- The super keyword is used to call the parent class's constructor or methods.
class Vehicle {
    make: string;

    constructor(make: string) {
        this.make = make;
    }

    describe(): void {
        console.log(`This is a vehicle made by ${this.make}.`);
    }
}

class Bike extends Vehicle {
    model: string;

    constructor(make: string, model: string) {
        super(make); // Call parent constructor
        this.model = model;
    }

    describe(): void {
        super.describe(); // Call parent method
        console.log(`It is a ${this.model} model.`);
    }
}

const bike = new Bike("Honda", "Shine");    
bike.describe();


//5.  Data Modifiers :- 
// 5.1)Public:- Accessible from anywhere.
class PublicExample {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, ${this.name}!`);
    }
}

const publicExample = new PublicExample("Alice");
console.log(publicExample.name); // Output: Alice

// 5.2)private:- Accessible only within the class.
class PrivateExample {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret(): void {
        console.log(`The secret is: ${this.secret}`);
    }
}

const privateExample = new PrivateExample("TypeScript is cool!");
privateExample.revealSecret(); // Output: The secret is: TypeScript is cool // console.log(privateExample.secret); // Error: Property 'secret' is private

// 5.3)protected modifiers :- Accessible within the class and its subclasses.
class Parent {
    protected message: string = "Hello from the parent!";

    showMessage(): void {
        console.log(this.message);
    }
}

class Child extends Parent {
    updateMessage(newMessage: string): void {
        this.message = newMessage;
    }
}

const child = new Child();
child.showMessage(); // Output: Hello from the parent!
child.updateMessage("Hello from the child!");
child.showMessage(); // Output: Hello from the child!

// 5.4) Static members :- Static members belong to the class, not an instance.
class StaticExample {
    static count: number = 0;

    static incrementCount(): void {
        this.count++;
    }
}

StaticExample.incrementCount();
StaticExample.incrementCount();
console.log(StaticExample.count); // Output: 2


//6. Readonly modifier:- The readonly modifier makes a property immutable after initialization.
class ReadOnlyExample {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    displayId(): void {
        console.log(`ID: ${this.id}`);
    }
}

const readOnlyExample = new ReadOnlyExample(101);
readOnlyExample.displayId(); // Output: ID: 101 // readOnlyExample.id = 102; // Error: Cannot assign to 'id' because it is a read-only property

//7. Parameter properties :-Parameter properties simplify class property initialization by declaring and initializing them directly in the constructor.
class Employee {
    constructor(public name: string, private age: number, readonly department: string) {}

    displayInfo(): void {
        console.log(`Employee Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
    }
}

const emp = new Employee("Tushar", 25, "IT");
emp.displayInfo(); // Output: Employee Name: Tushar, Age: 25, Department: IT
// emp.department = "HR"; // Error: Cannot assign to 'department' because it is a read-only property

//8. Interface extends classes :-An interface can extend a class, inheriting its properties and methods, but it does not implement them. This is useful for defining additional structure.
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// interface Employee extends Person {
//     employeeId: number;
// }

// const emp: Employee = {
//     name: "Alice",
//     employeeId: 1234,
// };

// console.log(emp); // Output: { name: 'Alice', employeeId: 1234 }


//9. Class implementations :- A class can implement an interface to enforce a specific structure.
interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.area()); // Output: 200

//10 Getters / Setters :- Getters and setters provide controlled access to class properties.
class Product {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value <= 0) {
            console.log("Price must be greater than zero.");
        } else {
            this._price = value;
        }
    }
}

const product = new Product(100);
console.log(product.price); // Output: 100
product.price = -10;        // Output: Price must be greater than zero.
product.price = 150;
console.log(product.price); // Output: 150


//11. Abstract classes :- Abstract classes act as blueprints for other classes. They cannot be instantiated and may contain both implemented and abstract methods.
abstract class Animal {
    abstract makeSound(): void; // Abstract method
    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
dog.move();      // Output: Moving...


//12. Abstract methods :- Abstract methods are declared in abstract classes and must be implemented by subclasses.
abstract class Shape {
    abstract area(): number; // Abstract method

    describe(): void {
        console.log("This is a shape.");
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(10);
circle.describe(); // Output: This is a shape.
console.log(circle.area()); // Output: 314.159...

