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

filmLibrary.forEach(function(movie){
	console.log(buildSentence(movie));
});

function buildSentence(film){
	var result = "You have ";
	if(film.hasWatched === true){
		result +="watched ";
	}
	else {
		result +="not seen ";
	}
	result+=("\""+film.title+"\" - "+film.rating+" stars");
	return result;
}
