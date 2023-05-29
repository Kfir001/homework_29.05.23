//* פונקציה לבדיקה אם מחרוזת היא פנגרמה
function isPangram(str) {
  //* בדיקה אם הקלט הוא מחרוזת
  if (typeof str !== "string") {
    return "It must be a string.";
  }
  //* המרה של המחרוזת לאותיות קטנות
  str = str.toLowerCase();
  //* אלפבית באנגלית
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //* לולאה על כל האותיות באלפבית
  for (let i = 0; i < alphabet.length; i++) {
    //* בדיקה אם האות נמצאת במחרוזת
    if (str.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

//* נתוני בדיקה
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Waltz, bad nymph, for quick jigs vex.")); // true
console.log(isPangram("The five boxing wizards jump quickly.")); // true
console.log(isPangram("The boxing wizards jump quickly.")); // false
console.log(isPangram(12356)); // "It must be a string."
