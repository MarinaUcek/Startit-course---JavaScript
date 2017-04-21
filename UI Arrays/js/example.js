/*jshint esversion: 6 */
// FIRST EXERCISE - Make an array.

function makeAnArray() {
	var lower = Number(document.getElementById("lower").value.trim());
	var upper = Number(document.getElementById("upper").value.trim());
	var array = [];

	if(lower % 1 !== 0 || upper % 1 !== 0) {
		alert("This is not a valid input!\nYou should insert an INTEGER NUMBER!\nPlease, repeat your input.");
	} else if (lower > upper) {
		alert("This is not a valid input!\nThe lower limit should be LOWER than the upper limit!\nPlease, repeat your input.");
	} else {
		for (var i = lower; i <= upper; i++) {
			array.push(" " + i);
		}
		output("Here is your array: ", array);
	}
}


// SECOND EXERCISE - Mirror mirror on the wall, who's the bigest of them all.

var arrayExample = [23, 43, -8, 77, 0, 23, 15];

function theBiggest(array) {
	var maxArray = array[0];

	for (var i = 1; i < array.length; i++) {
		if (array[i] > maxArray) {
			maxArray = array[i];
		}
	}
	output("The biggest of them all is ", new Intl.NumberFormat().format(maxArray));
}


// THIRD EXERCISE - Double or nothing.

var arrayExample1 = [17, 15, 45, 78, 20, 9];

function doubleOrNothing(array) {
	var doubledArray = [];

	for (var i = 0; i < array.length; i++) {
		doubledArray.push(" " + array[i] * 2);
	}
	output("Doubled elements are: ", doubledArray);
}


// FOURTH EXERCISE - Even or odd

var arrayExample2 = [16, 23, 3, 78, 9, 14, 17];

function evenOrOdd(array) {
	var even = [];
	var odd = [];

	for (var i = 0; i < array.length; i++) {
		if(array[i] % 2 === 0) {
			even.push(" " + array[i]);
		} else {
			odd.push(" " + array[i]);
		}
	}

	if(even.length === 0) {
		output("There is no elemets in the list of even numbers", "");
	} else {
		output("List of even numbers is ", even);
	}

	if(odd.length === 0) {
		output("There is no elemets in the list of odd numbers", "");
	} else {
		output("List of odd numbers is ", odd);
	}
}


// FIFTH EXERCISE - Tax

var arrayExample3 = [5, 145, 69, 56, 13, 456, 78, 4, 30];

function tax(array) {
	const bigTax = 1.18;
	const smallTax = 1.08;
	var totalCost = 0;

	for (var i = 0; i < array.length; i++) {
		if(array[i] < 50) {
			totalCost += array[i] * bigTax;
		} else {
			totalCost += array[i] * smallTax;
		}
	}
	output("Your total cost is ", new Intl.NumberFormat().format(totalCost) + "$");
}


// SIXTH EXERCISE - Palindrom

var arrayExample4 = ["madam", "racecar", "A man, a plan, a canal, Panama!", "Was it a car or a cat I saw?", "No 'x' in Nixon", "Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.", "Aibohphobia"];

function palindrome(array) {
	// Each word is a palindrome until is proven otherwise
	var isPalindrome = " is palindrome";

	array.forEach(function(e) {
		var word = e.replace(/[^a-zA-Z0-9]/gi,"").toLowerCase();
		for (var i = 0, j = word.length - 1; i < word.length/2; i++, j--) {
			if(word[i] !== word[j]) {
				isPalindrome = " isn't palindrome";
				break;
			}
		}
	output(" \"" + e + "\" ", isPalindrome);
	});
}


// SEVENTH EXERCISE - Change me!

var arrayExample5 = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
var valueToSearch = [4, 10];
var valueToChange = 25;

function changeMe(array, search, change) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < search.length; j++) {
			if (array[i] === search[j]) {
				newArray.push(" " + change);
			}
		} 
		if (typeof newArray[i] === "undefined") {
			newArray.push(" " + array[i]);
		}
	}
	output("Array with changed value/values: ", newArray);
}


// EIGHTH EXERCISE - Are there twins?

var arrayExample6 = [5, 16, 78, -6, 12, 78];

function twins(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] === array[j]) {
				return output("The twins are among us", "");
			}
		}
	}
	return output("There are no twins among us", "");
}


// NINTH EXERCISE - How strong you are?

var arrayExample7 = [[4, 7, 11], [4, 7, 3], [4, 7, 10], [4, 7, 6], [9, 7, 8]];

function howStrongYouAre(weight1, weight2, maxWeight) {
	if (weight1 + weight2 <= maxWeight) {
		return output("You can carry both items", "");
	} else if (Math.min(weight1, weight2) > maxWeight) {
		return output("You can not carry none of them", "");
	} else if (Math.max(weight1, weight2) <= maxWeight) {
		return output("You can chose which one you want to carry, but you can not carry both of them", "");
	} else if (weight1 <= maxWeight) {
		return output("You can carry the first item", "");
	} else {
		return output("You can carry the second item", "");
	}
}

