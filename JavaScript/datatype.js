// numbers
let billion = 1e9;
console.log(billion);

// toString Method
let num = 255;
console.log(num.toString(16));
console.log(num.toString(5));

// rounding
console.log(Math.floor(3.4));       // round down
console.log(Math.round(4.6));       // round off
console.log(Math.ceil(3.1));        // round up

let n = 24.4512;
console.log(n.toFixed(3));          // round to n digit

console.log(Math.random());
console.log(Math.pow(10,2));



// String
let str = `Hello`;              // accessing string
console.log( str[0] ); 
console.log( str.at(0) );

console.log('Javascript'.length);    // string lenght

let string = "Widget with id"
console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); 

console.log(string.slice(2,5));         // substring



// Array 
console.log("\"push & pop method\"");
let mark = [45,58,89];
mark.push(89);                             // push ,pop
console.log(mark);
mark.pop();
console.log(mark);

console.log("\"shift & unshift method\"");
let sub = ['math','phy'];                // unshift & shift work at the beggining
sub.unshift('che');
console.log(sub);
sub.shift();
console.log(sub);

console.log("\"for of loop\"");
let marks = [10,20,30];
for (let mark of marks){                // loop for array
    console.log(mark);
}

console.log("\"multi-dimensinal array\"");
let matrix = [                          // multi-dimensional
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);



// Array methods
console.log("\"Splice method\"");
let spliceArr = ['apple','banana','cat','dog','monkey'];
delete spliceArr[0];
console.log(spliceArr);                   // 1 element remove but still lenght is 3

// splice method to remove elment
spliceArr.splice(1,1)
console.log(spliceArr)

// splice method to replace element
spliceArr.splice(0, 2, "Let's", "dance");
console.log(spliceArr)

// splice method to insert 
spliceArr.splice(0,2,'zebra')
console.log(spliceArr)


// slice
console.log("\"slice method\"");
let sliceArr = ['1','2','3','5','6'];
console.log(sliceArr.slice(2));

// concat
console.log("\"concat method\"");
let concatArr = [1,2];
console.log(concatArr.concat([3,5,7]));

// forEach 
let foreachArr = ["aman",'hema','neha'];
foreachArr.forEach(console.log)

// indexOf/lastIndexOf and include 
let searchingArr = [1, 0, false, 9, true ];
console.log(searchingArr.indexOf(0))
console.log(searchingArr.includes(10))          // retunr boolean value
// console.log(searchingArr.lastIndexOf(9))


// find method is used to find object with condition
let findArr = [
    {id : 1, name : 'vivek'},
    {id: 2 , name: 'harsh' },
    {id: 3 , name: 'prit' },
    {id: 4 , name: 'ankit' },
];
let user = findArr.find(item=>item.id ==2);
console.log(user.name); 

console.log(findArr.findIndex(findArr => findArr.name == 'ankit'));  //find element index
// console.log(findArr.findLastIndex(findArr => findArr.name == 'ankit'))


// filter
console.log("\"filter method\"");
let filterArr = [
    {id : 1, name : 'vivek'},
    {id: 2 , name: 'harsh' },
    {id: 3 , name: 'prit' },
    {id: 4 , name: 'ankit' },
];
let arr = filterArr.filter(item => item.id <3);
console.log(arr);

// map
let mapArr = ['cat', 'dog', 'monkey','hippopotamus' ];
console.log(mapArr.map(item => item.length));       // return length of element


// sort()
console.log("\"sort method\"");
let sortArr = [14,2,56,12,6,5]
console.log(sortArr.sort())             // array sorted as string by default

// sort(fn)
console.log("\"sort(fn) method\"");
let sortArr2 = [25,3,-10,7,16]  
sortArr2.sort((a,b)=> b-a);             // sort in decending order
console.log(sortArr2);  
  

// reverse
console.log("\"Reverse method\"");
let reserveArr = [2,6,9,0,19]
console.log(reserveArr.reverse())

//split
// let splitArr = ['Bilbo', 'Gandalf', 'Nazgul', 'Saruman']
// let splits = splitArr.split(',');
// console.log(splits);

// join
console.log("\"join method\"");
let joinArr = ['Bilbo', 'Gandalf', 'Nazgul', 'Saruman']
let joins = joinArr.join('+')
console.log(joins)


// Array.isArray
console.log("\"Array.isArray method\"");
let arr2 = [2,5,6,7,8];
console.log(typeof arr2);
console.log(Array.isArray ([2,5,6,7,8]));



// Iterables
let str1 = 'test';
for(let char of str1){
    console.log(char);
}

// Arrat-likes
let arrayLike = {
    name: 'vivek',
    age: 33,
    city: 'surat',
    length: 3
};
// Error because arrayLike is not array
// for(let item of arrayLike){
//     console.log(item)
// }


// Array.from
console.log("\"Arrat.from method\"");
let arrayLike1 = {
    0: "Hello",
    1: "World",
    length: 2
}; 
let arr3 = Array.from(arrayLike1);
console.log(arr3.pop());


// Map 
console.log("\"Map\"");
let map = new Map();            // key and value of any type allowed in map
map.set(1,'num1');
map.set('2','num2');
map.set(3,'num3');

console.log(map.get(1));
console.log(map.size);

// iterate over map
console.log("\"Iterate over map\"");
for (let item of map.keys()){           // return keys
    console.log(item)
}

for (let item of map.values()){         // return value
    console.log(item)
}

for (let item in map.entries()){        // return entries
    console.log(item)
}

// Object.entries  --  create map from object
console.log("\"Object.entries method\"");
let obj ={
    name: 'snehal',
    age: 30,
    city: 'surat',
};
let map2 = new Map(Object.entries(obj));
console.log(map2)

// Object.fromEntries  --  create object from map
console.log("\"Object.fromEntries method\"");
let map3 = new Map();
map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);
let obj1 = Object.fromEntries(map3);
console.log(obj1);


// Set
console.log("\"Set method\"");
let set = new Set();
let mary = {name: 'mary'};
let harsh = {name: 'harsh'};
set.add(mary);
set.add(harsh)
console.log(set);
console.log(set.size);

console.log("\"Iterate over set\"");
for (let item of set){
    console.log(item)
}

console.log("\"WeakMap\"");
let object = {name: 'Arti'};
let weakMap = new WeakMap();
weakMap.set(object)
console.log(weakMap)


// Object.Keys,values,entries
console.log("\"Object.Keys,values,entries method\"");
let user3 = {
    name: 'vina',
    age: 39
};
console.log(Object.keys(user3));
console.log(Object.values(user3));
console.log(Object.entries(user3));


// destructing assignment --- destruct into varables
console.log("\"Array Destructing\"");
let descArr = ['john','smith']
let [firstname,surname]= descArr
console.log(firstname)


// JSON method
let subject = ['maths','phy','che']
console.log(JSON.stringify(subject))
console.log(typeof JSON.stringify(subject))

let number = "[0,3,6,8,90]";
numbers = JSON.parse(number)
console.log(numbers)
