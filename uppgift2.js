/* Lösning till Uppgift 2. Av Njah Hmami, 2026 */
"use strict";

// Pris för en produkt och antal produkter
const price = 100;
const quantity = 3;

// Beräknar totalpriset
const totalPrice = price * quantity;

// Beräknar totalpriset inklusive 25 % moms
const totalWithTax = totalPrice * 1.25;

// Skriver ut resultaten
console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + totalPrice + " kr");
console.log("Totalt inklusive moms: " + totalWithTax + " kr");