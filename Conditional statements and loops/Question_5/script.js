//* יצירת משתנה ריק לאחסון התוצאה
let result = '';

//* לולאה חיצונית לשורות
for (let i = 0; i < 5; i++) {
    //* לולאה פנימית לכוכביות בכל שורה
    for (let j = 0; j <= i; j++) {
        result += '* ';
    }
    //* הוספת שורה חדשה לסיום השורה הנוכחית
    result += '\n';
}

//* הדפסת התוצאה
console.log(result);