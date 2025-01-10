console.log("Hello TypeScript");

//Type Annotations
let age: number = 32; // `age` must be a number
let name: string = "John"; // `name` must be a string
let isUpdated: boolean = true; // `isUpdated` must be true/false

//Type Annotation of Parameters
function display(id: number, name: string) {
  console.log("Id = " + id + ", Name = " + name);
}

console.log(display(101, "Abhishek"));

//Type Annotation in Object
var employee: {
  id: number;
  name: string;
};

employee = {
  id: 100,
  name: "John",
};

//Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

export {};