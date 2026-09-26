/* Lösning till Uppgift 4. Av Njah Hmami, 2026 */
"use strict";

// Går igenom alla heltal från 1 till 20
for (let number = 1; number <= 20; number++) {
    // Skriver endast ut jämna tal
    if (number % 2 === 0) {
        console.log(number);
    }
}