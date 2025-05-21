var mission = "#ffffff";
doNull();
function doNull(){
    if(localStorage.getItem('coins') != "0"){
        document.querySelector("#score").innerHTML = localStorage.getItem('coins');
        return
    }
    localStorage.setItem('coins',"0");
    document.querySelector("#score").innerHTML = localStorage.getItem('coins');
}

mission = randomColor();
document.querySelector("#mission").style.background = mission;
function randomColor(){
    var colorArray=["","",""]
    for(var i=0;i<3;i++){
        colorArray[i] =Math.floor(Math.random() * 255);
    }
    var color = toHex(colorArray);
    return color;
}
function newColor(){
    var color = randomColor();
    document.querySelector("#centerCounteiner").style.borderColor = color;
    document.querySelector("#red").style.borderColor = color;
    document.querySelector("#green").style.borderColor = color;
    document.querySelector("#blue").style.borderColor = color;
    document.querySelector("#textRGB").style.color = color;
    document.querySelector("#mission").style.borderColor = color;
    document.querySelector("#yourColor").style.borderColor = color;
    for(var i =0;i<2;i++){
        document.querySelectorAll(".text")[i].style.color = color;
    }
    document.querySelector("#score").style.color = color;
}
setInterval(newColor, 1000);
class inputColors{
    input;
    color;
    constructor(input){
        this.input=input;
        this.color=255;
    }
    isInput(){
        this.input.addEventListener("input",()=>{
            this.color=this.input.value
            updateRgb();
            
        })
    }
}
var inputArray = [
    red = new inputColors(document.querySelector("#red")),
    green = new inputColors(document.querySelector("#green")),
    blue = new inputColors(document.querySelector("#blue"))
];
inputArray.forEach(element => {
    element.isInput();
});

function updateRgb(){
    var colorArray = [red.color,green.color,blue.color];
    document.querySelector("#yourColor").style.background=toHex(colorArray);
    if(toHex(colorArray)==mission)newMission();
}
function toHex(rgbArray){
    var hex ="#"
    var component="";
    rgbArray.forEach(element => {
        if(element=="")
            element=0;
        element = parseInt(element);
        component =element.toString(16);
        component.length<2 ? hex += "0" + component : hex +=component;
    });
    return hex;
}
function newMission(){
    mission = randomColor();
    document.querySelector("#mission").style.background = mission;
    var coins = parseInt(localStorage.getItem("coins")) + 1;
    localStorage.setItem("coins",coins.toString());
    document.querySelector("#score").innerHTML = coins;
}

