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
Object.values()
Object.keys()
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
})