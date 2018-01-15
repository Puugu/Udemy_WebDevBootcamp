function isEven(num){
	if(typeof(num) !== 'number'){
		return "ERROR: '"+num+"'' is not a number.";
	}
	else if (num%2 === 0){
		return true;
	} else{
		return false;
	}
}

function factorial(number){
	if(typeof(number) !== 'number'){
		return "ERROR: '"+number+"'' is not a number.";
	}
	else if (number<0){
		return "ERROR: '"+number+"'' is less than zero.";
	}
	else if (number===0){
		return 1;
	}
	else {
		for(var i=(number-1); i>1;i--){
			number=number*i;
		}
		return number;
	}
}

function kebabToSnake(string){
	return string.replace(/-/g, "_")
}