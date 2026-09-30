/* Lösning till Uppgift 6. arean av en rektangel med funktion. Av Njah Hmami, 2026 */
"use strict";

// Funktion som räknar ut arean av en rektangel
function calculateArea(width, height) {
    const area = width * height;
    return area;
}

// Anropar funktionen med olika värden
console.log("Arean är " + calculateArea(3, 6));
console.log("Arean är " + calculateArea(5, 8));
console.log("Arean är " + calculateArea(7, 9));