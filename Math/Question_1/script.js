//* פונקציה ליצירת מספר שלם אקראי בין min ל-max
function rand(max = 1, min = 0) {
  //* מחשב את הטווח בין המספרים
  let range = max - min;
  //* מחשב מספר אקראי בין 0 ל-1 ומכפיל אותו בטווח
  let randomNum = Math.random() * range;
  //* מעגל את המספר האקראי למספר שלם ומוסיף את הערך המינימלי
  return Math.round(randomNum) + min;
}

//* בדיקת הנתונים
console.log(rand(20,1)); // 15
console.log(rand(1,10)); // 5
console.log(rand(6)); // 1
console.log(rand()); // 0