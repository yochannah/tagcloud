var mentat = {
	words : {
		"cat" : 0.99,
		"kitten" : 0.123,
		"frog" : 0.434,
		"leopard" : 0.5445,
		"monkey" : 0.2323,
		"dog" : 0.4555,
		"cougar" : 0
	},
	/*
	* We may want to build different weight visualisation algorithms in the future
	* but for now we'll go quick and easy, using 'even' spacing.
	*/
	maxFont : 5,
	minFont : 0.5,
	/*The font size algorithm may well change, so we'll make
	 sure it's abstracted from the rest of the code in its own function */
	getFontSize : function (weight) {
		return weight * this.maxFont;
	},
	renderCloud : function () {
		var html = "";
		for(word in this.words) {
			html+= '<span style="font-size:' + this.getFontSize(this.words[word]) +'em;" data-mTagCloud="'+ word +'">' + word + '</span>';
		}
		return html;
	},
	renderTable : function () {
		var html = "<table>",
		weight;
		for(word in this.words) {
			if(word) {
				html+= '<tr><td>' + word + '</td><td>' + this.words[word] + '</td></tr>';
			}
		}
		return html += "</table>";
	},
	setEventListeners : function () {
		document.querySelectorAll('.tagCloud span').addEventListener('click', function () {
			//update weight
			//re-render
		});
	},
	init : function () {
		document.getElementById('tagCloud').innerHTML = this.renderCloud();
		document.getElementById('tagTable').innerHTML = this.renderTable();
	}
};