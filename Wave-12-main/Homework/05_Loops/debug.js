// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

for (let i = 1; i < 10; i++) {
  console.log(i);
}

// What's wrong ↓
// i < 10
// Your fix ↓
// i <=10
// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?

for (let i = 1; i <= 5; i++) {
  let total = 0;
  total += i;
}
console.log("Sum: " + total);

// What's wrong ↓
//  let total = 0;
// Your fix ↓
//  let total = 0; should be above for (let i = 1; i <= 5; i++) {
  


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
console.log("Done!");

// Bug 1 ↓
//  if (i % 2 === 0) this checks for even numbers
// Bug 2 ↓
// else and continue are not needed
// Your fix ↓
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
console.log("Done!");