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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Vehicle = /** @class */ (function () {
    function Vehicle(make) {
        this.make = make;
    }
    Vehicle.prototype.describe = function () {
        console.log("This is a vehicle made by ".concat(this.make, "."));
    };
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(make, model) {
        var _this = _super.call(this, make) || this; // Call parent constructor
        _this.model = model;
        return _this;
    }
    Bike.prototype.describe = function () {
        _super.prototype.describe.call(this); // Call parent method
        console.log("It is a ".concat(this.model, " model."));
    };
    return Bike;
}(Vehicle));
var bike = new Bike("Honda", "Shine");
bike.describe();
//5.  Data Modifiers :- 
// 5.1)Public:- Accessible from anywhere.
var PublicExample = /** @class */ (function () {
    function PublicExample(name) {
        this.name = name;
    }
    PublicExample.prototype.greet = function () {
        console.log("Hello, ".concat(this.name, "!"));
    };
    return PublicExample;
}());
var publicExample = new PublicExample("Alice");
console.log(publicExample.name); // Output: Alice
// 5.2)private:- Accessible only within the class.
var PrivateExample = /** @class */ (function () {
    function PrivateExample(secret) {
        this.secret = secret;
    }
    PrivateExample.prototype.revealSecret = function () {
        console.log("The secret is: ".concat(this.secret));
    };
    return PrivateExample;
}());
var privateExample = new PrivateExample("TypeScript is cool!");
privateExample.revealSecret(); // Output: The secret is: TypeScript is cool // console.log(privateExample.secret); // Error: Property 'secret' is private
// 5.3)protected modifiers :- Accessible within the class and its subclasses.
var Parent = /** @class */ (function () {
    function Parent() {
        this.message = "Hello from the parent!";
    }
    Parent.prototype.showMessage = function () {
        console.log(this.message);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.updateMessage = function (newMessage) {
        this.message = newMessage;
    };
    return Child;
}(Parent));
var child = new Child();
child.showMessage(); // Output: Hello from the parent!
child.updateMessage("Hello from the child!");
child.showMessage(); // Output: Hello from the child!
// 5.4) Static members :- Static members belong to the class, not an instance.
var StaticExample = /** @class */ (function () {
    function StaticExample() {
    }
    StaticExample.incrementCount = function () {
        this.count++;
    };
    StaticExample.count = 0;
    return StaticExample;
}());
StaticExample.incrementCount();
StaticExample.incrementCount();
console.log(StaticExample.count); // Output: 2
//6. Readonly modifier:- The readonly modifier makes a property immutable after initialization.
var ReadOnlyExample = /** @class */ (function () {
    function ReadOnlyExample(id) {
        this.id = id;
    }
    ReadOnlyExample.prototype.displayId = function () {
        console.log("ID: ".concat(this.id));
    };
    return ReadOnlyExample;
}());
var readOnlyExample = new ReadOnlyExample(101);
readOnlyExample.displayId(); // Output: ID: 101 // readOnlyExample.id = 102; // Error: Cannot assign to 'id' because it is a read-only property
//7. Parameter properties :-Parameter properties simplify class property initialization by declaring and initializing them directly in the constructor.
var Employee = /** @class */ (function () {
    function Employee(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    Employee.prototype.displayInfo = function () {
        console.log("Employee Name: ".concat(this.name, ", Age: ").concat(this.age, ", Department: ").concat(this.department));
    };
    return Employee;
}());
var emp = new Employee("Tushar", 25, "IT");
emp.displayInfo(); // Output: Employee Name: Tushar, Age: 25, Department: IT
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rect = new Rectangle(10, 20);
console.log(rect.area()); // Output: 200
//10 Getters / Setters :- Getters and setters provide controlled access to class properties.
var Product = /** @class */ (function () {
    function Product(price) {
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value <= 0) {
                console.log("Price must be greater than zero.");
            }
            else {
                this._price = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var product = new Product(100);
console.log(product.price); // Output: 100
product.price = -10; // Output: Price must be greater than zero.
product.price = 150;
console.log(product.price); // Output: 150
//11. Abstract classes :- Abstract classes act as blueprints for other classes. They cannot be instantiated and may contain both implemented and abstract methods.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
dog.move(); // Output: Moving...
//12. Abstract methods :- Abstract methods are declared in abstract classes and must be implemented by subclasses.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        console.log("This is a shape.");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle(10);
circle.describe(); // Output: This is a shape.
console.log(circle.area()); // Output: 314.159...
