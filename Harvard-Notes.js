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