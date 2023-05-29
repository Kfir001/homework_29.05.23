//* פונקציה לבדיקה אם הקלט הוא מחרוזת
function is_string(input) {
  //* בדיקה אם סוג הקלט הוא מחרוזת
  return typeof input === "string";
}

//* בדיקת נתוני הבדיקה
console.log(is_string("w3resource")); // true
console.log(is_string([1, 2, 4, 0])); // false
