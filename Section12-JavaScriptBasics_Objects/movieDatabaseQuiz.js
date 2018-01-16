var filmLibrary = [
	{
		title: "Wolf Children",
		rating: 8.2,
		hasWatched: true
	},
	{
		title: "Mad Max Fury Road",
		rating: 8.1,
		hasWatched: true
	},
	{
		title: "Fifth Element",
		rating: 7.7,
		hasWatched: false
	},
	{
		title: "Baby Driver",
		rating: 7.7,
		hasWatched: false
	}
];

filmLibrary.forEach(function(film){
	if(film.hasWatched === true){
		console.log("You have watched \""+film.title+"\" - "+film.rating+" stars");
	}
	else{
		console.log("You have not seen \""+film.title+"\" - "+film.rating+" stars");
	}
});
