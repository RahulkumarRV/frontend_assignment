var progress = document.getElementById("progress");
var fp = false,
	sp = false,
	tp = false,
	frp = false;

function next1fuc() {
	document.getElementById("form1").style.display = "none";
	document.getElementById("form2").style.display = "flex";
}

function next2fuc() {
	document.getElementById("form2").style.display = "none";
	document.getElementById("form3").style.display = "flex";
}
function next3fuc() {
	document.getElementById("form3").style.display = "none";
	document.getElementById("form4").style.display = "flex";
}
function back1fuc() {
	document.getElementById("form2").style.display = "none";
	document.getElementById("form1").style.display = "block";
}

function back2fuc() {
	document.getElementById("form3").style.display = "none";
	document.getElementById("form2").style.display = "flex";
}

function radio_sel_private() {
	var x = document.getElementById("radio_private");
	x.style.backgroundColor = "#ff0606d6";
	x.style.color = "white";
	x = document.getElementById("radio_commerical");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";

	x.style.color = "#767676bf";
}
function radio_sel_commerical() {
	var x = document.getElementById("radio_commerical");
	x.style.backgroundColor = "#ff0606d6";
	x.style.color = "white";
	x = document.getElementById("radio_private");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";
	x.style.color = "#767676bf";
}

function radio_sel_noc1() {
	var x = document.getElementById("radiofirst");
	x.style.backgroundColor = "#ff0606d6";
	x.style.color = "white";
	x = document.getElementById("radiosecond");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";
	x.style.color = "#767676bf";
	x = document.getElementById("radiothird");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";
	x.style.color = "#767676bf";
	page4fuc();
}

function radio_sel_noc2() {
	var x = document.getElementById("radiosecond");
	x.style.backgroundColor = "#ff0606d6";
	x.style.color = "white";
	x = document.getElementById("radiofirst");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";
	x.style.color = "#767676bf";
	x = document.getElementById("radiothird");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";
	x.style.color = "#767676bf";
	page4fuc();
}

function radio_sel_noc3() {
	var x = document.getElementById("radiothird");
	x.style.backgroundColor = "#ff0606d6";
	x.style.color = "white";
	x = document.getElementById("radiofirst");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";
	x.style.color = "#767676bf";
	x = document.getElementById("radiosecond");
	x.style.backgroundColor = "rgb(163 159 159 / 44%)";
	x.style.color = "#767676bf";
	page4fuc();
}

function nametextfieldfuc() {
	if (fp == false) {
		fp = true;
		progress.value += 25;
	}
}

function page2fuc() {
	if (sp == false) {
		sp = true;
		progress.value += 25;
	}
}

function page3fuc() {
	if (tp == false) {
		tp = true;
		progress.value += 25;
	}
}

function page4fuc() {
	if (frp == false) {
		frp = true;
		progress.value = 100;
	}
	console.log("page4fuc");
}
