// tasks:
// 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// 2
function isEmpty(obj) {
    for(key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


// 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// 4 
function multiplyNumeric(obj) {
    for (key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] = 2 * obj[key];

        }
    }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

