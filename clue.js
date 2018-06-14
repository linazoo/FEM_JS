// The rules
// When can we use a Dot? when its a String and it's a valid character
//Cant be a number, no quotes around it, weird characters or expressions

//When can we use Brackets
// Can be a string, a number, variable, weird characters, expressions

//so why won't we just use the Brackets instead of the Dots!?
//because we like to type LESS lol

// Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue.

var game = {};

game.murderer = "??";

game['weapons'] = [
  {type: 'gun'},
  {type: 'lasers'},
  {type:'angry dogs'},
  {type: 'windex'}
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green')
// ['Miss Scarlet', 'Mr. Green']

//Study Guide

// What is an object?
// What is the difference between dot and bracket notation?
// How do you add a property with a key that contains special characters?
// How do you add a property whose key and value are stored in different variables?
var thing1 = "butters";
var myvalue = ["hay sucka"];

game[thing1] = myvalue;
console.log(game);


// How do we loop through objects to access the values?

// Destructuring: a simplified method to extract multiple properties from an object

// Saves us from repeating ourselves

//variable declarations:
const [first, second] = [true,false];
let [first, second] = [true, false];
var [first, second] = [true, false];

// we are ceating variables on the left (thats the target) and the source is an array with values. (it might be confusing becaues theres two brackets on each side - we r not used to seeing brackes on each side)

// Assignment:
[first, second ] = [true, false]

// when do you use const vs let
// const when you dont want that variable to be renamed to something else
// if you tried to reassign const it gives you an error

//when do you use let
// allows you to reassign (kinda like var BUT...) let has implications for a scope. Before 'let' we didnt have a concept for a scope. a block is just {} that isnt an object. they can be a function block or an 'if' etc.

//OJECTS DESTRUCTURING
// variable declarations:
const { first, second } = { first: 0, second: 1 }
// How is this working? because the order and the matching names of the objects. OBJECTS dont have an order - the names have to match.


// Ojbects Exercise

// Create an object that looks like this:
// { name: "Rusty", room: "kitchen", weapon: "candlestick" }

const { name, room, weapon } = { "name": "Rusty", "room": "kitchen", "weapon": "candlestick" }

// Excercise
var game = {
  'suspects': [
    {
      name: "Rusty",
      color: "orange"
    }, {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}




// Loop through the suspects array

function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}

foo()

// loop through through all the properties of the suspect objects in thes suspects array, mark them if you thnk they are guilty

var gameloop = function(game) {
  for(var i = 0; i < game.suspects.length; i++) {
    console.log('outer loop')
    for (var key in game.suspects[i]) {
      console.log('inner loop')
      if (game.suspects[i][key] === "Rusty") {
        console.log('found \'em')
      } else {
        console.log('next time!');
      }
    }
  }
}

gameloop(game)

// gameloop(game)
// VM178:3 outer loop
// VM178:5 inner loop
// VM178:7 found 'em
// VM178:5 inner loop
// VM178:9 next time!
// VM178:3 outer loop
// VM178:5 inner loop
// VM178:9 next time!
// VM178:5 inner loop
// VM178:9 next time!


// destructure this nested data structure into two variables with the strings 'red' and 'orange'

var suspects = [
  {
      name: "Rusty",
      color: "orange"

  }, {
      name: "Miss Scarlet",
      color: "red"

  }
]

const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

// using DESTRUCTURING
var [firstColor, secondColor] = [suspects[0].color, suspects[1].color];

var [{color: firstColor}, {color: secondColor}] = suspects


// what does this function return?:

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak: function () {
      console.log("my name is ", name);
    }
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// returns an object. we're finding some properties like 'name' we are also passing that name in. When you give it a name it figures out its color when it splits at space 'Mustard' and then it has a 'speak' function that says its name.

// spot the difference:

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak() {
      console.log("my name is ", name);
    }
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

//SPEAK is a method on an object now (ES6 feature) we can add methods with no colons, just straight on there. Just a regular function!

// EXERCISE 
// we want to initialize each subject into our object - 'hydration' for this case 


// we wanna hydrate this list , we have the suspects list which needs to be a list of objects
// created from the CreateSuspectObjects function

// So we want Miss Scarlet to have a function with a name property with a name property that says 'miss scarlet' 
// and when we say missscarlet.speak we want it to say 'my name is miss scarlett'

// Hydrated object with Miss Scarlett
x = CreateSuspectObjects('Miss Scarlet');


function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak() {
      console.log("my name is ", name);
    }
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectsList =[];

// so we can loop through our list and assign suspect and we are gonna pass Create SuspectsObjects at I 
// THEN we push suspects to the suspect list


for(var i - 0; i < suspects.length; i++) {
  suspectList.push(CreateSuspectObjects(suspects[i]));
}


// Looping with _.each

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak() {log("my name is ${name}");}
    };
  };


var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectsList =[];

_.each(suspects, function(name) {
  let suspectObj = CreateSuspectObjects(name);
  suspectsList.push(suspectObj);
});

// one line

_.each(suspects, function(name) {
  suspectsList.push(CreateSuspectObjects(name));
});

// Bianca demonstrates how to use native forEach in modern browsers and _.each from underscore to loop through a list and their respective differences.

// _.each() / forEach DEFINED

_.each(
  ['observatory', 'ballroom', 'library'],
  function(value, index, list) { ... }
);

['observatory', 'ballroom', 'library']
.forEach(function(value,index,list) { ... });

//Iterates over a list of elements, passing the values to a function.
// Each invocation of iterator, the function, is called with three arguments:
// (element, index, list). If LIST is a Javascript object, iterator's arguments will be 
// (value, key, list)

// USAGE
_.each = function(list, callback) {
  // ... TODO
}

var rooms = ['observatory', 'ballroom', 'library'];
var logger = function(val) {
  console.log(val);
};

// what will this log?
_.each(rooms, logger);
// >> observatory, ballroom, library 

// EXERCISE
//we wanna make sure this works with Objects and Arrays

//THINKIG INSIDE OF THE EACH FUNCTION
const _ = {};

_.each = function(list, callback) {
  if(Array.isArray(list)) { //true
    //loop through array
    for (var i = 0; i < list.length; i++) {
      // first is the value, then the index, then the list inside of the callback function you have access to those three. it's flexible
      //call the callback with a list item
      callback(list[i], i, list);
    }
      
  } else {
    //loop through object
    //call the callback with a list item
    //loop through the list
    // for each loop i want to call the callback with a list item
    for(var key in list) {
      callback(list[key], key, list)
    }
  }
}

// THIS IS WHAT WE WRITE 
//call .each so we can look at it with some data
_.each(['Sally', 'Georgie', 'Porgie'], function(name, i, list) {
  if(list[i + 1]) {
    console.log(name, 'is younger than', list[i+1] );
  } else {
    console.log(name, 'is the oldest')
  }
})

//so for each one we are gonna loop through and check IF there is an item after
// the current index, we r gonna console log that 'sally is younger than georgie'
// if there isnt one, we'll say 'porgie is the oldest'

// list = the Array
// callback = the entire function (above)

// -----------------------------------------------------------------------------------------
// _.map() / .map() DEFINED

_.map([1, 2, 3], function(v, i, list) { console.log(v)})

//we are not saying return here so it will return undefined 
// in this case we'll have an array of length 3 of undefined values
//why? because the original array is length 3 
// return an array of the same size every time 

// http://underscorejs.org/#map

// - produces a new array of values by mapping each value in list through a transformation function (iterator)
// -Each invocation of iterator is called with three arguments: (element, index, list). 
// If lists is a JS object. iterator's arguments will be (value, key, list)

const weapons = [ 'candlestick', 'lead pipe', 'revolver']

const makeBroken = function(item) {
  return `broken ${item}`;
}

const brokenWeapons = _.map(weapons, makeBroken);

//what would we get? check if its an array like this:

Array.isArray(_.map(weapons, makeBroken)) 

// returns an array with ['broken pipe, broken candlestick ...']

brokenWeapons;



// _.map vs _.each 
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {log("my name is ${this.name}");}
    };
  };

// rather than concatonating strings we are creating objects and returning them 
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectsList = _.map(suspects, function(name){
  return CreateSuspectObjects(name);
});

//...and then we can each through them and call each one
_.each(suspects, function(suspect) {
  suspect.speak()
});

// Implementing Map
//Looping with _.map 


// first, make sure we have an array
// create an empty array to store
const _ = {};
_.map = function (list, callback) {
  var storage = [];
  //loopin
  for (var i = 0; i < list.length; i++) {
    //callback on each element and push to the storage array
    //callback(element)
    //push it 
      storage.push(callback(list[i], i, list))
  }

  // return []
  return storage;
}

_.map([1,2,3], function(val) {return val +1;})

// since functional programmers DONT LIKE LOOPS we're gonna use each
//how do we translate the above to our each?

_.each(list, function(v, i , list) {
  storage.push(callback(v, i, list)) 
})

// _.filter 

_.filter = function(arr, callback) {
  //create a new array
  const storage = [];
  //loop through array 
  for(let i = 0; i < arr.length; i++) {
    // check if callback returns true
    if(callback(arr[i], i, arr) === true) {
      //if it does push into array 
      storage.puhs(arr[i])
    }
  }
  //return array
  return storage;
}
// ---------------------------------------------------
// using each 

_.filter = function(arr, callback) {
  //create new array
  const storage = [];
  // loop through array 
  _.each(arr, function(item, i, list) {
    if(callback(item, i, list)) { storage.push(item); }
  });

  //return array
  return storage;
}


//now we're going tot take our filter and apply it our data

const videoData = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Mrs. White',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Rusty',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  }
];


_.filter(videoData, function(suspectObject) {
  return suspectObject.present;
});

// explained 
// where does this code start?
// we are calling our _.filter function which we defined
// the first argument is videoData (our array) cb is the function
// the function is getting called with each item in the array, an array of objects
// so the first item in the array is a Typeof Object


FUNCITONS

// API REQUESTS

fetch('https://api.myjson.com/bins/n8kwe')
  .then(function(response) {
    return response.json();

  })
  .then(function(myJson) {
    console.log(myJson);
  });

// one of the most imporant things about JAVASCRIPT?
// KNOW WHAT CAN GO WRONG!

// FUNCTIONS Specifics - what order does our code execute in?
// (in addition to the onves above, map, filer each)

var add = function(a, b) {
  return a + b 
};

add(3, 4, 5);

'add' = function name
'a, b' = parameters 
'{ return a + b };' = function body
'add(3,4,5)' = Invocation/ Call-time 
'3,4,5' = arguments  

// A couple of pieces that are confusing about functions to us:
//   - The difference between defining a function and invoking/calling a function
//     anything in the brackets is static - it never runs until it's called 

// Parameters: the parameters are variables, they don't hold a value until it's called 
// and the Arguments are what you pass (to the function they have values)
//   - often these terms are used interchangeably but they do mean different things:
//   Parameters are variables and have no value until called
//   Arguments are the actual value 
// defining a function: its static, it doesnt run UNTIL you invoke it


// SCAVENGER HUNT
// Find: function definitions, Fn Names, Invocations, Arguments, Parameters, Fn Bodies, Return Values, SIde Effects
// Return values : explicitly return - return statement 
// Side Effects: things that are happening other than returning the value that affect something outside of that function
// console.log(); is a side effect because you're logging to the console that exists outside of that function
// Or if you're changing the value of an object that's in a different scope 

var nameImprover = function (name, adj) {
  return 'Col ' + name + ' MC' + adj + ' pants';
};

$('body').hide();

myArr.forEach(function(val) {console.log(val);});

$('button').on('click', function() {
  console.log('Don\t press my buttons!');
});

function definitions: anything after this: function (){}
function name: nameImprover, .hide, .forEach, .on, .log, $ 
function body: { return 'Col ' + name + ' MC' + adj + ' pants'; }, {console.log(val);}, {
  console.log('Don\t press my buttons!');
}
// Important thing about function bodies: They don't get run until the function is invoked

function Invocations: .log(val), .log('don\'t press m buttons'), .hide();, .forEach(function(val), ), .on('click', function()'), $'s

// Arguments vs parameters: arguments are passed to the fucntion parameters are used to invoke a function

function parameters: (name, adj), (val)
function argument: ('body'), ('button'), ('click', function() {console.log(...)}), (function(val){console.log(val);})

Return/Side Effects: return 'Col + name + 'Mc' + adj + 'pants';, anything on the dom is a side effect


