console.log("Hello Welcome to my Portfolio");

function myfunction() {
  var x = document.getElementById("myNavtoggle")
  if (x.className === "navtoggle"){
    x.className +=  " responsive";
  } else{
    x.className = "navtoggle";
  }
}
