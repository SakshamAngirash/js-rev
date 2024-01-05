let dishes = ["biryani", "chat", "parantha"];
console.log(dishes);
console.log(dishes[1]);

//modification in array
dishes[1] = "dahi tikki";
console.log(dishes);

//array methods
//join method
console.log(dishes.join("-")); //seperator
//joins all elements to form a string

//indexOf method
console.log(dishes.indexOf("biryani"));

//concationation method of two arrays togethers
let newDishes = ["paneer", "dalmakhni", "dahi"];
console.log(dishes.concat(newDishes));
console.log(newDishes.concat(dishes));
//original array modify nhi hoti h

console.log(dishes.length);
