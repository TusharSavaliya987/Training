"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello TypeScript");
//Type Annotations
var age = 32; // `age` must be a number
var name = "John"; // `name` must be a string
var isUpdated = true; // `isUpdated` must be true/false
//Type Annotation of Parameters
function display(id, name) {
    console.log("Id = " + id + ", Name = " + name);
}
console.log(display(101, "Abhishek"));
//Type Annotation in Object
var employee;
employee = {
    id: 100,
    name: "John",
};
//Return Type Annotations
function getFavoriteNumber() {
    return 26;
}
