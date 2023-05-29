//* יצירת מערך של התלמידים והציונים שלהם
let students = [
  { name: "David", mark: 80 },
  { name: "Vinoth", mark: 77 },
  { name: "Divya", mark: 88 },
  { name: "Ishitha", mark: 95 },
  { name: "Thomas", mark: 68 }
];

//* חישוב הממוצע
let average = students.reduce((acc, student) => acc + student.mark, 0) / students.length;

//* הדפסת הממוצע
console.log("Average mark:", average);

//* קביעת הציון לפי הממוצע
let grade;
if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

//* הדפסת הציון
console.log("Grade:", grade);