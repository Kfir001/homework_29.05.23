//* פונקציה לקבלת ייצוג טקסטואלי של יום
function short_Days(dt) {
  //* מערך של ימי השבוע באנגלית
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //* מחזירים את היום המתאים מהמערך לפי האינדקס של היום בשבוע
  return days[dt.getDay()];
}

//* נתוני בדיקה
let dt = new Date(2015, 10, 1);
console.log(short_Days(dt)); // "Sun"
