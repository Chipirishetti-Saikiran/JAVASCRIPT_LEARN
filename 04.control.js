//CONTROL FLOW

//IF ELSE IF_ELSE

//IF
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

//if else
let num = 10;
if (num > 0) {
  console.log("Positive number");
} else {
  console.log("Not a positive number");
}


//if else else if 
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}


//Ternary 
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
