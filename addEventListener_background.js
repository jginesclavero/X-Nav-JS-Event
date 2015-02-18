function color() {
	code = document.getElementById("text_in");
	out = document.getElementById("box");
	code.addEventListener('input', changeColor)
}

function changeColor() {
	out.style.backgroundColor = code.value;
}