// ============================================================
// 🐛  CONDITIONALS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Pass" when score is 70, but it always
// logs "Pass" even when score is 30. Why?

let score = 30;
const passing = 60;

// if (score = passing) {
//   console.log("Pass ✅");
// } else {
//   console.log("Fail ❌");
// }

// What's wrong ↓
// in the if (score = passing) it is just reassigning score to be 60
// Your fix ↓
if (score >= passing) {
  console.log("Pass ✅");
} else {
  console.log("Fail ❌");
}

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A theme park ride requires riders to be EITHER
// at least 140cm tall OR accompanied by an adult.
// But the code is turning away people it shouldn't.

const height        = 135;
const withAdult     = true;
const minHeight     = 140;

// if (height >= minHeight && withAdult) {
//   console.log("🎢 Enjoy the ride!");
// } else {
//   console.log("🚫 Sorry, you cannot ride.");
// }

// What's wrong ↓
// It using the AND operator &&, but  we need the OR operator ||.
// Your fix ↓
if (height >= minHeight || withAdult) {
  console.log("🎢 Enjoy the ride!");
} else {
  console.log("🚫 Sorry, you cannot ride.");
}

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This shipping calculator has two bugs.
// One causes the wrong tier to log.
// One is a style issue from a previous lesson.
// Find both.

// var orderTotal = 85;

// if (orderTotal >= 50) {
//   console.log("🚚 Standard shipping: $5");
// }
// if (orderTotal >= 100) {
//   console.log("🚀 Free express shipping!");
// }
// if (orderTotal < 50) {
//   console.log("📦 Economy shipping: $9.99");
// }

// Bug 1 ↓
// var orderTotal = 85; style issues old variable used since 2015 , best practice is to use const or let.
// Bug 2 ↓
// the order of the orderTotal script needs to be from biggest to smallest so the console logs the correct conditions depending on the amount.
// Your fix ↓
let orderTotal = 85;

if (orderTotal >= 100) {
  console.log("🚀 Free express shipping!");
}
else if (orderTotal >= 50) {
  console.log("🚚 Standard shipping: $5");
}
else {
  console.log("📦 Economy shipping: $9.99");
}