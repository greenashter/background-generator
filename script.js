var body = document.getElementsByTagName("body")[0];
var color_1 = document.getElementById("color1");
var color_2 = document.getElementById("color2");
var cssText = document.getElementById("cssText");
var random = document.getElementById("random");


function makeBackground(){
    body.style.background = "linear-gradient(to right,"
    + color_1.value
    + ", "
    + color_2.value 
    + ")";

    cssText.textContent = body.style.background + ";";
}

function randomColor(){
    // var color = "rgb("
    // + Math.floor(Math.random()*255) + ", "
    // + Math.floor(Math.random()*255) + ", "
    // + Math.floor(Math.random()*255)
    // + ")";
    var color = "#";

    var numbers = "0123456789abcdef";
    for(var i = 0; i < 6; i++){
        color += numbers[Math.floor(Math.random()*16)];
    }

    return color;
}

function randomBackground(){
    color_1.value = randomColor();
    color_2.value = randomColor();
    
    makeBackground();
}

color_1.addEventListener("change", makeBackground);
color_2.addEventListener("input",makeBackground);
random.addEventListener("click", randomBackground);

makeBackground();