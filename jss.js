var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var c3 = document.getElementById("color3");
var body = document.getElementById("grd");
var info = document.querySelector("h3");


function setbckg(){
	body.style.background = "linear-gradient(to right," + c1.value + "," + c2.value + "," + c3.value + ")";
	info.textContent = body.style.background;
}

c1.addEventListener("input", setbckg);
c2.addEventListener("input", setbckg);
c3.addEventListener("input", setbckg);


