var canvas = document.getElementById('pizzaDisplay');
var ctx = canvas.getContext('2d');

var sm = document.getElementById('sm');
var med = document.getElementById('med');
var lg = document.getElementById('lg');
var xl = document.getElementById('xl');
var price = document.getElementById('price');
var size = document.getElementById('sizeDtls');
var nextBtn = document.getElementById('btn');

var width = canvas.width;
var height = canvas.height;

sm.addEventListener('click', displaySize);
med.addEventListener('click', displaySize);
lg.addEventListener('click', displaySize);
xl.addEventListener('click', displaySize);
nextBtn.addEventListener('click', nextPage);

function displaySize(evt){
    ctx.clearRect(0,0,width,height);
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.beginPath();
    if(evt.srcElement.id == "sm"){
        price.innerHTML = "Total: $7.99";
        size.innerHTML = 'SIZE: Small 8"';
        ctx.ellipse((width/2), (height/2), 25, 25, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id == "med"){
        price.innerHTML = "Total: $9.99";
        size.innerHTML = 'SIZE: Medium 10"';
        ctx.ellipse((width/2), (height/2), 40, 40, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id == "lg"){
        price.innerHTML = "Total: $12.99";
        size.innerHTML = 'SIZE: Large 12"';
        ctx.ellipse((width/2), (height/2), 50, 50, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id == "xl"){
        price.innerHTML = "Total: $14.99";
        size.innerHTML = 'SIZE: X-Large 14"';
        ctx.ellipse((width/2), (height/2), 60, 60, 0, 0, 2 * Math.PI);
    }
    ctx.stroke(); 
    nextBtn.style.visibility = "visible";
}
function nextPage(evt){
    window.location.href = "./topping.html";
}
