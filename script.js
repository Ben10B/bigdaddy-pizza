var canvas = document.getElementById('pizzaDisplay');
var ctx = canvas.getContext('2d');
//Sizes Page
var sm = document.getElementById('sm');
var med = document.getElementById('med');
var lg = document.getElementById('lg');
var xl = document.getElementById('xl');
var priceDtls = document.getElementById('price');
var sizeDtls = document.getElementById('sizeDtls');
var toppings = document.getElementById('toppingsDtls');
var nextBtn = document.getElementById('btn');

var width = canvas.width;
var height = canvas.height;
var size = "";
var price = 0.00;
var toppingPrice = 0;
var bgSize;

if(sm !== null){
    sm.addEventListener('click', displaySize);
    med.addEventListener('click', displaySize);
    lg.addEventListener('click', displaySize);
    xl.addEventListener('click', displaySize);
    nextBtn.addEventListener('click', toToppings);
}
function displaySize(evt){
    ctx.clearRect(0,0,width,height);
    if(evt.srcElement.id === "sm"){
        sizeDtls.innerHTML = 'SIZE: Small 8"';
        price = 7.99;
        bgSize = 60;
    }else if(evt.srcElement.id === "med"){
        price = 9.99;
        sizeDtls.innerHTML = 'SIZE: Medium 10"';
        bgSize = 75;
    }else if(evt.srcElement.id === "lg"){
        price = 12.99;
        sizeDtls.innerHTML = 'SIZE: Large 12"';
        bgSize = 100;
    }else if(evt.srcElement.id === "xl"){
        price = 14.99;
        sizeDtls.innerHTML = 'SIZE: X-Large 14"';
        bgSize = 110;
    }
    priceDtls.innerHTML = "Total: $"+price;
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = bgSize.toString()+"px"; 
    size = evt.srcElement.id;
    nextBtn.style.visibility = "visible";
}
function toToppings(evt){
    window.location.href = "./topping.html";
}
drawPizzaSize();
function drawPizzaSize(){
    size = "xl";
    var str = "";
    price = 14.99;
    ctx.clearRect(0,0,width,height);
    if(size === "sm"){
        str = 'Small 8"';
        bgSize = 60;
    }else if(size === "med"){
        str = 'Medium 10"';
        bgSize = 75;
    }else if(size === "lg"){
        str = 'Large 12"';
        bgSize = 100;
    }else if(size === "xl"){
        str = 'X-Large 14"';
        bgSize = 110;
    }
    if(document.getElementById(details) !== null){
        sizeDtls.innerHTML = 'SIZE: '+str;
        priceDtls.innerHTML = "Total: $"+price;
    }
    canvas.style.background = "url(images/pizza/crust.png)";
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = bgSize.toString()+"px"; 
}
// Toppings Page
var toppingArray = [];
var toppingArrayDtls = [];
var checkout = document.getElementById('checkout');

var topWidth = document.getElementsByClassName('topWidth');
for(i = 0; i < topWidth.length; i++){
    topWidth[i].addEventListener('click', changeImage);
}
if(checkout != null){
    checkout.addEventListener('click', toCheckout);
}
var bacon = document.getElementById('bacon');
var pepperoni = document.getElementById('pepperoni');
var chicken = document.getElementById('chicken');
var ham = document.getElementById('ham');
var mushrooms = document.getElementById('mushrooms');
var olives = document.getElementById('olives');
var onion = document.getElementById('onion');
var pineapple = document.getElementById('pineapple');
var spinach = document.getElementById('spinach');
var sausage = document.getElementById('sausage');

if(bacon != null){
    bacon.addEventListener('click', modifyTopping);
    pepperoni.addEventListener('click', modifyTopping);
    chicken.addEventListener('click', modifyTopping);
    ham.addEventListener('click', modifyTopping);
    mushrooms.addEventListener('click', modifyTopping);
    olives.addEventListener('click', modifyTopping);
    onion.addEventListener('click', modifyTopping);
    pineapple.addEventListener('click', modifyTopping);
    spinach.addEventListener('click', modifyTopping);
    sausage.addEventListener('click', modifyTopping);
}
function toCheckout(evt){
    window.location.href = "./checkout.html";
}
function changeImage(evt){
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
        }else if(topWidth[1].value === "Full"){
            full('pepperoni');
        }
        if(topWidth[2].value === "Left Half"){
            left('pineapple');
        }else if(topWidth[2].value === "Right Half"){
            right('pineapple');
        }else if(topWidth[2].value === "Full"){
            full('pineapple');
        }
        if(topWidth[3].value === "Left Half"){
            left('mushrooms');
        }else if(topWidth[3].value === "Right Half"){
            right('mushrooms');
        }else if(topWidth[3].value === "Full"){
            full('mushrooms');
        }
        if(topWidth[4].value === "Left Half"){
            left('sausage');
        }else if(topWidth[4].value === "Right Half"){
            right('sausage');
        }else if(topWidth[4].value === "Full"){
            full('sausage');
        }
        if(topWidth[5].value === "Left Half"){
            left('olives');
        }else if(topWidth[5].value === "Right Half"){
            right('olives');
        }else if(topWidth[5].value === "Full"){
            full('olives');
        }
        if(topWidth[6].value === "Left Half"){
            left('ham');
        }else if(topWidth[6].value === "Right Half"){
            right('ham');
        }else if(topWidth[6].value === "Full"){
            full('ham');
        }
        if(topWidth[7].value === "Left Half"){
            left('spinach');
        }else if(topWidth[7].value === "Right Half"){
            right('spinach');
        }else if(topWidth[7].value === "Full"){
            full('spinach');
        }
        if(topWidth[8].value === "Left Half"){
            left('chicken');
        }else if(topWidth[8].value === "Right Half"){
            right('chicken');
        }else if(topWidth[8].value === "Full"){
            full('chicken');
        }
        if(topWidth[9].value === "Left Half"){
            left('onion');
        }else if(topWidth[9].value === "Right Half"){
            right('onion');
        }else if(topWidth[9].value === "Full"){
            full('onion');
        }
    }
}
function full(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("left", "full");
            toppingArray[i] = toppingArray[i].replace("right", "full");
        }
    }
    var str = "";
    var bgsize = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        bgsize += (bgSize - 25)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", url(images/pizza/crust.png)";
            canvas.style.backgroundSize = bgsize+", "+bgSize.toString()+"px";
        }
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
}
function left(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "left");
            toppingArray[i] = toppingArray[i].replace("right", "left");
        }
    }
    var str = "";
    var bgsize = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        bgsize += (bgSize - 25)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", url(images/pizza/crust.png)";
            canvas.style.backgroundSize = bgsize+", "+bgSize.toString()+"px";
        }
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
}
function right(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "right");
            toppingArray[i] = toppingArray[i].replace("left", "right");
        }
    }
    var str = "";
    var bgsize = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        bgsize += (bgSize - 25)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", url(images/pizza/crust.png)";
            canvas.style.backgroundSize = bgsize+", "+bgSize.toString()+"px";
        }
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
}
function modifyTopping(evt){
    if(evt.target.checked === true) addTopping(evt);
    else removeTopping(evt);
}
function addTopping(evt){
    if(evt.srcElement.id === "bacon" && evt.target.checked === true){
        topWidth[0].children[1].selected = true;
        toppingArray.push("url(images/pizza/bacon-full.png)");
        toppingArrayDtls.push('Bacon');toppingPrice += 1;
    } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === true){
        topWidth[1].children[1].selected = true;
        toppingArray.push("url(images/pizza/pepperoni-full.png)");
        toppingArrayDtls.push('Pepperoni');toppingPrice += 1;
    }else if(evt.srcElement.id === "chicken" && evt.target.checked === true){
        topWidth[8].children[1].selected = true;
        toppingArray.push("url(images/pizza/chicken-full.png)");
        toppingArrayDtls.push('Chicken');toppingPrice += 1;
    }else if(evt.srcElement.id === "ham" && evt.target.checked === true){
        topWidth[6].children[1].selected = true;
        toppingArray.push("url(images/pizza/ham-full.png)");
        toppingArrayDtls.push('Ham');toppingPrice += 1;
    }else if(evt.srcElement.id === "mushrooms" && evt.target.checked === true){
        topWidth[3].children[1].selected = true;
        toppingArray.push("url(images/pizza/mushrooms-full.png)");
        toppingArrayDtls.push('Mushrooms');toppingPrice += 1;
    }else if(evt.srcElement.id === "olives" && evt.target.checked === true){
        topWidth[5].children[1].selected = true;
        toppingArray.push("url(images/pizza/olives-full.png)");
        toppingArrayDtls.push('Olives');toppingPrice += 1;
    }else if(evt.srcElement.id === "onion" && evt.target.checked === true){
        topWidth[9].children[1].selected = true;
        toppingArray.push("url(images/pizza/onion-full.png)");
        toppingArrayDtls.push('Onion');toppingPrice += 1;
    }else if(evt.srcElement.id === "pineapple" && evt.target.checked === true){
        topWidth[2].children[1].selected = true;
        toppingArray.push("url(images/pizza/pineapple-full.png)");
        toppingArrayDtls.push('Pineapple');toppingPrice += 1;
    }else if(evt.srcElement.id === "spinach" && evt.target.checked === true){
        topWidth[7].children[1].selected = true;
        toppingArray.push("url(images/pizza/spinach-full.png)");
        toppingArrayDtls.push('Spinach');toppingPrice += 1;
    }else if(evt.srcElement.id === "sausage" && evt.target.checked === true){
        topWidth[4].children[1].selected = true;
        toppingArray.push("url(images/pizza/sausage-full.png)");
        toppingArrayDtls.push('Sausage');toppingPrice += 1;
    }
    var str = "";
    var bgsize = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        bgsize += (bgSize - 25)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", url(images/pizza/crust.png)";
            canvas.style.backgroundSize = bgsize+", "+bgSize.toString()+"px";
        }
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    details();
}
function removeTopping(evt){
    for(var i = toppingArray.length-1; i >= 0 ; i--){
        if(evt.srcElement.id === "bacon" && evt.target.checked === false){
            topWidth[0].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === false){
            topWidth[1].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "chicken" && evt.target.checked === false){
            topWidth[8].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "ham" && evt.target.checked === false){
            topWidth[6].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "mushrooms" && evt.target.checked === false){
            topWidth[3].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "olives" && evt.target.checked === false){
            topWidth[5].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "onion" && evt.target.checked === false){
            topWidth[9].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "pineapple" && evt.target.checked === false){
            topWidth[2].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "spinach" && evt.target.checked === false){
            topWidth[7].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "sausage" && evt.target.checked === false){
            topWidth[4].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }
    }
    var str = "";
    var bgsize = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        bgsize += (bgSize - 25)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", url(images/pizza/crust.png)";
            canvas.style.backgroundSize = bgsize+", "+bgSize.toString()+"px";
        }
    }
    if(toppingArray.length === 0){
        canvas.style.background = "url(images/pizza/crust.png)";
        canvas.style.backgroundSize = bgSize.toString()+"px";
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    details();
}
function details(){
    var str = "";
    if(toppingArray.length === 1){ 
        toppingPrice = 0; checkout.style.visibility = "visible";
    }
    else if(toppingArray.length === 5){ 
        toppingPrice = 3; document.getElementsByClassName('tooltip')[0].style.visibility = 'visible'; }
    else{ document.getElementsByClassName('tooltip')[0].style.visibility = 'hidden';
        checkout.style.visibility = "hidden";
    }
    if(toppingPrice < 0){ toppingPrice = 0; }

    priceDtls.innerHTML = "Total: $"+(price + toppingPrice).toFixed(2);
    toppings.innerHTML = "TOPPINGS: ";
    for(i = 0; i < toppingArray.length; i++){
        str += toppingArrayDtls[i]+", ";
    }
    toppings.innerHTML += str.slice(0, -2);
}
//Checkout Page
var custom = document.getElementById('custom');
var home = document.getElementById('home');
if(custom != null && home != null){
    custom.addEventListener('click', toCustom);
    home.addEventListener('click', toIndex);
}
function toCustom(evt){
    window.location.href = "./topping.html";
}
function toIndex(evt){
    window.location.href = "./index.html";
}
drawPizzaOnCheckout();
function drawPizzaOnCheckout(){
    var str = "";
    var bgsize = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        bgsize += (bgSize - 25)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", url(images/pizza/crust.png)";
            canvas.style.backgroundSize = bgsize+", "+bgSize.toString()+"px";
        }
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
}