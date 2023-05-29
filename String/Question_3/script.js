//* פונקציה להסרת תווים שאינם מילים
function remove_non_word(str) {
  //* השתמש בביטוי רגולרי להחלפת תווים שאינם מילים במחרוזת ריקה
  return str.replace(/[^\w\s]/gi, "");
}

//* נתוני בדיקה
console.log(remove_non_word("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));
// "PHP - MySQL"
