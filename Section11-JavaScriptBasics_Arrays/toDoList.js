var toDos = ["Buy Groceries"];

//ask user what they want to do
var input = prompt("What would you like to do?");

while(input !== "quit"){
	//check input
	if (input === "list"){
		console.log(toDos);
		}
	else if (input === "new"){
		//ask for new todo
		var newToDo=prompt("Enter new to do item.");
		toDos.push(newToDo);
	}

	//ask again for new input
	input = prompt("What would you like to do?");

}
console.log("Ok, you have quit");