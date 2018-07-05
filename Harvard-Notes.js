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

