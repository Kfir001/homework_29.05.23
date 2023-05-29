//* פונקציה שמקבלת שני מספרים ומחזירה את הגדול מביניהם
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

//* דוגמא לשימוש בפונקציה
console.log(maxOfTwoNumbers(1, 2)); // 2
