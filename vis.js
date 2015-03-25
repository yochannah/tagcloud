var mentat = {
	words : {
		"cent": 0.999,
		"companies": 0.812,
		"years": 0.789,
		"company": 0.590,
		"fund": 0.573,
		"zone": 0.561,
		"year": 0.538,
		"growth": 0.532,
		"investors": 0.503,
		"sector": 0.485,
		"technology": 0.473,
		"cloud computing": 0.456,
		"bank": 0.427,
		"market": 0.427,
		"financial times limited": 0.424,
		"manager": 0.415,
		"china": 0.380,
		"clients": 0.351,
		"time": 0.339,
		"region": 0.321
	},
	/*
	* We may want to build different weight visualisation algorithms in the future
	* but for now we'll go quick and easy.
	*/
	maxFont : 3,
	minFont : 0.5,
	/*The font size algorithm may well change, so we'll make
	 sure it's abstracted from the rest of the code in its own function */
	getFontSize : function (weight) {
		return weight * this.maxFont;
	},
	renderCloud : function () {
		var html = "";
		for(word in this.words) {
			if (this.words[word] > 0) {
				html+= '<span style="font-size:' + this.getFontSize(this.words[word]) +'em;" data-mTagCloud="'+ word +'">' + word + '</span>';
			}
		}
		return html;
	},
	renderTable : function () {
		var html = "<table>",
		weight;
		for(word in this.words) {
				html+= '<tr><td>' + word + '</td><td>' + this.words[word].toFixed(3) + '</td></tr>';
		}
		return html += "</table>";
	},
	reduceWeight: function (word) {
		this.words[word] = this.words[word] - 0.1;
		if (this.words[word] < 0) {
			this.words[word] = 0;
		}
	},
	setEventListeners : function () {
		var cloud = document.getElementById('tagCloud'),
		self = this;
		cloud.addEventListener('click', function (e) {
			//update weight
			self.reduceWeight(e.target.innerHTML);
			//re-render
			self.update();
		});
	},
	init : function () {
		this.update();
		this.setEventListeners();
	},
	update : function () {
		document.getElementById('tagCloud').innerHTML = this.renderCloud();
		document.getElementById('tagTable').innerHTML = this.renderTable();		
	}
};