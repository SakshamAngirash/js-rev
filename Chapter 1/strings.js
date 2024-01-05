console.log("SakshamAngirash");
let firstName = "Saksham";
let lastName = "Angirash";
console.log(firstName, lastName);

//Concationation of Strings
//Method 1: using + symbol
let fullName = firstName + " " + lastName;
console.log(fullName); //space nahi aayAAS

//Method 2:using template literals
let full = `My name is ${firstName} ${lastName}`;
console.log(full);

//getting single element from a string
console.log(full[0]);
//charcter array

//string methods
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.indexOf("a"));

let hobbies = "    coding reading running   ";
console.log(hobbies);
console.log(hobbies.indexOf("coding"));
//trim
let trimhobbies = hobbies.trim();
console.log(trimhobbies);
console.log(trimhobbies.indexOf("coding"));

//now we have to divide
let str = "saksham";
console.log(str.lastIndexOf("s"));
console.log(str.lastIndexOf("g")); //case sesitive

console.log(str.includes("s"));
console.log(str.includes("g"));

//slice method
let fullName1 = "Sakshamangirash";
console.log(fullName1.slice(0, 7)); //7th index is excluded

//split method
let favColors = "blue red brown grey pink";
let arrColors = favColors.split(" ");
console.log(arrColors);

//strings are immutable
let str1 = "Hello";

str1[0] = "s";
console.log(str1);

str1 = str1 + " World";
console.log(str1);
//but this is assigned at a new location left wala
