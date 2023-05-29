//* הגדרת מערך של שמות עם כפילויות
let names = ["Kfir", "Kfir", "Alon", "Ema", "Ema", "Jasmine", "Alon"];

//* הסרת הכפילויות מהמערך באמצעות המתודה filter()
let uniqueNames = names.filter((name, index) => names.indexOf(name) === index);

//* הדפסת המערך ללא כפילויות
console.log(uniqueNames); // ["Kfir", "Kfir", "Alon", "Ema", "Ema", "Jasmine", "Alon"]