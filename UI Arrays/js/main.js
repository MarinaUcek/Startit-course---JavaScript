/*jshint esversion: 6 */
$(document).ready(function() {

	// Accordion initialization
    $("#accordion").accordion({
    	heightStyle: "content"
  	});
});


// "ADD" FUNCTIONALITY - create a new list item when click on the "Add" button

var values = {
	listItemArray : [],
	myValueToSearch: [],
	myValueToChange: null
};

var inputValue;
var li;
var ul;

var buttonAdd = document.getElementsByClassName("buttonAdd");
for (var i = 0; i < buttonAdd.length; i++) {
	buttonAdd[i].onclick = newListItem;
}

function testFunc(thisButton){
	ul.prepend(li);

	if ($(thisButton).hasClass("toSearch")) {
		values.myValueToSearch.push(inputValue);
	} else if($(thisButton).hasClass("toChange")) {
		values.myValueToChange = inputValue;
	} else {
		values.listItemArray.push(inputValue);
	}
}

function newListItem() {
	
	// create new list item for each input
	var hasClassString = $(this).hasClass("string");

		// check for the type of input value (string or number)
	if(hasClassString) {
		inputValue = $(this).prev().val();
	} else {
		inputValue = parseInt($(this).prev().val());
	}

	var textNode = document.createTextNode(inputValue);
	li = document.createElement("li");
	li.append(textNode);

	//append new list item to the list, before the first list item
	ul = $(this).next();

	if (!hasClassString) {
		if(inputValue === "" || isNaN(inputValue)) {
			alert("This is not a valid input!\nYou must insert a NUMBER!\nPlease, repeat your input.");
		} else {
			testFunc(this);
		}
	} else {
		if(inputValue === "" || !isNaN(inputValue)) {
			alert("This is not a valid input!\nYou must insert a STRING!\nPlease, repeat your input.");
		} else {
			testFunc(this);
		}
	}

	// create a "close" button and append it to each list item
	var span = document.createElement("span");
	span.innerHTML = '<i class="fa fa-close" aria-hidden="true"></i>';
	span.className = "closeButton";

	if(!$(li).parent().prev().hasClass("toSearch") && !$(li).parent().prev().hasClass("toChange")) {
		li.appendChild(span);
	}

	// click on a "close" icon to hide the current list item
	var close = document.getElementsByClassName("closeButton");
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = removeElement;
	}

	function removeElement() {
		// removes li from ul
		var listItem = this.parentNode;
		listItem.remove();
		
		// removes value from values object
		var value;

		if(hasClassString) {
			value = listItem.textContent;
		} else {
			value = Number(listItem.textContent);
		}

		var index = values.listItemArray.indexOf(value);
		values.listItemArray.splice(index, 1);
	}

	// clear input field after create a new list item
	$(this).prev().val("");

	// autofocus on input field after each click on "Add" button
	$(this).prev().focus();
}


// With new accordion item opened, all inputs are returned to initial state

$("h4").click(function() {
	$("input[type=text]").val("");
	$("ul").html("");
	values.listItemArray.length = 0;
	values.myValueToSearch.length = 0;
	values.myValueToChange = null;
});


// Output function handles DOM elements. It is called at the end of each exercise function in order to show results

function output(text, result) {
	var outputElement = document.createElement("p");
	var outputText = document.createTextNode(text + result + ".");
	outputElement.appendChild(outputText);
	var outputBox = document.getElementById("result-box");
	outputBox.insertBefore(outputElement, outputBox.childNodes[0]);
}


// Each button gets event listener for calling functions

document.getElementById("btn1").addEventListener("click", makeAnArray);
document.getElementById("btn2").addEventListener("click", function() {theBiggest(arrayExample);});
document.getElementById("btn3").addEventListener("click", function() {theBiggest(values.listItemArray);});
document.getElementById("btn4").addEventListener("click", function() {doubleOrNothing(arrayExample1);});
document.getElementById("btn5").addEventListener("click", function() {doubleOrNothing(values.listItemArray);});
document.getElementById("btn6").addEventListener("click", function() {evenOrOdd(arrayExample2);});
document.getElementById("btn7").addEventListener("click", function() {evenOrOdd(values.listItemArray);});
document.getElementById("btn8").addEventListener("click", function() {tax(arrayExample3);});
document.getElementById("btn9").addEventListener("click", function() {tax(values.listItemArray);});
document.getElementById("btn10").addEventListener("click", function() {palindrome(arrayExample4);});
document.getElementById("btn11").addEventListener("click", function() {palindrome(values.listItemArray);});
document.getElementById("btn12").addEventListener("click", function() {changeMe(arrayExample5, valueToSearch, valueToChange);});
document.getElementById("btn13").addEventListener("click", function() {changeMe(values.listItemArray, values.myValueToSearch, values.myValueToChange);});
document.getElementById("btn14").addEventListener("click", function() {twins(arrayExample6);});
document.getElementById("btn15").addEventListener("click", function() {twins(values.listItemArray);});
document.getElementById("btn16").addEventListener("click", function() {howStrongYouAre(arrayExample7[0][0], arrayExample7[0][1], arrayExample7[0][2]);});
document.getElementById("btn17").addEventListener("click", function() {howStrongYouAre(arrayExample7[1][0], arrayExample7[1][1], arrayExample7[1][2]);});
document.getElementById("btn18").addEventListener("click", function() {howStrongYouAre(arrayExample7[2][0], arrayExample7[2][1], arrayExample7[2][2]);});
document.getElementById("btn19").addEventListener("click", function() {howStrongYouAre(arrayExample7[3][0], arrayExample7[3][1], arrayExample7[3][2]);});
document.getElementById("btn20").addEventListener("click", function() {howStrongYouAre(arrayExample7[4][0], arrayExample7[4][1], arrayExample7[4][2]);});
document.getElementById("btn21").addEventListener("click", function() {howStrongYouAre(values.listItemArray[0], values.listItemArray[1], values.listItemArray[2]);});
