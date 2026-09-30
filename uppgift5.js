/* Lösning till Uppgift 5 - skapa och manipulera en arraymed maträttar */
"use strict";

// Skapar en array med fem maträtter
const foods = ["kebab", "Pasta", "Sushi", "Tacos", "kyckling", "Hamburgare"];

// Skriver ut hela arrayen
console.log(foods);

// Skriver ut första och sista maträtten
console.log("Första maträtten: " + foods[0]);
console.log("Sista maträtten: " + foods[foods.length - 1]);

// Lägger till en ny maträtt sist
foods.push("lasagne");

// Tar bort den första maträtten
foods.shift();

// Skriver ut arrayen efter förändringarna
console.log(foods);