var random = words[Math.floor(Math.random() * words.length)];

var letter1 = random.charAt(0).split();
var letter2 = random.charAt(1).split();
var letter3 = random.charAt(2).split();
var letter4 = random.charAt(3).split();
var letter5 = random.charAt(4).split();

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

var input = document.getElementById("inputbox");

var guess = [];

function checkword() {
	input = document.getElementById("inputbox").value;
	input2 = input.split("");
	guess.push(input2);
	console.log(guess);
	console.log(guess[0]);
	console.log(document.getElementById("box1").value);
	
	document.getElementById("box1").value = input2[0];
	document.getElementById("box2").value = input2[1];
	document.getElementById("box3").value = input2[2];
	document.getElementById("box4").value = input2[3];
	document.getElementById("box5").value = input2[4];

	for (i = 1; i < 6; i++) {
		var x = 0; x < 5; x++;
		if (input[x] == document.getElementById("box"+[i]).value) {
			document.getElementById("box"+[i]).style.backgroundColor = "lime";
		} else {
			document.getElementById("box"+[i]).style.backgroundColor = "red";
		}
	}
}
