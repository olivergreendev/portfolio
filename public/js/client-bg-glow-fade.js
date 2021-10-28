window.onload = function() {
    // query all divs with bg-glow class
    // set their opacity to 0.2 on page load
    // css should have opacity transition and opacity to 0
    var elements = document.getElementsByClassName("bg-glow");
    for(var i = 0; i < elements.length; i++) {
        elements[i].style["opacity"] = 0.2;
    }
}