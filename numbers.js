let score = 50;
console.log(score, typeof score);

//divison decimal
let result = score / 3;
console.log(result);

//power **
let power = score ** 2;
console.log(power);

//concatination of numbers to string
let stringLine = "My Score is " + result;
console.log(stringLine);

//Loose equality (==)vs strong equality(===)
let age = 22;
console.log(age == 22);
console.log(age == "22");
//strong eqaulity
console.log(age == "22"); //false
console.log((age = 22)); //only true
