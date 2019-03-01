function openNav() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    document.getElementById("menu").style.height = "580px";
    document.getElementById("menu").style.visibility = "visible";
  } else {
    document.getElementById("menu").style.width = "644px";
    document.getElementById("menu").style.visibility = "visible";
  }
}
function closeNav() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    document.getElementById("menu").style.height = "0";
    document.getElementById("menu").style.visibility = "hidden";
  } else {
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu").style.visibility = "hidden";
  }
}
