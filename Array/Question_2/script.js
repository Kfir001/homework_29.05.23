function countArrays(arr) {
    //* פונקציה המקבלת מערך כקלט
    return arr.filter(n => Array.isArray(n)).length;
    //* משתמש במתודת ה־filter ליצירת מערך חדש עם כל האלמנטים שעברו את המבחן 
  }
  
  let arr1 = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
  let arr2 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
  
  console.log(countArrays(arr1)); // Expected Output: 2
  console.log(countArrays(arr2)); // Expected Output: 3
  