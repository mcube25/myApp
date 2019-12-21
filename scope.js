// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//solution
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); //3
}

//#2
// you must first run q2() in your console to add the new value. then run q22()
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); //5
}

// run in the console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5

//#3
function q3() {
    window.a = "hello";
}

// you must first run q3() in your console to add the a property to the window. then run q32()
function q32() {
    alert(a); //"hello"
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); //"test"
}

//#5 with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5
//exercise 2
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
//solution
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            return whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined

//#3 return value when moveCommand("back");
"you arrived home"

//#4 return value when moveCommand("right");
"you found a river"

//#5 return value when moveCommand("left");
undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
//exerciise 3
// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

const a = 'test';
const b = 'true';
const c = '789';
test a = 'test2';
// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
//solution
/ change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};


// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;


// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');

// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
const first =()=> {
    const greet= 'helloo';
    const second= ()=>{
        alert(greet);
    }
    return second
}
const newFunc = first();
newFunc();
// closures - a function ran , the function executed, its never going to run again.
// ut its going to remember there r references to  those variales
// so that d child scope always has access to the parent scope;
//currying
const multiply =(a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3);
const multiplyBy5 = curriedMultiply(5);
//compose
const compost = (f, g) => (a) => f|g(a);

