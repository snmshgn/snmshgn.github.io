function openNav() {
  document.getElementById("menu").style.width = "720px";
  document.getElementById("menu").style.visibility = "visible";
  document.getElementByClassName("main").style.marginLeft = "720px";
  document.body.style.backgroundColor = "rgba(255, 89, 83, 0.8)";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("menu").style.visibility = "hidden";
  document.getElementByClassName("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
