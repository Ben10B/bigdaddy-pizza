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
    sm.addEventListener('click', displaySizeClick);
    med.addEventListener('click', displaySizeClick);
    lg.addEventListener('click', displaySizeClick);
    xl.addEventListener('click', displaySizeClick);
    nextBtn.addEventListener('click', toToppings);
}
function displaySizeClick(evt){
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
setPizzaSize();
function setPizzaSize(){
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

if(checkout != null){
    checkout.addEventListener('click', toCheckout);
}
var table = document.getElementById('tableContainer');
var buttonNames = ["bacon", "pepperoni", "pineapple", "mushrooms", "sausage", "olives", "ham", "spinach", "chicken", "onion"];
var buttons = [];

buttonNames.forEach(buildTopping);
function buildTopping(item, index, arr){
    //Create table row and heading for button
    var row = document.createElement('tr');
    var heading = document.createElement('th');
    heading.textContent = item.charAt(0).toUpperCase() + item.substring(1);
    //Create topping button
    buttons[index] = document.createElement('input');
    buttons[index].id = item;
    buttons[index].type = 'checkbox';
    //Append button to table
    heading.appendChild(buttons[index]);
    row.appendChild(heading);
    table.appendChild(row);
    //Add event listener to button
    buttons[index].addEventListener('click', toppingHandlerClick);
    //Create table detail Full/Half dropdown
    var td = document.createElement('td');
    var select = document.createElement('select');
    select.setAttribute('class', 'topWidth');
    select.id = item;
    var option1 = document.createElement('option');
    option1.selected = true; option1.textContent = "Full/Half";
    var option2 = document.createElement('option');
    option2.value = "Full"; option2.textContent = "Full";
    var option3 = document.createElement('option');
    option3.value = "Left Half"; option3.textContent = "Left Half";
    var option4 = document.createElement('option');
    option4.value = "Right Half"; option4.textContent = "Right Half";
    //Append dropdown to table
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    td.appendChild(select);
    row.appendChild(td);
    //Add event listener to dropdown
    select.addEventListener('click', changeImageClick);
    //Create table detail Regular/Extra dropdown
    var tdA = document.createElement('td');
    var selectA = document.createElement('select');
    // selectA.setAttribute('class', 'topWidth');
    selectA.id = item;
    var optionA = document.createElement('option');
    optionA.selected = true; optionA.textContent = "Reg/Extra";
    var optionB = document.createElement('option');
    optionB.value = "Regular"; optionB.textContent = "Regular";
    var optionC = document.createElement('option');
    optionC.value = "Extra"; optionC.textContent = "Extra";
    //Append dropdown to table
    selectA.appendChild(optionA);
    selectA.appendChild(optionB);
    selectA.appendChild(optionC);
    tdA.appendChild(selectA);
    row.appendChild(tdA);
    //Add event listener to dropdown
    // selectA.addEventListener('click', changeImageClick);
}

function toCheckout(evt){
    window.location.href = "./checkout.html";
}
function changeImageClick(evt){
    if(evt.target.value === "Left Half"){
        left(evt.target.id);
    }else if(evt.target.value === "Right Half"){
        right(evt.target.id);
    }else if(evt.target.value === "Full"){
        full(evt.target.id);
    }
}
function full(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("left", "full");
            toppingArray[i] = toppingArray[i].replace("right", "full");
        }
    }
    drawPizza();
}
function left(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "left");
            toppingArray[i] = toppingArray[i].replace("right", "left");
        }
    }
    drawPizza();
}
function right(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "right");
            toppingArray[i] = toppingArray[i].replace("left", "right");
        }
    }
    drawPizza();
}
function toppingHandlerClick(evt){
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
    drawPizza();
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
    drawPizza();
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
drawPizza();
function drawPizza(){
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
}