

let line = ("*********")


let crustsArr = ["deep dish", "hand tossed", "thin crust", "thick crust"];
let sauceArr = ["traditional", "pesto", "marinara"];
let cheeseArr = ["mozzarela", "feta", "provolone", "cheddar"];
let toppingsArr = ["pepperoni", "black olives", "jalepenos", "pineapple", "anchovies"]



function randomPizza(){
    var pizza = {};
    pizza.crust = randomizePizza(crustsArr, 4);
    pizza.sauce = randomizePizza(sauceArr, 3);
    pizza.cheese = randomizePizza(cheeseArr, 4);
    pizza.topping = [];
    for(i = 0; i < 2; i++){
        var rand_topping = randomizePizza(toppingsArr, 5);
        pizza.topping.push(rand_topping)
    }
    return pizza;
}


function randomizePizza(ingredient, max){
    var rand_num = Math.floor(Math.random() * max);
    var selection = ingredient[rand_num];
    return selection; 
}


function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;

    return pizza;
}


var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var pizza3 = pizzaOven("thin crust", "traditional", "mozzarella", ["pineapple", "anchovies"])
var pizza4 = pizzaOven("thick crust", "pesto", "feta", ["basil", "black olives"])
console.log(pizza1);
console.log(line);
console.log(pizza2);
console.log(line);
console.log(pizza3);
console.log(line);
console.log(pizza4);
console.log(line);
console.log("RANDOM PIZZA: ")
var random_pizza = randomPizza(); 
console.log(random_pizza);
