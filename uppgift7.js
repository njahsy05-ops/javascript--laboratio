/* Lösning till Uppgift 7.summerar tal i en array med en funktion Av Njah Hmami, 2026 */
"use strict";

// Skapar en array med sex tal
const numbers = [3, 6, 9, 12, 15, 18];

// Funktion som räknar ut summan av talen i en array
function calculateSum(array) {
    let sum = 0;

    // Går igenom alla tal i arrayen
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
}

// Anropar funktionen och skriver ut resultatet
console.log("Summan är " + calculateSum(numbers));
// Testar funktionen med en annan array med andra värden och en annan längd
console.log("Summan är " + calculateSum([1, 2, 3]));