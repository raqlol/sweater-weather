document.body.style.backgroundColor  = "#FF7A69";
var submitBnt = document.getElementById("submitBtn");
submitBtn.addEventListener("mousedown", validateForm);
function validateForm () {
	sendZip ();
};

function sendZip () {
	var newZip = document.forms["zipForm"]["zipInput"].value;
	var converted = parseFloat(newZip);
	if ((newZip.length !== 5) || isNaN(converted)) {
		alert ('Enter a valid 5 digit zipcode please');
	}
	getConditions(converted);
}

function getConditions (zipCode) {
	var wu = new XMLHttpRequest();
	var url = 'http://api.wunderground.com/api/0e8203c8987c2d46/geolookup/conditions/q/' + zipCode + '.json';
	console.log(url)
	wu.open("GET", url, true);
	wu.send();
	wu.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
	 		var myArr = JSON.parse(this.responseText);
			var location = myArr.location.city;
			var weather = myArr.current_observation.feelslike_f;
			var feelslike = Math.round(weather);
			var display = "It looks like you're in " + location + ".</br> Right now it feels like " + feelslike + "&deg; F.";
			if (feelslike > 85) {
				document.body.style.backgroundColor  = "#FF7A69";
				document.getElementById("advice").innerHTML = "put on sunscreen and hit the pool because it's " + weather;
			}
			else if (feelslike > 73) {
				document.body.style.backgroundColor  = "coral";
			 	document.getElementById("advice").innerHTML = "tank top weather! It's " + weather;
			}
			else if (feelslike > 61) {
				document.body.style.backgroundColor  = "goldenrod";
				document.getElementById("advice").innerHTML = "bring a light sweater it's " + weather;
			}
			else if (feelslike > 48) {
				document.body.style.backgroundColor  = "lightseagreen";
				document.getElementById("advice").innerHTML = "It's " + weather + ". I'd put on a heavy sweater." ;
			}
			else {
				document.body.style.backgroundColor  = "blue";
				document.getElementById("advice").innerHTML = "stay inside you fool it's " + weather;
			}
			document.getElementById("feels").innerHTML = display;
		}
	};
}
