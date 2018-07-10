// Syntax

const arr = [
  'string', 
  42,
  function() { console.log('hi') },
]

//how do we execute the function at arr[2]?

arr[2]();

// if we want to console log everything in that array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// >> hi string 42 [Function]

// TYPES: 
// dynamic typing, primitive types (no methods, immutable): undefined, null, boolean, number, string, (synbol), everything else is an Object

// Typecasting? Coercion
// Explicit vs Implicit coercion
const x = 42;
const explicit = String(x); // >>> explicit === "42" //im just gonna tell you exactly what i want by wrapping it with the type 
const implicit = x + ""; // >>> implicit === "42" // I'm going to rely on the behaviour of javascript to convert 

// types

const x = 42; 
// what type is this?
console.log(typeof x);
// caviat >>> typeof null >>> "object" 

// when to use == vs === ?
// never use == because you have to know how every single thing cohorses

// coercion cont
// which values are falsy? NaN, +0 -0, false, undefined, null, ""
//which values are truthy? all numbers expect 0, {}, [], everthing else 

// Objects
// Objects, Arrays, Functions, Objects 
// Everything else is an object

// Primitives  vs Objects
// Primitives are immutable: if you want to change them you are REPLACING THEM with a new value

// Object LIteral PREFERED way 
const o2 = {} 
o2.firstName = "jordan";
o2['lastName'] = "Hayashi";
const key = "isTeaching"
o[key] = true; 
o['gree'] = function() {
  console.log('hi');
}

// Creating an object
const o = new Object();

// now o is a new object thing
o.firstNmae = "Jordan";
o.lastName = 'Hayashi';
o.isTeaching = true;
o.greet = function () {
  console.log('hi');
}

// put everything in line

const o3 = {
  firstName = "jordan",
  lastName: "hayashi", 
  isTeaching: true,
  greet: function() {
    console.log('hi');
  }, // nest objects (object within an object)
  address: {
    street: 'Main st', 
    number: 123,
  }
}

// how do we get the values back out?
// o3.address.number >>> 123 

// Ojbect Mutation
const o = {
  a: 'a',
  b: 'b',
}

// i wanna change a to be something else
const o2 = o;
o.a = 'new value'

// console.log(o2.a); >>  new value 
// stored by reference rather than value  - they are stored as rferences 

// another way
const o2 = Object.assign({}, o)
// this is saying give me a brand new object and then merge the keys and values of the object called o

// deep copy

function deepCopy(obj) {
  //return Object.assign({}, obj) //if we knew there are not objects within objects
  // but there are objects within objects in this one so: 

  //check if vals are objects 
  //if so copy that object (deep copy)
  //else return the value 
  const keys = Object.keys(obj) //we now have an array full of string values of he keys from that object so we gotta iterate and check the value (if its an object) and clone it
  
  const newObject = {}; 

  for (let i = 0; i < keys.length; i ++) {
    const key = keys[i]
    if (typeof obj[keys[i]] === 'object') {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }
  return newObject;
}

const o3 = deepCopy(o)
o.obj.key = 'new key!'
console.log(o3.obj.key)

// Prototypal Inheritance
// non primitive types have a few properties/methods associated with them (array.prototype.push)
const arr = []
arr.push('value') 
// arr >> ["value"]

// string.prototype.toUpperCase()
const str = "string"
str.toUpperCase()
// >> STRING

//Each object stores a reference to its prototype (it knows about all these methods and it stores a reference)
//Properties/methods defined most tightly to the instance have priority
arr.double__proto__ //shows you all the methods you can call on this array 

// Prototypal Inheritance

// JS will automatically "box" (wrap) primitive values so you have access to methods 

42.toString() // Errors 
const x = 42;
x.toString() // "42"
x.__proto__ // []Number: 0
x instanceof Number // false 

// why use reference to prototype?
// whats the alternative?
// whats the danger? you change the prototype and it will change everything else so its adviced NOT to do

// SCOPE
// WHAT IS IT? its variable lifetime 

// 1. Lexical scoping (var); from when the're declared until when their function ends
// give me a variable and it will exist until the function ends or as long as its in the file

// 2. Block scoping (const, let); until the next } is reached
// a variable will exist from when its declared until the } is reached 
// const can't be updated
// let can be updated 

console.log(thisIsAConst) // since this things are blocked scope it means the variable is declared at the line that is written - if we tried to use it before then it doesnt exist at all
// javascript intepreter reads from top to bottom 

const thisIsAConst = 50

thisIsAConst ++ // error! we can't update a constant! 

const constObj = {}
constObj.a = 'a' // this is okay with because the reference to that object did not change we just mutated it 

// whereas

let thisIsALet = 51
thisIsALet = 50 // that is okay
// but if i tried to reassign
let thisIsALet = 50 // so const and let prvent you from creating somethign with the same variable name twice - var doesnt give you that

