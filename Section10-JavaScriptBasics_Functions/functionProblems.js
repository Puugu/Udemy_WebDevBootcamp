function isEven(num){
	//check to make sure the argument is actually a number
	if(typeof(num) !== 'number'){
		return "ERROR: '"+num+"'' is not a number.";
	}
	//return true if even
	//return false otherwise
	else {
		return num%2 === 0;  //This expression will either be true or false
	}
}

function factorial(number){
	//check to make sure the argument is actually a number
	if(typeof(number) !== 'number'){
		return "ERROR: '"+number+"'' is not a number.";
	}
	//check to see if the argument is negative
	else if (number<0){
		return "ERROR: '"+number+"'' is less than zero.";
	}
	//check to see if the argument is zero
	else if (number===0){
		return 1;
	}
	//calculate the factorial
	else {
		for(var i=(number-1); i>1;i--){
			number*=i;
		}
		return number;
	}
}

function kebabToSnake(string){
	//replace all instances of '-' in the string with '_'
	return string.replace(/-/g, "_")
}