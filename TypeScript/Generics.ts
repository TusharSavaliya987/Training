//1.Generics :- Generics allow you to write reusable functions, classes, and interfaces by making them work with different types.
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity(10));      // Output: 10 (T inferred as number)
console.log(identity("Hello")); // Output: "Hello" (T inferred as string)

//2 Multiple Type Variables:-You can use multiple type variables in a function or class to handle more complex relationships between types.
function combine<T, U>(a: T, b: U): string {
    return `${a} and ${b}`;
}

console.log(combine("Hello", 10));    // Output: "Hello and 10"
console.log(combine(true, "World"));  // Output: "true and World"


//3 Generic Type Methods and Properties:- Generics can also be used in methods and properties of a class to ensure type consistency.
class Box<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }

    setContent(content: T): void {
        this.content = content;
    }
}

const numberBox = new Box<number>(10);
console.log(numberBox.getContent()); // Output: 10

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Output: "Hello"

//4 Generic Array Methods:- Generics work well with arrays to ensure type consistency when working with elements in the array.
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

const numArray = [1, 2, 3, 4];
console.log(reverseArray(numArray)); // Output: [4, 3, 2, 1]

const strArray = ["apple", "banana", "cherry"];
console.log(reverseArray(strArray)); // Output: ["cherry", "banana", "apple"]

//5 Generic Constraints:- Generic constraints restrict the type of values a generic function, class, or interface can accept.
function logLength<T extends { length: number }>(arg: T): void {
    console.log(`Length: ${arg.length}`);
}

logLength("Hello");            // Output: Length: 5
logLength([1, 2, 3]);          // Output: Length: 3
logLength({ length: 10 });     // Output: Length: 10
// logLength(42);              // Error: Argument of type 'number' does not have a 'length' property.

//6 Generic Interface:- A generic interface defines a structure that works with various types.
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

const pair: KeyValuePair<string, number> = { key: "Age", value: 30 };
console.log(pair); // Output: { key: 'Age', value: 30 }

const anotherPair: KeyValuePair<number, boolean> = { key: 1, value: true };
console.log(anotherPair); // Output: { key: 1, value: true }

//7 Generic Classes :- A generic class allows defining type-safe and reusable classes for handling multiple types.
class DataStore<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }
}

const stringStore = new DataStore<string>();
stringStore.addItem("Hello");
stringStore.addItem("World");
console.log(stringStore.getItems()); // Output: ["Hello", "World"]

const numberStore = new DataStore<number>();
numberStore.addItem(10);
numberStore.addItem(20);
console.log(numberStore.getItems()); // Output: [10, 20]

//8 Namespaces :- Namespaces group related code together, providing a way to organize and avoid name conflicts in large codebases.
namespace StringUtility {
    export function toUpperCase(str: string): string {
        return str.toUpperCase();
    }

    export function toLowerCase(str: string): string {
        return str.toLowerCase();
    }
}

// Usage:
const upper = StringUtility.toUpperCase("hello");
console.log(upper); // Output: "HELLO"

const lower = StringUtility.toLowerCase("WORLD");
console.log(lower); // Output: "world"

//8.1use the StringUtility:- namespace in another file, you can import it using the import keyword.
import { StringUtility } from "./StringUtility"; // Assuming it's in a separate file

const mixedCase = "TypeScript";
console.log(StringUtility.toUpperCase(mixedCase)); // Output: "TYPESCRIPT"
console.log(StringUtility.toLowerCase(mixedCase)); // Output: "typescript"
