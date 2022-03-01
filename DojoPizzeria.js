// ----------------------THE PIZZA OVEN ASSIGNMENT-----------------//

// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.
// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
// Create 2 more pizzas with any toppings we like!

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function pizzOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}
//Now I want to make my first pizza, I call it p1.
var p1 = pizzOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log(p1);

var p2 = pizzOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(p2);

var p3 = pizzOven("thined crust", "tomato", "american cheese", [
  "mushroom",
  "pinapple",
]);
console.log(p3);

var p4 = pizzOven("handed toss", "traditional", "American cheese", [
  "onion",
  "mushroom",
  "pinapple",
]);
console.log(p4);

//BONUS - CREATE a function called randomPizza that uses Math.random() to create a random pizza.


Math.random();//random will return pseduou number 0 to less than 1

//Create a function to build a pizza with random ingredients

function pizzaOven()
//.....................................
function randomPizza() {
    let crustType = ["hand tossed", "cruncy thin", "handmade pan"]
    let sauceType = ["tradtional", "marinara", "pesto", "white garlic"]
    let cheeseType = ["american", "feta", "pepper jack", "parmesan", "chedder"]
    let topping = ["pineapple","pepperoni","onion","mushroom","bacon","sausage"]
};
let crust = [];
let sauce = [];
let cheese = [];
let topping = [];

crust = crustType[Math.floor(Math.random())] * crustType.length - 1)];
//............................
