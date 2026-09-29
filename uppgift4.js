/* Lösning till Uppgift 4.skriver ut talen 1-20 och skriver sedan ut endast de jämna talen Av Njah Hmami, 2026 */
"use strict";

// Del1: Går igenom och skriva ut alla heltal från 1 till 20
for (let number = 1; number <= 20; number++) {
    console.log(number);
}
// Del2: Skriver ut endast de jämna talen
for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}