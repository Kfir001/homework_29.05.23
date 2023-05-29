//* פונקציה לקבלת היום האחרון של חודש
function lastday(year, month) {
  //* יצירת אובייקט תאריך עם השנה והחודש הנתונים והיום הראשון של החודש הבא
  let date = new Date(year, month + 1, 0);
  //* מחזירים את היום מהאובייקט התאריך
  return date.getDate();
}

//* נתוני בדיקה
console.log(lastday(2014, 0)); // 31
console.log(lastday(2014, 1)); // 28
console.log(lastday(2014, 11)); // 31
