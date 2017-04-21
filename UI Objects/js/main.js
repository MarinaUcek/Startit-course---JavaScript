/*jshint esversion: 6 */

$(document).ready(function() {

	// Accordion initialization

    $("#JSONData").accordion({
        heightStyle: "content"
    });

    $("#inputData").accordion({
        heightStyle: "content"
    });
});


var gradesArray;
var employeesArray;
var studentsObject;

// First .json file - structure: JSON object with property values as different data types

$.getJSON("JSON/course.json").done(function(data) {
    var courseObject = data;
    gradesArray = courseObject.studentsEvaluationGrade;
    var string = JSON.stringify(courseObject);
    var element = document.getElementById("course");
    element.innerHTML = string.split(",\"").join(",<br>\"");
}).error(function(err) {
    console.log("error");
});


// Second .json file - structure: JSON array with objects as elements

$.getJSON("JSON/employees.json").done(function(data) {
    employeesArray = data;
    var string = JSON.stringify(employeesArray);
    var element = document.getElementById("employees");
    element.innerHTML = string.split("},").join("},<br>");
}).error(function(err) {
    console.log("error");
});


// Third .json file - structure: JSON object with property values as objects

$.getJSON("JSON/students.json").done(function(data) {
    studentsObject = data;
    var string = JSON.stringify(studentsObject);
    var element = document.getElementById("students");
    element.innerHTML = string.split("},").join("},<br>");
}).error(function(err) {
    console.log("error");
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

document.getElementById("btn1").addEventListener("click", function() {makeAnArrayOfStrings(gradesArray);});
document.getElementById("btn2").addEventListener("click", function() {makeAnArrayOfObjects(gradesArray);});
document.getElementById("btn3").addEventListener("click", function() {averageGrade(gradesArray);});
document.getElementById("btn4").addEventListener("click", function() {totalYearsOfExperience(employeesArray);});
document.getElementById("btn5").addEventListener("click", function() {departmentYearsOfExperience(employeesArray);});
document.getElementById("btn6").addEventListener("click", function() {departmentNumberOfEmployees(employeesArray);});
document.getElementById("btn7").addEventListener("click", function() {classesOfEmployees(employeesArray);});
document.getElementById("btn8").addEventListener("click", function() {employeesNames(employeesArray);});
document.getElementById("btn9").addEventListener("click", function() {minAndMaxNumberOfPoints(studentsObject);});
document.getElementById("btn10").addEventListener("click", function() {reorderedNumberOfPoints(studentsObject);});
document.getElementById("btn11").addEventListener("click", function() {whoIsTheBest(studentsObject);});
document.getElementById("btn12").addEventListener("click", function() {filteredPoints(studentsObject);});
