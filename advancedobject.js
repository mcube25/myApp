//reference type, context, instatiation
// reference type
[]=[];
[1]=[1]
var object1  = { vaiue: 10 };
var object2 = object1;
var object3 = { vaiue: 1};
//context vs scope
//scope
function b()  {
    let a = 4;;
}
//context
console.log(this); // is a window object; 
console.log(this === window); //true
this.alert('hello');
//example
const object4 = {
    a: function(){
        console.log(this);
    }
}
//instantiation: it is a situation when youu make a copy of an objectn reuse d code
class player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log('hhi i am ${this.name}, im a${this.type}');
    }
}
class Wizard extends player{
    constructor(name,type) {
        super(name, type);
    }
    play(){
        console.log('we are ${this.type}')
    }
}
const wizard1 = new Wizard("shealer","healer");
const wizard1 = new Wizard("big","hear");
//pass by value and pass by reference
var a =5;
var b = 10;
var bb =a;
bb++ //primitive type
//ojects
let obj1 = {name: 'yaoo'password: '123'};
let obj2 = obj1;
obj2.password='easypeasy';
console.log(obj1);
console.log(obj2);
//array as oject
var c = [1,3,8,9]
var d = c;
d.push(8999999);
console.log(d);
//or to add to d array u can do
var d = [].concat(c);
//examlple
let obj = {a: 'a', b: 'b', c: 'c',};
let clone = Object.assign({}, obj);
obj.c = 5;
let clone2 = {...obj};
console.log(obj);
console.log(clone);
console.log(clone2);
// wat will happen if we have an object insidde an object
let obj = {a: 'a', b: 'b', c: {deep: 'try n copy me'},};
obj.deep = 'hahaha';
let superClone = JSON.parse(JSON.stringify(obj);)
console.log(superClone);
//type coercion uses the == sign to convert tyes
1 == '1';
//also
if (1){
    console.log(5);
}


//exercise
/Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1;  //4
const object3 = object2; //4
const object4 = { a: 5}; //4
object1.a = 4;


//#3 create two classes: an Animal class and     a Mamal class. 
class Animal{
constructor(name, type, color) {
    console.log(this);
    this.name = name;
    this.type = type;
    this.color = color;
}
}
class Mamal extends Animal{
    constructor(name, type, color){
        super (name, type, color)
        
      }
      sound (){
        console.log('moo i am  ${this.name} and    ${this.color} ${this.type}');
      }
    }
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
        const cow = new Mamal('Shelly', 'cow', 'brown');




