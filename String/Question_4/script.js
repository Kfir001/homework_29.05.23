//* פונקציה להפוך את התו הראשון של מחרוזת לאות קטנה
function Uncapitalized(str) {
  //* בדיקה אם המחרוזת ריקה
  if (str.length === 0) {
      return str;
  }
  //* החזרת המחרוזת עם התו הראשון כאות קטנה
  return str[0].toLowerCase() + str.slice(1);
}

//* ניסיון של הפונקציה
console.log(Uncapitalized('Js string exercises')); // "js string exercises"