// Lecture 1

// First-Class Functions: functions are treated the same way as any other value
// describes the way the language handles functions "classes"
// can be assigned to variables, array values, object values
// can be passed as arguments to other functions
// can be returned from functions 

// allows for the creating of higher-order functions
// either takes one or more functions as arguments or returns a function

// MAP FILTER AND REDUCE HIGH ORDER FUNCTIONS

// map() maps any function to the values in the array and get back another array 
const x = [0, 1, 2, 3]
undefined
function addOne(number) { return number + 1 }
undefined
addOne(1)
// 2
x.map
// ƒ map() { [native code] }
x.map(addOne)
// (4) [1, 2, 3, 4]

// filter() expects a function
function isGreaterThanOne(num) {return num > 1 }
// undefined
isGreaterThanOne(100)
// true
isGreaterThanOne(1)
// false
x.filter(isGreaterThanOne)
// (2) [2, 3]

// Reduce: takes an array with a lot of values and reduces it to a single value - takes two arguments, first one is the accumulator and the second is whatever is next in that arrray
function add(x, y) { return x + y }
// undefined
add(1,2)
// 3
x
// (4) [0, 1, 2, 3]
x.reduce(add)
// 6

// Higher order functions continued 

function map(arr, fn) {
  const newArr = []
  
  for (let i = 0; i < arr.length; i++ ) {
    let val = arr[i]
    newArr.push(fn(val)) //result of running that fn (function) into that val(value)
  }

  return newArr
}

function addOne(num) { return num + 1 }

const x = [0,1,2,3]

console.log(map(x, addOne))

// [1,2,3,4]

// forEach

function map(arr, fn) {
  const newArr = []

  arr.forEach(function(val) {
    newArr.push(fn(val))
  })

  return newArr
}

function addOne(num) { return num + 1 }

const x = [0,1,2,3]

console.log(map(x, addOne))

//Synchronous? Async? Single-Threaded?
// Javascript is a single-threaded, synchronous language 
// A function that takes a long time to run will cause a page to become unresponsive 

// Asynchronous Javascript 
// Execution Stack 
// Browser ExtensionScriptApis
// Function Queue
// Event Loop

// Asynchronous Javascript
// Asynchronous functions: setTimeout(), XMLHttpRequest(), JQuery.ajax(), fetch(), Database calls

function doSomethingAsync(callback) {
  setTimeout(function() { callback(1) }, 1000)
}

doSomethingAsync(console.log)

// we have a function that does something async'ously - in this case it returns '1' a second later 
// for network requests when we don't know exactly how long its gonna return what we do is we create a function that handles the return value so that the function knows when the request comes back what its supposed to do and does it

// Callback HELL 
// when we have a callback within a callback within a callback 
// SOLUTION? PROMISES! Something's eventually gonna happen 

// Promises: alleviate 'callback hell', allow you to write code that assumes a value is returned within a success function, only needs a single error handler

const url = ''

fetch(url)
  .then(function(res) {
    //handle error? no we can do... 
    return res.json() // extract the json out of the result 
  })
  .then(function(json) {
    return({
      importantData: json.importantData,
    })
  })
  .then(function(data){
    console.log(data)
  })
  .catch(function(err) {
    //handle error here instead 
  })

  // this is an example on how to handle the requests instead of callbacks within call backs - by using promises :D

// Async/Await (what is the future?) Introduced in ES2017, allows you to write async code as if it were synchornous 

// ~THIS~
// refers to an object that's set at the creat of a new execution context (function invocation)
// another stack frame in that stack
// in the global execution context referes to global object (window)
// if the function is called as a method of an object 'this' is bound to the object the method is called on 

// EXAMPLE
// how do we write something so that 'this' gets bound to other objects?
const person = {
  name: 'lina',
  greet: function() { console.log(this.name) },
}

person.greet() // this gets bound to person so 'this' so person.name becomes 'lina'

const friend = {
  name: 'jordan',
}
friend.greet = person.greet

friend.greet()

this.name = 'Yowon'
const greet = person.greet
greet() 

// 'this' is a way to use a variable that we dont know what will be bound to yet ... so we can think of it as a shortcut

// bind()

const greet = person.greet.bind({name: 'this is a bound object'})
greet()
// hello, this is a bound boject 
//bind returns a new function which we store in greet and evoke later 

// call(), apply() will immediately evoke that function
person.greet.call({ name: 'this is a bound object'})
person.greet.apply({ name: 'this is a bound object'})