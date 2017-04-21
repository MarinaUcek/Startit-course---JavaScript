$(document).ready(function() {


	// Accordion initialization

  $("#accordion").accordion({
  	heightStyle: "content"
	});

});


// First exercise

function evenOrOdd() {
	var lower = Number(document.getElementById("lower").value.trim());
	var upper = Number(document.getElementById("upper").value.trim());
	var isWhat = "";

	if(lower % 1 !== 0 || upper % 1 !== 0) {
		alert("This is not a valid input!\nYou should insert an INTEGER NUMBER!\nPlease, repeat your input.");
	} else if (lower > upper) {
		alert("This is not a valid input!\nThe lower limit should be LOWER than the upper limit!\nPlease, repeat your input.");
	} else {
		for (var i = lower; i <= upper; i++) {
			if (i % 2 === 0) {
				isWhat = " is even number";
			} else {
				isWhat = " is odd number";
			}
			output(new Intl.NumberFormat().format(i), isWhat);
		}
	}
}


// Second exercise

function sumOfNaturalNumbers() {
	var number = Number(document.getElementById("natural").value.trim());
	var sum = 0;

	if(number % 1 === 0 && number > 0) {
		for (var i = 0; i <= number; i++) {
			sum += i;
		}
		output("Sum of all natural numbers lower than inserted number is ", new Intl.NumberFormat().format(sum));
	} else {
		alert("This is not a valid input!\nYou should insert an INTEGER NUMBER GRTAER THAN 0!\nPlease, repeat your input.");
	}
}


// Third exercise

function factoriel() {
	var number = Number(document.getElementById("factoriel").value.trim());
	var factoriel = 1;

	if(number % 1 === 0 && number > 0) {
		for (var i = 1; i <= number; i++) {
			factoriel *= i;
		}
		output("Factoriel of the inserted number is ", new Intl.NumberFormat().format(factoriel));
	} else {
		alert("This is not a valid input!\nYou should insert an INTEGER NUMBER GRTAER THAN 0!\nPlease, repeat your input.");
	}
}


// Fourth exercise

function sumOfIntervalNumbers() {
	var lowerInt = Number(document.getElementById("lowerInt").value.trim());
	var upperInt = Number(document.getElementById("upperInt").value.trim());
	var sum = 0;

	if(lowerInt % 1 !== 0 || upperInt % 1 !== 0) {
		alert("This is not a valid input!\nYou should insert an INTEGER NUMBER!\nPlease, repeat your input.");
	} else if (lowerInt > upperInt) {
		alert("This is not a valid input!\nThe lower limit should be LOWER than the upper limit!\nPlease, repeat your input.");
	} else {
		for (var i = lowerInt; i <= upperInt; i++) {
			sum += i;
		}
		output("Sum of all numbers of a given range is ", new Intl.NumberFormat().format(sum));
	}
}


// Fifth exercise

function productQuantity() {
	var money = Number(document.getElementById("money").value.trim());
	var price = Number(document.getElementById("price").value.trim());
	var quantity = 0;

	if (isNaN(money) || isNaN(price)) {
		alert("This is not a valid input!\nYou should insert a NUMBER!\nPlease, repeat your input.");
	} else if (money < 0) {
		alert("You don't have money for shopping!\nCome back when you earn some!");
	} else if(price < 0) {
		alert("This is not a valid input!\nProduct price should be a POSITIVE NUMBER!\nPlease, repeat your input.");
	} else {
		quantity = Math.floor(money/price);
		output("You are able to buy " + new Intl.NumberFormat().format(quantity) + " pieces of a given product", "");
	}
}


// Output function handles DOM elements. It is called at the end of each exercise function in order to show results

function output(text, result) {
	var outputElement = document.createElement("p");
	var outputText = document.createTextNode(text + result + ".");
	outputElement.appendChild(outputText);
	var outputBox = document.getElementById("result-box");
	outputBox.insertBefore(outputElement, outputBox.childNodes[0]);
}


// Each button gets event listener for calling functions

document.getElementById("btn1").addEventListener("click", evenOrOdd);
document.getElementById("btn2").addEventListener("click", sumOfNaturalNumbers);
document.getElementById("btn3").addEventListener("click", factoriel);
document.getElementById("btn4").addEventListener("click", sumOfIntervalNumbers);
document.getElementById("btn5").addEventListener("click", productQuantity);