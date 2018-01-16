//printReverse()
function printReverse(arr){
	//This function takes an array as an argument and prints its elements in the reverse order.
	for(var i = arr.length-1; i>=0; i--){
		console.log(arr[i]);
	}
}

//isUniform()
function isUniform(arr){
	//This function takes an array as an argument and returns true if all the elements in the array are identical.
	var value = arr[0];
	for(var i=1; i<arr.length; i++){
		if(arr[i] !== value){
			return false;
		}
	}
	return true;
}

//sumArray()
function sumArray(arr){
	//This function takes an array of numbers as an argument and returns the sum of all the numbers in the array.
	var sum = 0;
	arr.forEach(function(value){
		sum+=value;
	})
	return sum;
}

//max()
function max(arr){
	//This function accepts an array of numbers and returns the largest value in the array. 
	var maxVal = arr[0];
	arr.forEach(function(value){
		if(value>maxVal){
			maxVal = value;
		}
	})
	return maxVal;
}