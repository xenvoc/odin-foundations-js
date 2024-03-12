// https://javascript.info/array-methods
// task 1
console.log('Task 1:');
function camelize(str) {
    const words = str.split('-');
    for (var i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join('');
}
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

// task 2
console.log('Task 2:');
var arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    return arr.filter(elem => elem >= a && elem <= b);
}
console.log(filterRange(arr, 1, 4));
console.log(arr);
// task 3
console.log('Task 3:');
function filterRangeInPlace(arr, a, b) {
    let i = arr.findIndex(item => item <=a || item >= b);
    while (i > -1) {
        arr.splice(i, 1);
        i = arr.findIndex(item => item <a || item > b);
    }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

// task 4
console.log('Task 4:');
let arr4 = [5, 2, 1, -10, 8];
arr4.sort((a, b) => b - a);
console.log(arr4);


// task 5
console.log('Task 5:');
let arr5 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    let arrCopy = arr.slice();
    arrCopy.sort();
    return arrCopy;
}
let sorted = copySorted(arr5);
console.log(arr5);
console.log(sorted);

// task 6
console.log('Task 6:');
function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function(str) {
        let stringParts = str.split(' ');
        let num1 = Number(stringParts[0]);
        let operator = stringParts[1];
        let num2 = Number(stringParts[2]);
        return this.methods[operator](num1, num2);

    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}
const calc = new Calculator();

console.log(calc.calculate("5 + 3")); 
calc.addMethod('**', (a, b) => a ** b); 
console.log(calc.calculate('3 ** 2'));

// task 7
console.log('Task 7:');
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);

console.log( names ); // John, Pete, Mary
// task 8
// map to objects
console.log('Task 8:');
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];
let usersMapped = users2.map(user => ({ 
    id: user.id,
    fullName: user.name + " " + user.surname,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

// task 9
// sort by age
console.log('Task 9:');
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr9 = [ pete3, john3, mary3 ];

function sortByAge(arr) {
    arr.sort((a,b) => a.age - b.age);
}

sortByAge(arr9);

// now: [john, mary, pete]
console.log(arr9[0].name); // John
console.log(arr9[1].name); // Mary
console.log(arr9[2].name); // Pete

// task 10
// shuffle an array
console.log('Task 10:');
let arr10 = [1, 2, 3];
function shuffle(arr) {
    let rarr = [];
    arrlength = arr.length;
    for (let i = 0; i < arrlength; i++) {
        randomIndex = Math.floor(Math.random()*arr.length);
        rarr.push(...arr.splice(randomIndex, 1));
    }
    arr.push(...rarr);
}
shuffle(arr10);
console.log(arr10); 

// task 11
console.log('Task 11:');
let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let arr11 = [ john4, pete4, mary4 ];

function getAverageAge(arr) {
    return arr.reduce((accumulator, item) => (+accumulator + item.age), [0])  / arr.length;
}
console.log( getAverageAge(arr11) ); // (25 + 30 + 29) / 3 = 28

// task 12
console.log('Task 12:');

function unique(arr) {
    const set = new Set(arr);
    return Array.from(set);
    
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

// task 13
// Create keyed object from array
console.log('Task 13:');

let users13 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

// playing around, not same result
function groupByIdMap (users) {
    arr = users.map(user => ({
        id: user.name.split(' ')[0].toLowerCase(),
        name: user.name,
        age: user.age,
    }))
    return Object.assign({}, arr);
}

// the actual task: 
function groupById (users) {
    return arr.reduce((accumulator, currValue) =>  {
        accumulator[currValue.id] = currValue; 
        return accumulator;
    } ,{});
}

let usersByIdMap = groupByIdMap(users13);
console.table(usersByIdMap);  

let usersById = groupById(users13);
console.table(usersById);  
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/