/* Lösning till Uppgift 5. Av Njah Hmami, 2026 */
"use strict";

// Skapar en array med fem maträtter
const foods = ["Pizza", "Pasta", "Sushi", "Tacos", "Hamburgare"];

// Skriver ut hela arrayen
console.log(foods);

// Skriver ut första och sista maträtten
console.log("Första maträtten: " + foods[0]);
console.log("Sista maträtten: " + foods[foods.length - 1]);

// Lägger till en ny maträtt sist
foods.push("Lasagne");

// Tar bort den första maträtten
foods.shift();

// Skriver ut arrayen efter förändringarna
console.log(foods);