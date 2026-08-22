// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;
console.log("Tip: $" + tipAmount);

// What's wrong ↓
// % is for modulo  and not multiplication and tipPercent should be 0.15 not 15
// Your fix ↓
const billAmount = 80;
const tipPercent = 0.15;
const tipAmount  = billAmount * tipPercent;
console.log("Tip: $" + tipAmount);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

const countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓
const countdown = 10; //  can't be reassigned.
// Your fix ↓
let countdown = 10; // can be reassinged.

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓
// There is no reproducible logic bug. The usernames have different capitalizations , so they don't match. The code correctly returns *false* so
// I could not reproduce the claimed bug.

// Style issue 1 ↓
// Var is being used over const , values aren't being reassigned so const is appropriate.

// Style issue 2 ↓
// The variable username1 and username2 could be written as camel case for clarity and readability.

// Your fix ↓

const firstUsername = "gamer99";
const secondUsername = "Gamer99";
console.log("Names match: " + (firstUsername == secondusername));