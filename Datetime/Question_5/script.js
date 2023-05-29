//* פונקציה להצגת לוח שנה לחודש נתון
function displayCalendar(monthYear) {
  //* פירוק המחרוזת לחודש ושנה
  let [month, year] = monthYear.split("/");
  month = parseInt(month);
  year = parseInt(year);

  //* מערך של שמות ימי השבוע
  let daysOfWeek = ["M", "T", "W", "Th", "F", "S", "Su"];

  //* מציאת יום השבוע של היום הראשון בחודש
  let firstDay = new Date(year, month - 1, 1).getDay();

  //* מציאת מספר הימים בחודש
  let numOfDays = new Date(year, month, 0).getDate();

  //* הדפסת שמות ימי השבוע
  console.log(daysOfWeek.join("   "));

  //* משתנה למעקב אחרי היום הנוכחי בחודש
  let dayCounter = 1;

  //* לולאה להדפסת הלוח שנה
  for (let i = 0; i < 6; i++) {
      let week = "";
      for (let j = 0; j < 7; j++) {
          if ((i === 0 && j < firstDay) || dayCounter > numOfDays) {
              week += "    ";
          } else {
              week += dayCounter + "   ";
              dayCounter++;
          }
      }
      console.log(week);
  }
}

//* ניסוי עם נתוני הבדיקה
displayCalendar('1/2019');
displayCalendar('2/1990');