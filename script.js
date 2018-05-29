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

// sm.addEventListener('click', displaySize);
// med.addEventListener('click', displaySize);
// lg.addEventListener('click', displaySize);
// xl.addEventListener('click', displaySize);
// nextBtn.addEventListener('click', nextPage);

function displaySize(evt){
    ctx.clearRect(0,0,width,height);
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.beginPath();
    if(evt.srcElement.id === "sm"){
        price.innerHTML = "Total: $7.99";
        size.innerHTML = 'SIZE: Small 8"';
        ctx.ellipse((width/2), (height/2), 25, 25, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id === "med"){
        price.innerHTML = "Total: $9.99";
        size.innerHTML = 'SIZE: Medium 10"';
        ctx.ellipse((width/2), (height/2), 40, 40, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id === "lg"){
        price.innerHTML = "Total: $12.99";
        size.innerHTML = 'SIZE: Large 12"';
        ctx.ellipse((width/2), (height/2), 50, 50, 0, 0, 2 * Math.PI);
    }else if(evt.srcElement.id === "xl"){
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

var toppingArray = [];

var bacon = document.getElementById('bacon');
var pepperoni = document.getElementById('pepperoni');

bacon.addEventListener('click', addTopping);
pepperoni.addEventListener('click', addTopping);
bacon.addEventListener('click', removeTopping);
pepperoni.addEventListener('click', removeTopping);

function addTopping(evt){
    if(evt.srcElement.id === "bacon" && evt.target.checked === true){
        toppingArray.push("url(images/pizza/bacon-full.png)");
    } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === true){
        toppingArray.push("url(images/pizza/pepperoni-full.png)");
    }
    var str = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            canvas.style.background = str;
        }
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = '100px';
}
function removeTopping(evt){
    var topping = "";

    if(evt.srcElement.id === "bacon" && evt.target.checked === false){
        topping = "url(images/pizza/bacon-full.png)";
    } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === false){
        topping = "url(images/pizza/pepperoni-full.png)";
    }
    for(var i = toppingArray.length-1; i >= 0 ; i--){
        if(toppingArray[i] === topping){
            toppingArray.splice(i, 1);
        }
    }
    var str = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            canvas.style.background = str;
        }
    }
    if(toppingArray.length === 0){
        canvas.style.background = "";
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = '100px';
}