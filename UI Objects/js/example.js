/*jshint esversion: 6 */

// FIRST EXERCISE - Make an Array of Strings

function makeAnArrayOfStrings(array) {
	// make an array
	var resultArray = [];
	array.forEach(function(grade) {
		resultArray.push(grade + "/10");
	});

	// output a string
	var string = "";
	for (var i = 0; i < resultArray.length; i++) {
		string += " \"" + resultArray[i] + "\",";
	}

	// delete last "," from a string
	var index = string.lastIndexOf(",");
	var resultString = string.substring(0, index) + "" + string.substring(index + 1);

	// print output in result-box
	output("Here is your array of strings: ", "[" + resultString + "]");
}


//SECOND EXERCISE - Make an Array of Objects

function makeAnArrayOfObjects(array) {
	// make an array
	var resultArray = [];
	var frequency = 0;
	for (var grade = 1; grade <= 10; grade++) {
		frequency = 0;
		for (var i = 0; i < array.length; i++) {
			if (grade === array[i]) {
				frequency++;
			}
		}
		resultArray.push({["grade_" + grade]: " " + frequency});
	}

	// output a string
	var string = "";
	for (var j = 0; j < resultArray.length; j++) {
		for (var property in resultArray[j]) {
			string += " {" + property + ":" + resultArray[j][property] + "},";
		}
	}

	// delete last "," from a string
	var index = string.lastIndexOf(",");
	var resultString = string.substring(0, index) + "" + string.substring(index + 1);

	// print output in result-box
	output("Here is your array of objects: ", "[" + resultString + "]");
}


// THIRD EXERCISE - Calculate Average Grade

function averageGrade(array) {
	var sumGrades = 0;
	var averageGrade = 0;
	array.forEach(function(grade) {
		sumGrades += grade;
	});
	averageGrade = sumGrades / array.length;
	output("Average grade is: ", averageGrade.toFixed(2));
}


// FOURTH EXERCISE - Total Years of Experience of All Employees

function totalYearsOfExperience(array) {
	var totalYears = 0;
	for (var i = 0; i < array.length; i++) {
		totalYears += array[i].yearsOfExperience;
	}
	output("Total years of experience of all employees is: ", totalYears + " years");
}


// FIFTH EXERCISE - Total Years of Experience of Each Department

function departmentYearsOfExperience(array) {
	// make an object
	var object = {};
	var yearsEngineering = 0;
	var yearsIT = 0;
	var yearsManagement = 0;

	for (var i = 0; i < array.length; i++) {
		if (array[i].department === "Engineering") {
			yearsEngineering += array[i].yearsOfExperience;
		} else if (array[i].department === "IT") {
			 yearsIT += array[i].yearsOfExperience;
		} else {
			yearsManagement += array[i].yearsOfExperience;
		}
	}

	object.Engineering = yearsEngineering;
	object.IT = yearsIT;
	object.Management = yearsManagement;

	// output a string
	var string = "";
	for (var property in object) {
		string += " " + property + ": " + object[property] + ",";
	}

	// delete last "," from a string
	var index = string.lastIndexOf(",");
	var resultString = string.substring(0, index) + "" + string.substring(index + 1);

	// print output in result-box
	output("Total years of experience of each department is: ", " {" + resultString + "}");
}


// SIXTH EXERCISE - Total Number of Employees of Each Department

function departmentNumberOfEmployees(array) {
	// make an object
	var object = {};
	var numberEngineering = 0;
	var numberIT = 0;
	var numberManagement = 0;

	array.forEach(function(employee) {
		if (employee.department === "Engineering") {
			object.Engineering = ++numberEngineering;
		} else if (employee.department === "IT") {
			object.IT = ++numberIT;
		} else {
			object.Management = ++numberManagement;
		}
	});

	// output a string
	var string = "";
	for (var property in object) {
		string += " " + property + ": " + object[property] + ",";
	}

	// delete last "," from a string
	var index = string.lastIndexOf(",");
	var resultString = string.substring(0, index) + "" + string.substring(index + 1);

	// print output in result-box
	output("Total number of employees of each department is: ", " {" + resultString + "}");
}


// SEVENTH EXERCISE - Employees Classified based on Years of Experience

function classesOfEmployees(array) {
	// make an object
	var object = {};
	object.NEWBIE = [];
	object.AMATEUR = [];
	object.PRO = [];
	object.EXPERT = [];

	for (var i = 0; i < array.length; i++) {
		switch(true) {
			case (array[i].yearsOfExperience <= 1):
				object.NEWBIE.push(array[i].name);
				break;
			case (array[i].yearsOfExperience <= 5):
				object.AMATEUR.push(array[i].name);
				break;
			case (array[i].yearsOfExperience <= 10):
				object.PRO.push(array[i].name);
				break;
			case (array[i].yearsOfExperience > 10):
				object.EXPERT.push(array[i].name);
				break;
		}
	}

	// output a string
	var string = "";
	for (var property in object) {
		string += " " + property + ": " + object[property] + ",";
	}

	// delete last "," from a string
	var index = string.lastIndexOf(",");
	var resultString = string.substring(0, index) + "" + string.substring(index + 1);

	// print output in result-box
	output("Employees classified based on their personal years of experience: ", " {" + resultString + "}");
}


// EIGHTH EXERCISE - List of All Employees

function employeesNames(array) {
	// make an array
	var resultArray = [];

	array.forEach(function(employee) {
		resultArray.push(employee.name);
	});

	// output a string
	var string = "";
	for (var i = 0; i < resultArray.length; i++) {
		string += " \"" + resultArray[i] + "\",";
	}

	// delete last "," from a string
	var index = string.lastIndexOf(",");
	var resultString = string.substring(0, index) + "" + string.substring(index + 1);

	// print output in result-box
	output("Here is your list of all employees: ", "[" + resultString + "]");
}


// NINTH EXERCISE - Minimum and Maximum number of points

function minAndMaxNumberOfPoints(object) {
	// loop through each property (student) of an object
	for (var student in object) {
		var pointsArray = object[student].points;
		var max = pointsArray[0];
		var min = pointsArray[0];
		
		for (var i = 1; i < pointsArray.length; i++) {
			if (pointsArray[i] > max) {
				max = pointsArray[i];
			}
			if (pointsArray[i] < min) {
				min = pointsArray[i];
			}
		}

		output("Student " + object[student].name + " " + object[student].lastName + " has achieved maximum of " + max + " points, and minimum of " + min + " points", "");
	}
}



// TENTH EXERCISE - Reordered Number of Points

function reorderedNumberOfPoints(object) {
	// loop through each property (student) of an object
	for (var student in object) {
		var pointsArray = object[student].points;
		var evenPoints = [];
		var oddPoints = [];

		for (var i = 0; i < pointsArray.length; i++) {
			if (pointsArray[i] % 2 === 0) {
				evenPoints.push(" " + pointsArray[i]);
			} else {
				oddPoints.push(" " + pointsArray[i]);
			}
		}

		for (var j = 0; j < oddPoints.length; j++) {
			evenPoints.push(oddPoints[j]);
		}

		output("Student " + object[student].name + " " + object[student].lastName + " has following number of points: ", evenPoints);
	}
}


// ELEVENTH EXERCISE - Who is the best?

function whoIsTheBest(object) {
	var studentsScore = [];
	var totalScores = [];
	var medals = ["Gold medal", "Silver medal", "Bronze medal"];

	// loop through each property (student) of an object
	for (var student in object) {
		var nameStudent = object[student].name;
		var lastNameStudent = object[student].lastName;
		var pointsArray = object[student].points;
		var totalPoints = 0;

		for (var i = 0; i < pointsArray.length; i++) {
			totalPoints += pointsArray[i];
		}

		studentsScore.push({"name": nameStudent + " " + lastNameStudent, "score": totalPoints});
		totalScores.push(totalPoints);
	}

	// sort scores from the highest to the lowest
	totalScores.sort(function(a, b) {
		return b - a;
	});

	// pair score with name and medal
	for (var j = 0; j < studentsScore.length; j++) {
		for (var k = 0; k < totalScores.length; k++) {
			if (studentsScore[j].score === totalScores[k]) {
				studentsScore[j].title = medals[k];
				output(medals[k] + " goes to " + studentsScore[j].name + " with " + studentsScore[j].score + " points", "");
				break;
			}
		}
	}
}


// TWELFTH EXERCISE - Number of Points Greater than their Average.

function filteredPoints(object) {
	for (var student in object) {
		var nameStudent = object[student].name;
		var lastNameStudent = object[student].lastName;
		var pointsArray = object[student].points;
		var sumPoints = 0;
		var averagePoints = 0;
		var resultArray = [];

		for (var i = 0; i < pointsArray.length; i++) {
			sumPoints += pointsArray[i];
		}

		averagePoints = sumPoints / pointsArray.length;

		for (var j = 0; j < pointsArray.length; j++) {
			if (pointsArray[j] > averagePoints) {
				resultArray.push(" " + pointsArray[j]);
			}
		}

		output("Student " + nameStudent + " " + lastNameStudent + " has the following number of points greater than their average: ", resultArray);
	}
}
