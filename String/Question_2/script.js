//* פונקציה לקיצור מחרוזת אם היא ארוכה ממספר התווים המצויין
function text_truncate(str, length = str.length, ending = "...") {
  //* בדיקה אם אורך המחרוזת גדול מהאורך המצויין
  if (str.length > length) {
    //* קיצור המחרוזת לאורך המצויין והוספת הסיומת (ברירת המחדל היא "...")
    return str.substring(0, length - ending.length) + ending;
  } else {
    //* אחרת, החזרת המחרוזת כמו שהיא
    return str;
  }
}

console.log(text_truncate("We are doing JS string exercises."));
console.log(text_truncate("We are doing JS string exercises.", 19));
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
