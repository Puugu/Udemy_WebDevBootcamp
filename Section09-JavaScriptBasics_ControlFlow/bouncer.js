var age=prompt("How old are you?");

if(age<0){
	console.log("ERROR: Cannot be unborn.");
} else if (age<18){
	console.log("You are to young to come in.");
} else if (age<21) {
	console.log("You can come in, but you cannot drink.");
} else if (age==21){
	console.log("Happy 21st Birthday. Come on in.");
} else {
	console.log("You are welcome to come in.");
}

//check to see if age is odd or a perfect square
if (age%2 != 0){
	console.log("Your age is odd. Does that mean you are?");
} else if ((age>0) && (Math.sqrt(age)%1===0)){
	console.log("Your age is a perfect square. Interesting....")
}
//no need to put an else