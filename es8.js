// string method
padstart();
padEnd();
'turtle'.padstart(10);
'turtle'.padEnd(33);
//trailing function coma
const fun = {a,b,c,d,}        =>   {
    console.log(a);
}
fun(1,2,3,4,)

//
Object.values()
Object.keys()// old version
Object.entries()

let obj = {
    username0: 'santa',
    username1: 'fanta',
    username2: 'manta',
    username3: 'canta',
    username04: 'banta',
}
//Object.keys()
        Object.keys(obj).forEach((key, index) =>{
   console.log(key, obj[key]);
        })
//Object.values()
Object.values(obj).forEach(value => {
    console.log(value);
})
//object.entries()
Object.entries(obj).forEach(value => {
    console.log(value);
})
//real life scene
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username'+ '');
});
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


      turtle = turtle.padStart(8);
       rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ');
