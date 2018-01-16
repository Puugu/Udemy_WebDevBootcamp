//printReverse()
function printReverse(array){
	//This function takes an array as an argument and prints its elements in the reverse order.
	for(var i = array.length; i>=0; i--){
		console.log(array[i]);
	}
}

//isUniform()
function isUniform(array){
	//This function takes an array as an argument and returns true if all the elements in the array are identical.
	var value = array[0];
	var isIdentical = true;
	array.forEach(function(checkMe){
		if(checkMe !== value){
			isIdentical = false;
		}
	})
	return isIdentical;
}

//sumArray()
function sumArray(array){
	//This function takes an array of numbers as an argument and returns the sum of all the numbers in the array.
	var sum = 0;
	array.forEach(function(value){
		sum+=value;
	})
	return sum;
}

//max()
function max(array){
	//This function accepts an array of numbers and returns the largest value in the array. 
	var maxVal = array[0];
	array.forEach(function(value){
		if(value>maxVal){
			maxVal = value;
		}
	})
	return maxVal;
}