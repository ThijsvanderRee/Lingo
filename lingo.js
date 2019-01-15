var random = words[Math.floor(Math.random() * words.length)];
var letter1 = random.charAt(0).split();
console.log(random);

function createboxes() {
	for (i = 1; i < 26; i++) {
		var addbox = document.createElement("input");
		addbox.setAttribute("id", "box" + i);
		document.getElementById("field").appendChild(addbox);
		document.getElementById("box1").value = letter1;
		document.getElementById("box" + i).disabled = true;
	}
	
}

var box1 = document.getElementById("box1");

var input = document.getElementById("inputbox");

var guess = [];

function checkword() {
	input = document.getElementById("inputbox").value;
	input2 = input.split("");
	guess.push(input2);
	console.log(guess);
	console.log(guess[0]);
	console.log(document.getElementById("box1").value);
	if (input[0] == document.getElementById("box1").value) {
		document.getElementById("box1").style.backgroundColor = "groen";
	} else {
		document.getElementById("box1").style.backgroundColor = "red";
	}
}
