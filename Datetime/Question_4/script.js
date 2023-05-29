function diff_to_GMT(dt) {
  //* קבלת ההפרש בדקות בין הזמן המקומי לזמן העולמי
  let diff = -dt.getTimezoneOffset();
  //* חישוב השעות והדקות
  let hours = Math.floor(diff / 60);
  let minutes = diff % 60;
  //* החזרת התוצאה בפורמט מבוקש
  return (hours >= 0 ? "+" : "-") + ("0" + Math.abs(hours)).slice(-2) + "." + ("0" + minutes).slice(-2);
}

//* נתוני הבדיקה
let dt = new Date();
console.log(diff_to_GMT(dt));