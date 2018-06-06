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

game.['weapons'] = [
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
variable declarations:
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

