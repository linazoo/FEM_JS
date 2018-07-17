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


var thisIsAVar = 50
thisIsAVar = 51 
var thisIsAVar // older way to declare variables and overwrite them and you can name things the same and its ok it OVERSHADOWS as if the older variable didnt exist 

// HOSTING
// takes the definition of something and 'hoists' it to the value at the top 
// function definitions are hoisted but not lexically-scoped initializations 

function thisIsHoisted() {
  console.log('this is a function declared at the bottom of a file');
}
// if we call thisIsHoisted() at the top of the file it will work

// wont work in a case like this:
const thisIsNotHoisted = function() {
  console.log('should this be hoisted?')
}

// like 206 is declared as a const and it can't be changed whereas the function can be changed 

// The Javascript Engine
// How JAVASCRIPT is executed?
// before executing the code, the engine reads the entire file (errors caught in the first run) and will throw a syntax error if one is found
// any function definitions will be saved in memory 
// variable initializations will not be run, but lexically-scoped variable names will be declared
// if you declare a variable without a keyword like 'const' let var it creates a global variable - this isnt used much

// The GLobal Object
// all variables and functions are actually parameters and methods on the global object 
// browswer global object is the 'window' object
// node.js blogal object is the 'global' object 

// Closures
// functions that refer to variables declared by parent function 
// possible because of scoping 

function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push(function() { console.log(i) })
  }
  return arr
}

const arr = makeFunctionArray() // I'd get back an array full of functions and each of them would print a number
// we expect it to print out 0 but actually it prints 5 why? THIS is actually as expected

function makeHelloFunction() {
  const message = "hello!"

  function sayHello() {
    console.log(message)
  }
  return sayHello
}

const sayHello = makeHelloFunction()

console.log(message) // error message is not defined 

sayHello() // will actually console.log Hello!

// thats a colsure because the variable called sayHello() doesn't exist but it still works because it was invoked when that was created (?)

function makeHelloFunction1() {
	const message = 'Hello!'

	function sayHello() {
		console.log(message)
	}
	return sayHello
}

const sayHello = makeHelloFunction1()
undefined
sayHello()
// VM1000:5 Hello!
// undefined

//why does this bug exist?

function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push(function() { console.log(i) })
  }
  return arr
}

const functionArr = makeFunctionArray()

functionArr[0]() 

//what is the value of i? === undefined  because its not within scope  BUT because of closures if you console.log(i) before  return arr its 5 

// Immediately Invoked Function Expression or IIFE
// A function expression that gets invoked immediately 
// creates a closure 
// benefit: doesnt add to or modify global object 