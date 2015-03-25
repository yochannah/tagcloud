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
	numOfDecimals: 3,
	increment: 0.1,
	/*The font size algorithm may well change, so we'll make
	 sure it's abstracted from the rest of the code in its own function */
	getFontSize : function (weight) {
		return weight * this.maxFont;
	},
	/*
	* The render methods are great for a quick-n-'just works' implementation but for a larger project
	* it would be better to use a templating library and keep HTML out of the JS. 
	*/
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
				html+= '<tr><td>' + word + '</td><td>' + this.words[word].toFixed(this.numOfDecimals) + '</td></tr>';
		}
		return html += "</table>";
	},
	reduceWeight: function (word) {
		this.words[word] = this.words[word] - this.increment;
		if (this.words[word] < 0) {
			this.words[word] = 0;
		}
	},
	increaseWeight: function (word) {
		this.words[word] = this.words[word] + this.increment;
	},
	setEventListeners : function () {
		var cloud = document.getElementById('tagCloud'),
		self = this;

		//left click
		cloud.addEventListener('click', function (e) {
			if(self.isValidTagElement(e)) {
				if(!self.isRightClick(e)) {
					self.increaseWeight(e.target.innerHTML);
				}
			}
			self.update();
		});

		//right click. Prevents normal right click functions, but only on the tagcloud.
		cloud.addEventListener('contextmenu', function (e) {
			if(self.isValidTagElement(e)) {
				self.reduceWeight(e.target.innerHTML);
			}
			self.update();
			e.preventDefault();
		});
	},
	/*
	* Thanks, SO!
	* http://stackoverflow.com/questions/2405771/is-right-click-a-javascript-event
	*/
	isRightClick : function (e) {
   		if ("which" in e) {  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        	isRightMB = e.which == 3; 
    	} else if ("button" in e) { // IE, Opera 
        	isRightMB = e.button == 2; 	
    	}	
	},
	/*
	* Prevent click events from triggering on inappropriate elements
	*/
	isValidTagElement : function(e) {
		return 	(e.target.tagName.toUpperCase() === 'SPAN');
	},
	/*
	* This is the one to call to make everything happen.
	*/
	init : function () {
		this.update();
		this.setEventListeners();
	},
	/*
	* This is suitable for small sets of data, but give that it re-renders everything,
	* we would need to implement a specific element update for displaying large datasets
	*/
	update : function () {
		document.getElementById('tagCloud').innerHTML = this.renderCloud();
		document.getElementById('tagTable').innerHTML = this.renderTable();		
	}
};