// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.fontSize = "10vw";
    document.getElementById("navbar").style.backgroundColor = "rgba(140, 0, 255, 1)";
    document.getElementById("navbar").style.height = "10vh";
    document.getElementById("navbar").style.color = "black";
  } else {
    document.getElementById("navbar").style.fontSize = "10vw";
    document.getElementById("navbar").style.background= "";
    document.getElementById("navbar").style.height = "10vh";
    document.getElementById("navbar").style.color = "green";
  }
}
