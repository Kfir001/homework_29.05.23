function sumNumbers(arr) {
  //* פונקציה המקבלת מערך כקלט
  return arr.reduce((sum, current) => {
    //* שימוש במתודת reduce לחישוב הסכום
    if (typeof current === "number") {
      //* בדיקה האם האלמנט הוא מסוג מספר
      return sum + current;
      //* אם כן, מוסיפים את הערך שלו למשתנה הסכום
    } else {
      return sum;
      //* אחרת, מחזירים את הערך של המשתנה הסכום ללא שינוי
    }
  }, 0);
  //* מאתחלים את הערך ההתחלתי של המשתנה הסכום לאפס
}

let arr1 = [2, "11", 3, "a2", false, 5, 7, 1];
let arr2 = [2, 3, 0, 5, 7, 8, true, false];

console.log(sumNumbers(arr1)); // Expected Output: 18
console.log(sumNumbers(arr2)); // Expected Output: 25
