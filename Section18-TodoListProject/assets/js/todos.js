//check off specific todos by clicking
$("li").on("click", function(){
	$(this).toggleClass("completed");	
})

//delete to do when clicking trashcan
$(".deleteMe").on("click", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})