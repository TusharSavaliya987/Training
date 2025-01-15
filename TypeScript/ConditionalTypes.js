//Conditional Types
/*In TypeScript, conditional types allow us to write logic based on the relationship
between two types. They work similarly to conditional expressions (condition ? trueExpression : falseExpression)
in JavaScript but are used at the type level.*/
function create(nameOrId) {
    throw "unimplemented";
}
function createLabel1(idOrName) {
    throw "unimplemented";
}
var a = createLabel1("typescript"); //let a: NameLabel
var b1 = createLabel(2.8); //let b1: IdLabel
var c = createLabel(Math.random() ? "hello" : 42); //let c: NameLabel | IdLabel
