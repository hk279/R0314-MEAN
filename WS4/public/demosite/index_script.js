
function save() {

	//If there is nothing in the local storage yet. The local storage item "items" is initialized as an empty array.
	if (localStorage.getItem("items") == null) {
		var list = [];
		localStorage.setItem("items", JSON.stringify(list));
	}

	var items = JSON.parse(localStorage.getItem("items"));

	var titleElement = document.getElementById("title");
	var descElement = document.getElementById("desc");
	var duedateElement = document.getElementById("duedate");
	
	//Resets the styling (possible red borders) on the form fields 
	titleElement.style = "";
	descElement.style = "";
	duedateElement.style = "";
	
	//If the title field is left empty, gives an alert and the empty fields get a colored border
	if (titleElement.value == "") {
		alert("Please enter the title before saving!");
		titleElement.style = "border: 2px solid #f7674a;";
		return false;
	}

	var pd = "";
	var dd = "";
	//Creates the european style date string. dd is used to sort the items by date.
	if (duedateElement.value != "") {
		var year = duedateElement.value.substring(0, 4);
		var month = duedateElement.value.substring(5, 7);
		var day = duedateElement.value.substring(8, 10);
		pd = day + "." + month + "." + year;
		dd = year + month + day;
	}

	var todo = {
		title: document.getElementById("title").value,
		type: document.getElementById("entry-type").value,
		description: document.getElementById("desc").value,
		duedate: dd,
		printDate: pd
	}
	
	items.push(todo);

	// Items on the list are sorted by the due date in ascending order.
	
	items.sort(compare);
	
	function compare(a, b) {
		return a.duedate - b.duedate;
	}

	localStorage.setItem("items", JSON.stringify(items));
}

function resetForm() {
	document.getElementById("entry-form").reset();
	return false;
}

function showList() {
	if (JSON.parse(localStorage.getItem("items") == null) || JSON.parse(localStorage.getItem("items").length == 0)) {
		document.getElementById("table-body").innerHTML = "";
		return;
	}

	var storedList = JSON.parse(localStorage.getItem("items"));

	if (storedList.length > 0) {
		var HTMLbutton = "";
		var HTMLtable = "";
		for (var x = 0; x < storedList.length; x++) {
			HTMLbutton = addDoneButton(x);
			HTMLtable += "<tr><td>" + storedList[x].title + "</td><td>" + storedList[x].type + "</td><td>" + storedList[x].description + "</td><td>" + storedList[x].printDate + "</td><td>" + HTMLbutton + "</td></tr>";
		}
		document.getElementById("table-body").innerHTML = HTMLtable;
	} else {
		document.getElementById("table-body").innerHTML = "";
	}
}

//This function forms the string for the HTML button used to remove items from the list.
function addDoneButton(index) {
	var buttonHTML = "<td><button type='button' id='button" + index + "' onClick='removeFromList(" + index + "); showList();'" + ">Done</button></td>"
	index++;
	return buttonHTML;
}

function removeFromList(index) {
	var tempList = JSON.parse(localStorage.getItem("items"));
	tempList.splice(index, 1);
	localStorage.setItem("items", JSON.stringify(tempList));
}
