function lcm_two_numbers(x, y) {
  //* מציאת המספר הגדול יותר והמספר הקטן יותר
  let max = Math.max(x,y);
  let min = Math.min(x,y);
  //* התחלת המשותף הקטן ביותר עם המספר הגדול יותר
  let lcm = max;
  //* לולאה שמחשבת את המשותף הקטן ביותר
  while(lcm % min !== 0){
      lcm += max;
  }
  //* מחזירה את המשותף הקטן ביותר
  return lcm;
}

//* בדיקת נתוני הבדיקה
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));