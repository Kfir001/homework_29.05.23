//* תוכנית JavaScript שמעבירה מספרים שלמים מ-1 ל-100
for (let i = 1; i <= 100; i++) {
  //* אם המספר מתחלק ב-3 וב-5 הדפס "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  //* אם המספר מתחלק ב-3 הדפס "Fizz"
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  //* אם המספר מתחלק ב-5 הדפס "Buzz"
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  //* אחרת, הדפס את המספר עצמו
  else {
    console.log(i);
  }
}
