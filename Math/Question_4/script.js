//* פונקציה לביצוע חשבון מטבע (חיבור, חיסור, כפל, חילוק וכו')
function currencyMath(n1, n2, operation) {
  //* הסרת הסימן של המטבע מהמחרוזת והמרתה למספר
  n1 = parseFloat(n1.replace(/[^0-9.-]+/g, ""));
  n2 = parseFloat(n2.replace(/[^0-9.-]+/g, ""));

  //* ביצוע הפעולה המתמטית המבוקשת
  let result;
  switch (operation) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      result = n1 / n2;
      break;
    default:
      return "Invalid operation";
  }

  //* החזרת התוצאה עם הסימן של המטבע
  return "$" + result.toFixed(2);
}

//* נתוני בדיקה
let n1 = "$40.24",
  n2 = "$21.57";
console.log(currencyMath(n1, n2, "add")); // $61.81
console.log(currencyMath(n1, n2, "subtract")); // $18.67
console.log(currencyMath(n1, n2, "multiply")); // $867.49
console.log(currencyMath(n1, n2, "divide")); // $1.87
