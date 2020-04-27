(function(window) {
	var byeSaid = {};
	var sayWord = "Goodbye";
	byeSaid.said = function(name) {
		console.log(sayWord + " " + name);
	}
	
	window.byeSaid = byeSaid;
})(window);	