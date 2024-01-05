//Variables and block scopes

let score = 90; //global scope
if (true) {
  let score = 50;
  console.log(score);
}
