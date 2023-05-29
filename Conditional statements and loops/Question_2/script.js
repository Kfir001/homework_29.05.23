//* פונקציה שמקבלת שלושה מספרים ומחזירה את הסימן של המכפלה שלהם
function findSignOfProduct(a, b, c) {
  let product = a * b * c;
  if (product < 0) {
    alert("The sign is -");
  } else {
    alert("The sign is +");
  }
}

//* דוגמא לשימוש בפונקציה
findSignOfProduct(3, -7, 2); // The sign is -