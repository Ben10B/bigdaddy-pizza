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

var topWidth = document.getElementsByClassName('topWidth');
for(i = 0; i < topWidth.length; i++){
    topWidth[i].addEventListener('click', changeImage);
}
var topAmount = document.getElementsByClassName('topAmount');

bacon.addEventListener('click', addTopping);
pepperoni.addEventListener('click', addTopping);
chicken.addEventListener('click', addTopping);
ham.addEventListener('click', addTopping);
mushrooms.addEventListener('click', addTopping);
olives.addEventListener('click', addTopping);
onion.addEventListener('click', addTopping);
pineapple.addEventListener('click', addTopping);
spinach.addEventListener('click', addTopping);
sausage.addEventListener('click', addTopping);

bacon.addEventListener('click', removeTopping);
pepperoni.addEventListener('click', removeTopping);
chicken.addEventListener('click', removeTopping);
ham.addEventListener('click', removeTopping);
mushrooms.addEventListener('click', removeTopping);
olives.addEventListener('click', removeTopping);
onion.addEventListener('click', removeTopping);
pineapple.addEventListener('click', removeTopping);
spinach.addEventListener('click', removeTopping);
sausage.addEventListener('click', removeTopping);

function changeImage(evt){
    canvas.style.background = "";
    for(i = 0; i < topWidth.length; i++){
        if(topWidth[0].value === "Left Half"){
            left('bacon');
        }else if(topWidth[0].value === "Right Half"){
            right('bacon');
        }else if(topWidth[0].value === "Full"){
            full('bacon');
        }
        if(topWidth[1].value === "Left Half"){
            left('pepperoni');
        }else if(topWidth[1].value === "Right Half"){
            right('pepperoni');
        }
        if(topWidth[2].value === "Left Half"){
            left('pineapple');
        }else if(topWidth[2].value === "Right Half"){
            right('pineapple');
        }
        if(topWidth[3].value === "Left Half"){
            left('mushrooms');
        }else if(topWidth[3].value === "Right Half"){
            right('mushrooms');
        }
        if(topWidth[4].value === "Left Half"){
            left('sausage');
        }else if(topWidth[4].value === "Right Half"){
            right('sausage');
        }
        if(topWidth[5].value === "Left Half"){
            left('olives');
        }else if(topWidth[5].value === "Right Half"){
            right('olives');
        }
        if(topWidth[6].value === "Left Half"){
            left('ham');
        }else if(topWidth[6].value === "Right Half"){
            right('ham');
        }
        if(topWidth[7].value === "Left Half"){
            left('spinach');
        }else if(topWidth[7].value === "Right Half"){
            right('spinach');
        }
        if(topWidth[8].value === "Left Half"){
            left('chicken');
        }else if(topWidth[8].value === "Right Half"){
            right('chicken');
        }
        if(topWidth[9].value === "Left Half"){
            left('onion');
        }else if(topWidth[9].value === "Right Half"){
            right('onion');
        }
    }
}
function full(top){
    canvas.style.background = "";
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("left", "full");
            toppingArray[i] = toppingArray[i].replace("right", "full");
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
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = '100px';
}
function left(top){
    canvas.style.background = "";
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "left");
            toppingArray[i] = toppingArray[i].replace("right", "left");
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
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = '100px';
}
function right(top){
    canvas.style.background = "";
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "right");
            toppingArray[i] = toppingArray[i].replace("left", "right");
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
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = '100px';
}
function addTopping(evt){
    if(evt.srcElement.id === "bacon" && evt.target.checked === true){
        topWidth[0].children[1].selected = true;
        topAmount[0].children[1].selected = true;
        toppingArray.push("url(images/pizza/bacon-full.png)");
    } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === true){
        topWidth[1].children[1].selected = true;
        topAmount[1].children[1].selected = true;
        toppingArray.push("url(images/pizza/pepperoni-full.png)");
    }else if(evt.srcElement.id === "chicken" && evt.target.checked === true){
        topWidth[8].children[1].selected = true;
        topAmount[8].children[1].selected = true;
        toppingArray.push("url(images/pizza/chicken-full.png)");
    }else if(evt.srcElement.id === "ham" && evt.target.checked === true){
        topWidth[6].children[1].selected = true;
        topAmount[6].children[1].selected = true;
        toppingArray.push("url(images/pizza/ham-full.png)");
    }else if(evt.srcElement.id === "mushrooms" && evt.target.checked === true){
        topWidth[3].children[1].selected = true;
        topAmount[3].children[1].selected = true;
        toppingArray.push("url(images/pizza/mushrooms-full.png)");
    }else if(evt.srcElement.id === "olives" && evt.target.checked === true){
        topWidth[5].children[1].selected = true;
        topAmount[5].children[1].selected = true;
        toppingArray.push("url(images/pizza/olives-full.png)");
    }else if(evt.srcElement.id === "onion" && evt.target.checked === true){
        topWidth[9].children[1].selected = true;
        topAmount[9].children[1].selected = true;
        toppingArray.push("url(images/pizza/onion-full.png)");
    }else if(evt.srcElement.id === "pineapple" && evt.target.checked === true){
        topWidth[2].children[1].selected = true;
        topAmount[2].children[1].selected = true;
        toppingArray.push("url(images/pizza/pineapple-full.png)");
    }else if(evt.srcElement.id === "spinach" && evt.target.checked === true){
        topWidth[7].children[1].selected = true;
        topAmount[7].children[1].selected = true;
        toppingArray.push("url(images/pizza/spinach-full.png)");
    }else if(evt.srcElement.id === "sausage" && evt.target.checked === true){
        topWidth[4].children[1].selected = true;
        topAmount[4].children[1].selected = true;
        toppingArray.push("url(images/pizza/sausage-full.png)");
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
    for(var i = toppingArray.length-1; i >= 0 ; i--){
        if(evt.srcElement.id === "bacon" && evt.target.checked === false){
            topWidth[0].children[0].selected = true;
            topAmount[0].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === false){
            topWidth[1].children[0].selected = true;
            topAmount[1].children[0].selected = true;
            topping = "url(images/pizza/pepperoni-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "chicken" && evt.target.checked === false){
            topWidth[8].children[0].selected = true;
            topAmount[8].children[0].selected = true;
            topping = "url(images/pizza/chicken-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "ham" && evt.target.checked === false){
            topWidth[6].children[0].selected = true;
            topAmount[6].children[0].selected = true;
            topping = "url(images/pizza/ham-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "mushrooms" && evt.target.checked === false){
            topWidth[3].children[0].selected = true;
            topAmount[3].children[0].selected = true;
            topping = "url(images/pizza/mushrooms-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "olives" && evt.target.checked === false){
            topWidth[5].children[0].selected = true;
            topAmount[5].children[0].selected = true;
            topping = "url(images/pizza/olives-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "onion" && evt.target.checked === false){
            topWidth[9].children[0].selected = true;
            topAmount[9].children[0].selected = true;
            topping = "url(images/pizza/onion-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "pineapple" && evt.target.checked === false){
            topWidth[2].children[0].selected = true;
            topAmount[2].children[0].selected = true;
            topping = "url(images/pizza/pineapple-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "spinach" && evt.target.checked === false){
            topWidth[7].children[0].selected = true;
            topAmount[7].children[0].selected = true;
            topping = "url(images/pizza/spinach-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
        }else if(evt.srcElement.id === "sausage" && evt.target.checked === false){
            topWidth[4].children[0].selected = true;
            topAmount[4].children[0].selected = true;
            topping = "url(images/pizza/sausage-full.png)";
            if(toppingArray[i].includes(evt.srcElement.id) === true) toppingArray.splice(i, 1);
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
