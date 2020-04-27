(function() {
	var names = ["Yaakov", "John", "Jin", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jimin"];
	for (i=0;i<names.length;i++){
		var firstLetter = names[i][0].toLowerCase();
		if (firstLetter === 'j') {
			byeSaid.said(names[i]);
		} else {
			helloSaid.said(names[i]);
		}
	}
})();