var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

//Add li and button
function createListElements() {

	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value + " "));
	button.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	li.appendChild(button)
	input.value = "";

}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElements();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElements();
	}
}

function deleteOrToggle(e){
	//e.target.nodeNome check tag name
	if(e.target.nodeName === "BUTTON") {
		e.target.parentNode.remove();
	} else {
		//e.target pointing what element toggle
		e.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", deleteOrToggle);

