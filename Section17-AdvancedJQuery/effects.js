$("button").on("click", function(){
	$("div").fadeOut(500, function(){
		$(this).remove();
	});
});