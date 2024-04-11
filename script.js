var cur = "square";
var shape = ["square", "rectangle", "circle", "oval"];
var color = ["red", "orange", "voilet", "green"];


document.getElementById("shape").onclick = function () {
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}

document.getElementById("color").onclick = function () {
    var randColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("display").style.backgroundColor = randColor;
}