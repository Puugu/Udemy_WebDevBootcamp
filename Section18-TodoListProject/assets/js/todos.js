//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
})

//delete to do when clicking trashcan
$("ul").on("click", ".deleteMe", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//add new to-do item to the list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//get text of new to do item
		var toDoText = $(this).val();
		//clear out the input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span class=\"deleteMe\"><i class=\"fa fa-trash\"></i></span> "+toDoText+"</li>");
	}
})