//* פונקציה לבדיקה אם מספר הוא מספר עצמי-מחלק
function isSelfDividing(num) {
  //* המרת המספר למחרוזת ולאחר מכן למערך של ספרות
  let digits = num.toString().split("");
  //* בדיקה אם כל הספרות במערך מחלקות את המספר
  return digits.every((digit) => num % parseInt(digit) === 0);
}

//* בדיקת נתוני הבדיקה
console.log(isSelfDividing(48)); // true
console.log(isSelfDividing(22)); // true
console.log(isSelfDividing(63)); // false
