function showOptions() {
    var x = document.getElementById("topnav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
    var icon = document.getElementById("options-icon");
    if (icon) {
        icon.src =
            x.className === "navBar responsive"
                ? "images/list-up.png"
                : "images/list-down.png";
    }
}
