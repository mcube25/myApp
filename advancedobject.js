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

