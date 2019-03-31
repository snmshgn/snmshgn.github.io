function openNav() {
      document.getElementById("menu").style.transform = "translateY(0px)";
      document.getElementById("menu-button").style.visibility = "hidden";
      document.getElementById("menu").style.visibility = "visible";
}

function closeNav() {
      document.getElementById("menu").style.transform = "translateY(-580px)";
      document.getElementById("menu-button").style.visibility = "visible";
      document.getElementById("menu").style.visibility = "hidden";
}
