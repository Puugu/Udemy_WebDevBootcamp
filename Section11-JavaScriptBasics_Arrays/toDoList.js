var toDos = ["Buy Groceries", "Sweep", "Kill Voldemort", "Clean David's office", "Buy Hogwarts textbooks"];

//ask user what they want to do
var input = prompt("What would you like to do?");

while(input !== "quit"){
	//check input
	if (input === "list"){
		listToDos();
	}
	else if (input === "new"){
		addToDo();
	}
	else if (input === "delete"){
		deleteToDo();
	}

	//ask again for new input
	input = prompt("What would you like to do?");

}
console.log("Ok, you have quit");

function listToDos(){
	console.log("**********");
	toDos.forEach(function(toDoItem, index){
		console.log(index+": "+toDoItem);
	})
	console.log("**********");
}

function addToDo(){
	//ask for new todo
		var newToDo=prompt("Enter new to do item.");
		toDos.push(newToDo);
		console.log("Added To Do Item");
}

function deleteToDo(){
	//ask for index of to do item to be deleted
	var deleteItem = prompt("Enter the index of the item to be deleted:");
	//delete that todo
	toDos.splice(deleteItem,1);
	console.log("Deleted To Do Item");
}