function array_filled(n, val) {
  //* יצירת מערך באורך n עם האופרטור של התפשטות
  return (
    Array(...Array(n))
      //* מילוי כל אחד מהאיברים בערך המוגדר val
      .map(String.prototype.valueOf, val)
  );
}
console.log(array_filled(3, "default value"));
console.log(array_filled(4, "password"));
