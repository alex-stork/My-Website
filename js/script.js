var content = document.getElementById("about_me");
var button = document.getElementById("show-more");

button.onclick = function() {
    if (content.className == "open") {
        //shrink the box
        content.className = "";
        button.innerHTML = "show more";
        
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "show less";
    }
}

window.onload = function() {};