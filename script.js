var canvas = document.getElementById('pizzaDisplay');
var ctx = canvas.getContext('2d');

var sm = document.getElementById('sm');
var med = document.getElementById('med');
var lg = document.getElementById('lg');
var xl = document.getElementById('xl');

var width = canvas.width;
var height = canvas.height;

sm.addEventListener('click', displaySize);
med.addEventListener('click', displaySize);
lg.addEventListener('click', displaySize);
xl.addEventListener('click', displaySize);

function displaySize(evt){
    ctx.clearRect(0,0,width,height);
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.beginPath();
    if(evt.srcElement.id == "sm"){
        ctx.ellipse((width/2), (height/2), 25, 25, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id == "med"){
        ctx.ellipse((width/2), (height/2), 40, 40, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id == "lg"){
        ctx.ellipse((width/2), (height/2), 50, 50, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id == "xl"){
        ctx.ellipse((width/2), (height/2), 60, 60, 0, 0, 2 * Math.PI);
    }
    ctx.stroke(); 
}