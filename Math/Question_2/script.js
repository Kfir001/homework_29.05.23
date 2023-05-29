//* פונקציה למציאת הערך הגבוה ביותר במערך
function max(arr) {
  //* Math.max כדי למצוא את הערך הגבוה ביותר במערך
  return Math.max(...arr);
}

//* נתוני הבדיקה
console.log(max([12, 34, 56, 1])); // 56
console.log(max([-12, -34, 0, -56, -1])); // 0
