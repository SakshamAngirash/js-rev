let stringtype = "54";
console.log(stringtype, typeof stringtype);

//Number Method and string method
let numberType = Number(stringtype);
console.log(numberType, typeof numberType);
//vice versa also possible

//NaN
let str = "hello";
let num = Number(str);
console.log(num, typeof num);

//Boolean method
let age = 32;
let BooleanValueOfAge = Boolean(age);
console.log("Boolean value of age is ", BooleanValueOfAge);
