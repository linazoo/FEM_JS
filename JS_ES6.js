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