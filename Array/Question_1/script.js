//* פונקציה לבדיקה אם הקלט הוא מערך או לא
function is_array(input) {
    //* משתמש במתודה Array.isArray כדי לבדוק אם הקלט הוא מערך
    return Array.isArray(input);
  }
  
  //* בדיקת נתוני המבחן
  console.log(is_array('w3resource')); // false
  console.log(is_array([1, 2, 4, 0])); // true
  