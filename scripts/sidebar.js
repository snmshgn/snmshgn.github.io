function openNav() {
  function myFunction(x) {
    if (x.matches) {
      document.getElementById("menu").style.height = "580px";
      document.getElementById("menu").style.width = "100%";
      document.getElementById("menu").style.visibility = "visible";
    } else {
      document.getElementById("menu").style.width = "700px";
      document.getElementById("menu").style.height = "100%";
      document.getElementById("menu").style.visibility = "visible";
    }
  }

  var x = window.matchMedia("(max-width: 1020px)")
  myFunction(x)
  x.addListener(myFunction)
}

function closeNav() {
  function myFunction(x) {
    if (x.matches) {
      document.getElementById("menu").style.height = "0";
      document.getElementById("menu").style.width = "100%";
      document.getElementById("menu").style.visibility = "hidden";
    } else {
      document.getElementById("menu").style.width = "0";
      document.getElementById("menu").style.height = "100%";
      document.getElementById("menu").style.visibility = "hidden";
    }
  }

  var x = window.matchMedia("(max-width: 1020px)")
  myFunction(x)
  x.addListener(myFunction)
}
