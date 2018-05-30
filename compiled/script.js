var HTML_ARRAY = [];
HTML_ARRAY[0] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>DELIVERY</h1> <div id='address-form'> <input type='text' placeholder='Street'> <br> <input type='text' placeholder='Apt, Suite (optional)'> <br> <input type='text' placeholder='City'> <br> <input type='text' id='stateBox'placeholder='State'> <input type='text' id='zipBox' placeholder='Zip Code'> </div> <div class='button' onclick='startOrder()'>FIND STORE</div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center'>CARRYOUT</h1> <input type='text' id='zipBox' placeholder='Zip Code, City, or State'> <div class='button' onclick='startOrder()'>FIND STORE</div> </div> </div>";
HTML_ARRAY[1] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>PICK A PIZZA TO CUSTOMIZE:</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`custom`, this)' id='pizza-custom' class='pizza-option'>CUSTOM</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`cheese`, this)' id='pizza-cheese' class='pizza-option'>CHEESE</h2></div> </div> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`pepperoni`, this)' id='pizza-pepperoni' class='pizza-option'>PEPPERONI</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`meat`, this)' id='pizza-meat' class='pizza-option'>MEAT-MANIA</h2></div> </div> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`hawaiian`, this)' id='pizza-hawaiian'class='pizza-option'>HAWAIIAN</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`alfredo`, this)' id='pizza-alfredo' class='pizza-option'>ALFREDO</h2></div> </div> <div class='row arrows'> <!-- <div class='col-l-6' onclick='prevPage()'><i class='fa fa-arrow-left'></i></div> --> <div class='col-l-12' onclick='loadSizes()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='total'>TOTAL: $0</h1> <div class='row'> <div class='col-l-12' id='pizza-display'></div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";
HTML_ARRAY[2] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>HOW HUNGRY ARE YOU?</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='sm' class='pizza-option'>SMALL 8in</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='med' class='pizza-option'>MEDIUM 10in</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='lg' class='pizza-option'>LARGE 14in</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='xl' class='pizza-option'>X-LARGE 20in</h2></div> <div class='col-l-3'></div> </div> <div class='row arrows'> <!-- <div class='col-l-6' onclick='startOrder()'><i class='fa fa-arrow-left'></i></div> --> <div class='col-l-12' onclick='loadSauce()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='price'>TOTAL: $0</h1> <div class='row'> <!-- <div class='col-l-12' id='pizza-display'></div> --> <canvas id='pizzaDisplay'></canvas> <div class='col-l-12' id='details'> <h3>ORDER DETAILS</h3> <ul> <li id='sizeDtls'>SIZE:</li> <li id='toppingsDtls'>TOPPINGS:</li> </ul> </div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";

HTML_ARRAY[3] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>SAUCE IT UP:</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`marinara`, this)' id='sauce-marinara' class='pizza-option'>MARINARA</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`bbq`, this)' id='sauce-bbq' class='pizza-option'>BBQ</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`alfredo`, this)' id='sauce-alfredo' class='pizza-option'>ALFREDO</h2></div> <div class='col-l-3'></div> </div> <div class='row arrows'> <div class='col-l-12' onclick='loadToppings()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='price'>TOTAL: $0</h1> <div class='row'> <canvas class='col-l-12' id='pizzaDisplay'></canvas> <div class='col-l-12' id='details'> <h3>ORDER DETAILS</h3> <ul> <li id='sizeDtls'>SIZE:</li> <li id='toppingsDtls'>TOPPINGS:</li> </ul> </div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";
HTML_ARRAY[4] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>TOP IT UP:</h1> <div class='tooltip'>SPECIAL DEAL! <span class='tooltiptext'>5 Toppings = $3.00</span> </div> <div class='m-auto' id='pizzaOptionsBox'> <div class='col-l-6 center'> <table> <tr> <th><input type='checkbox' id='bacon'></input>Bacon</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='pepperoni'></input>Pepperoni</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='pineapple'></input>Pineapples</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='mushrooms'></input>Mushrooms</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='sausage'></input>Sausage</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='olives'></input>Olives</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='ham'></input>Ham</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='spinach'></input>Spinach</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='chicken'></input>Chicken</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> <tr> <th><input type='checkbox' id='onion'></input>Onions</th> <td><select class='topWidth'> <option value='' selected='selected'>Full/Half</option> <option value='Full'>Full</option> <option value='Left Half'>Left Half</option> <option value='Right Half'>Right Half</option> </select></td> </tr> </table> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='price'>TOTAL: $0.00</h1> <div class='row'> <canvas id='pizzaDisplay'></canvas> <div class='col-l-12' id='details'> <h3>ORDER DETAILS</h3> <ul> <li id='sizeDtls'>SIZE:</li> <li id='toppingsDtls'>TOPPINGS:</li> </ul> <div class='button' id='checkout'>Add to Order</div> </div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";
HTML_ARRAY[5] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-12 center' id='delivery'> <h1 class='center'>THANK YOU!</h1> <h1 class='center'>Your order has been placed!</h1> <h1 class='center'>You should receive an email confirmation shortly.</h1> <!-- <div id='custom' class='btn'>More Pizza, Big Daddy!</div> <div id='home' class='btn'>Nah, I'm straight.</div> --> </div> </div>";
var pizzaDiv = document.getElementById('pizza');
var totalText = document.getElementById('total');

//PIZZA TYPE SPECIFIC
var customPizzaBtn;
var cheesePizzaBtn;
var pepperoniPizzaBtn;
var meatPizzaBtn;
var hawaiianPizzaBtn;
var alfredoPizzaBtn;
var pizzaDisplay;
var pizzaDesc;

//PIZZA SIZE SPECIFIC
var smallBtn;
var medBtn;
var largeBtn;
var xlargeBtn;

//PIZZA SAUCE
var marinaraBtn;
var bbqBtn;
var alfredoBtn;

var pizzaType;
var pizzaTypeUrl;
var pizzaSize;
var pizzaSauce;

var orderTotal = 0;
var tempTotal = 0;
var pizzaTypeCost = 0;
var pizzaSizeCost = 0;

///BenJamIn's Script
var canvas;
var ctx;
//Sizes Page
var sm = document.getElementById('sm');
var med = document.getElementById('med');
var lg = document.getElementById('lg');
var xl = document.getElementById('xl');
var priceDtls = document.getElementById('price');
var sizeDtls = document.getElementById('sizeDtls');
var toppings = document.getElementById('toppingsDtls');

var width = 0;
var height = 0;
var size = "";
var price = 0.00;
var toppingPrice = 0;
var bgSize = 0;

function displaySize(evt){
    document.getElementsByClassName('fa-arrow-right')[0].style.visibility = "visible";
    ctx.clearRect(0,0,width,height);
    if(evt.srcElement.id === "sm"){
        pizzaSizeCost = 2.00;
        bgSize = 160;
        str = 'Small 8"';
    }else if(evt.srcElement.id === "med"){
        pizzaSizeCost = 3.00;
        bgSize = 175;
        str = 'Medium 10"';
    }else if(evt.srcElement.id === "lg"){
        pizzaSizeCost = 4.00;
        bgSize = 200;
        str = 'Large 14"';
    }else if(evt.srcElement.id === "xl"){
        pizzaSizeCost = 5.00;
        bgSize = 210;
        str = 'X-Large 20"';
    }
    sizeDtls.innerHTML = 'SIZE: '+str;
    var toppingStr = "";
    toppings.innerHTML = "TOPPINGS: ";
    for(i = 0; i < toppingArrayDtls.length; i++){
        toppingStr += toppingArrayDtls[i]+", ";
    }
    toppings.innerHTML += toppingStr.slice(0, -2);

    orderTotal = (pizzaTypeCost + pizzaSizeCost);
    priceDtls.innerHTML = "Total: $"+orderTotal;
    canvas.style.background = pizzaTypeUrl;
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = bgSize.toString()+"px"; 
    size = evt.srcElement.id;
}
function toToppings(evt){
    window.location.href = "./topping.html";
}

function drawPizzaSize(){
    var str = "";
    ctx.clearRect(0,0,width,height);
    if(size === "sm"){
        str = 'Small 8"';
        bgSize = 160;
    }else if(size === "med"){
        str = 'Medium 10"';
        bgSize = 175;
    }else if(size === "lg"){
        str = 'Large 14"';
        bgSize = 200;
    }else if(size === "xl"){
        str = 'X-Large 20"';
        bgSize = 210;
    }
    sizeDtls.innerHTML = 'SIZE: '+str;
    priceDtls.innerHTML = "Total: $"+orderTotal;
    
    canvas.style.background = pizzaTypeUrl;
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = bgSize.toString()+"px"; 
}
// Toppings Page
var toppingArray = [];
var toppingArrayDtls = [];
var checkout = document.getElementById('checkout');
var topWidth = document.getElementsByClassName('topWidth');

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

function toCheckout(evt){
    pizzaDiv.innerHTML = HTML_ARRAY[5];
}
function changeImage(evt){
    console.log(evt);
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
        bgsize += (bgSize - 45)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", "+pizzaTypeUrl;
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
        bgsize += (bgSize - 45)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", "+pizzaTypeUrl;
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
            canvas.style.background = str+", "+pizzaTypeUrl;
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
        bgsize += (bgSize - 45)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", "+pizzaTypeUrl;
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
        bgsize += (bgSize - 45)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", "+pizzaTypeUrl;
            canvas.style.backgroundSize = bgsize+", "+bgSize.toString()+"px";
        }
    }
    if(toppingArray.length === 0){
        canvas.style.background = pizzaTypeUrl;
        canvas.style.backgroundSize = bgSize.toString()+"px";
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    details();
}
function details(){
    var str = "";
    if(toppingArray.length === 1){ 
        toppingPrice = 0; 
    }
    else if(toppingArray.length === 5){ 
        toppingPrice = 3; document.getElementsByClassName('tooltip')[0].style.visibility = 'visible'; }
    else if(toppingArray.length > 1) {checkout.style.visibility = "visible";}
    else{ document.getElementsByClassName('tooltip')[0].style.visibility = 'hidden';
        checkout.style.visibility = "hidden";
    }
    if(toppingPrice < 0){ toppingPrice = 0; }

    priceDtls.innerHTML = "Total: $"+(orderTotal + toppingPrice).toFixed(2);
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

///end
function startOrder(){
    console.log("START ORDER");
    pizzaDiv.innerHTML = HTML_ARRAY[1];
    refresh();
    customPizzaBtn = document.getElementById('pizza-custom');
    pizzaDisplay = document.getElementById('pizza-display');
    pizzaDesc = document.getElementById('pizza-description');
    totalText  = document.getElementById('total');
    cheesePizzaBtn = document.getElementById('pizza-cheese');
    pepperoniPizzaBtn = document.getElementById('pizza-pepperoni');
    meatPizzaBtn = document.getElementById('pizza-meat');
    hawaiianPizzaBtn = document.getElementById('pizza-hawaiian');
    alfredoPizzaBtn = document.getElementById('pizza-alfredo');

    console.log("BTN", customPizzaBtn);
}
function loadApp(){
    pizzaDiv.innerHTML = HTML_ARRAY[0];
}

function loadSizes(){
    orderTotal = tempTotal;
    pizzaDiv.innerHTML = HTML_ARRAY[2];
    refresh();
    canvas = document.getElementById('pizzaDisplay');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    toppings = document.getElementById('toppingsDtls');
    sm = document.getElementById('sm');
    med = document.getElementById('med');
    lg = document.getElementById('lg');
    xl = document.getElementById('xl');
    priceDtls = document.getElementById('price');
    sizeDtls = document.getElementById('sizeDtls');
    sm.addEventListener('click', displaySize);
    med.addEventListener('click', displaySize);
    lg.addEventListener('click', displaySize);
    xl.addEventListener('click', displaySize);
    drawPizzaSize();
}

function loadSauce(){
    console.log(pizzaType);
    if(pizzaType !== 'custom'){
        pizzaDiv.innerHTML = HTML_ARRAY[5];
    }else{
        pizzaDiv.innerHTML = HTML_ARRAY[3];
        canvas = document.getElementById('pizzaDisplay');
        ctx = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;
        priceDtls = document.getElementById('price');
        sizeDtls = document.getElementById('sizeDtls');
        marinaraBtn = document.getElementById('sauce-marinara');
        bbqBtn = document.getElementById('sauce-bbq');
        alfredoBtn = document.getElementById('sauce-alfredo');
        drawPizzaSize();
    }
    
}

function loadToppings(){
    pizzaDiv.innerHTML = HTML_ARRAY[4];
    canvas = document.getElementById('pizzaDisplay');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    priceDtls = document.getElementById('price');
    sizeDtls = document.getElementById('sizeDtls');
    toppings = document.getElementById('toppingsDtls');
    checkout = document.getElementById('checkout');
    bacon = document.getElementById('bacon');
    pepperoni = document.getElementById('pepperoni');
    chicken = document.getElementById('chicken');
    ham = document.getElementById('ham');
    mushrooms = document.getElementById('mushrooms');
    olives = document.getElementById('olives');
    onion = document.getElementById('onion');
    pineapple = document.getElementById('pineapple');
    spinach = document.getElementById('spinach');
    sausage = document.getElementById('sausage');

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
    checkout.addEventListener('click', toCheckout);
    topWidth = document.getElementsByClassName('topWidth');
    for(i = 0; i < topWidth.length; i++){
        topWidth[i].addEventListener('click', changeImage);
    }
    drawPizzaSize();
}

function refresh(){
    var content = pizza.innerHTML;
    pizza.innerHTML= content;
    // console.log(content);
}

function getOrderTotal(){
    tempTotal = 0;
    tempTotal += pizzaTypeCost;
    tempTotal += pizzaSizeCost;
    console.log("TEMP TOTAL", tempTotal);
}

function setPizzaType(type){
    document.getElementsByClassName('fa-arrow-right')[0].style.visibility = "visible";
    if(type == "custom"){
        pizzaType = type;
        customPizzaBtn.classList.add('selected-pizza');
        pizzaDisplay.style.backgroundImage = "url('images/pizza/crust.png')";
        pizzaTypeUrl = "url('images/pizza/crust.png')";
        pizzaDesc.innerHTML = "Build your own custom pizza!"
        resetPizzaBtns(pizzaType);
        pizzaTypeCost = 10;
        console.log("PTC",pizzaTypeCost);
        updateTotal();
    }
    if(type == "cheese"){
        pizzaType = type;
        cheesePizzaBtn.classList.add('selected-pizza');
        pizzaDisplay.style.backgroundImage = "url('images/pizza/prebuilt-cheese.png')";
        pizzaTypeUrl = "url('images/pizza/prebuilt-cheese.png')";
        pizzaDesc.innerHTML = "Classic Italian-style marinara pizza with cheese."
        toppingArrayDtls.push('Cheese');
        console.log("Hint "+toppingArrayDtls[0]);
        resetPizzaBtns(pizzaType);
        pizzaTypeCost = 12;
        updateTotal();

    }
    if(type == "pepperoni"){
        pizzaType = type;
        pepperoniPizzaBtn.classList.add('selected-pizza');
        pizzaDisplay.style.backgroundImage = "url('images/pizza/prebuilt-pepperoni.png')";
        pizzaTypeUrl = "url('images/pizza/prebuilt-pepperoni.png')";
        pizzaDesc.innerHTML = "Classic marinara pizza with cheese and pepperoni."
        toppingArrayDtls.push('Cheese', 'Pepperoni');
        resetPizzaBtns(pizzaType);
        pizzaTypeCost = 13;
        updateTotal();

    }
    if(type == "meat"){
        pizzaType = type;
        meatPizzaBtn.classList.add('selected-pizza');
        pizzaDisplay.style.backgroundImage = "url('images/pizza/prebuilt-meatlovers.png')";
        pizzaTypeUrl = "url('images/pizza/prebuilt-meatlovers.png')";
        pizzaDesc.innerHTML = "Marinara, Pepperoni, Italian Sausage, Bacon, Olives."
        toppingArrayDtls.push('Cheese', 'Pepperoni', 'Sausage', 'Bacon', 'Olives');
        resetPizzaBtns(pizzaType);
        pizzaTypeCost = 15;
        updateTotal();

    }
    if(type == "hawaiian"){
        pizzaType = type;
        hawaiianPizzaBtn.classList.add('selected-pizza');
        pizzaDisplay.style.backgroundImage = "url('images/pizza/prebuilt-hawaiian.png')";
        pizzaTypeUrl = "url('images/pizza/prebuilt-hawaiian.png')";
        pizzaDesc.innerHTML = "Marinara, Smoked ham and sweet DOLE pineapple."
        toppingArrayDtls.push('Cheese', 'Ham', 'Pineapple');
        resetPizzaBtns(pizzaType);
        pizzaTypeCost = 14;
        updateTotal();

    }
    if(type == "alfredo"){
        pizzaType = type;
        alfredoPizzaBtn.classList.add('selected-pizza');
        pizzaDisplay.style.backgroundImage = "url('images/pizza/prebuilt-chickenalfredo.png')";
        pizzaTypeUrl = "url('images/pizza/prebuilt-chickenalfredo.png')";
        pizzaDesc.innerHTML = "Garlic Alfredo, Bacon, Baby Spinach."
        toppingArrayDtls.push('Cheese', 'Chicken', 'Bacon', 'Spinach');
        resetPizzaBtns(pizzaType);
        pizzaTypeCost = 14;
        updateTotal();
    }
    console.log("PIZZA TYPE: " + pizzaType);
}


function resetPizzaBtns(type){
    if(type == "custom"){
        cheesePizzaBtn.classList.remove('selected-pizza');
        pepperoniPizzaBtn.classList.remove('selected-pizza');
        meatPizzaBtn.classList.remove('selected-pizza');
        hawaiianPizzaBtn.classList.remove('selected-pizza');
        alfredoPizzaBtn.classList.remove('selected-pizza');
    }
    if(type == "cheese"){
        customPizzaBtn.classList.remove('selected-pizza');
        pepperoniPizzaBtn.classList.remove('selected-pizza');
        meatPizzaBtn.classList.remove('selected-pizza');
        hawaiianPizzaBtn.classList.remove('selected-pizza');
        alfredoPizzaBtn.classList.remove('selected-pizza');
    }
    if(type == "pepperoni"){
        customPizzaBtn.classList.remove('selected-pizza');
        cheesePizzaBtn.classList.remove('selected-pizza');
        meatPizzaBtn.classList.remove('selected-pizza');
        hawaiianPizzaBtn.classList.remove('selected-pizza');
        alfredoPizzaBtn.classList.remove('selected-pizza');
    }
    if(type == "meat"){
        customPizzaBtn.classList.remove('selected-pizza');
        cheesePizzaBtn.classList.remove('selected-pizza');
        pepperoniPizzaBtn.classList.remove('selected-pizza');
        hawaiianPizzaBtn.classList.remove('selected-pizza');
        alfredoPizzaBtn.classList.remove('selected-pizza');
    }
    if(type == "hawaiian"){
        customPizzaBtn.classList.remove('selected-pizza');
        cheesePizzaBtn.classList.remove('selected-pizza');
        pepperoniPizzaBtn.classList.remove('selected-pizza');
        meatPizzaBtn.classList.remove('selected-pizza');
        alfredoPizzaBtn.classList.remove('selected-pizza');
    }
    if(type == "alfredo"){
        customPizzaBtn.classList.remove('selected-pizza');
        cheesePizzaBtn.classList.remove('selected-pizza');
        pepperoniPizzaBtn.classList.remove('selected-pizza');
        meatPizzaBtn.classList.remove('selected-pizza');
        hawaiianPizzaBtn.classList.remove('selected-pizza');
    }
}

// function setPizzaSize(size){
//     if(size == "s"){
//         pizzaSize = size;
//         resetPizzaSizeBtns(pizzaSize);
//         if(smallBtn.classList.contains('selected-pizza')){
//             console.log("CONTAINS DONT READ")
//         }
//         else{
//             pizzaSizeCost = -2;
//             updateTotal();
//             console.log("NOT CLICKED YET");
//             smallBtn.classList.add('selected-pizza');
//         }
//     }
//     if(size == "m"){
//         pizzaSize = size;
//         resetPizzaSizeBtns(pizzaSize);
//         if(medBtn.classList.contains('selected-pizza')){
//             console.log("CONTAINS DONT READ")
//         }
//         else{
//             pizzaSizeCost = 0;
//             updateTotal();
//             console.log("NOT CLICKED YET");
//             medBtn.classList.add('selected-pizza');
//         }

//     }
//     if(size == "l"){
//         pizzaSize = size;
//         resetPizzaSizeBtns(pizzaSize);
//         if(largeBtn.classList.contains('selected-pizza')){
//             console.log("CONTAINS DONT READ")
//         }
//         else{
//             pizzaSizeCost = 3;
//             updateTotal();
//             console.log("NOT CLICKED YET");
//             largeBtn.classList.add('selected-pizza');
//         }

//     }
//     if(size == "xl"){
//         pizzaSize = size;
//         resetPizzaSizeBtns(pizzaSize);
//         if(xlargeBtn.classList.contains('selected-pizza')){
//             console.log("CONTAINS DONT READ")
//         }
//         else{
//             pizzaSizeCost = 5;
//             console.log(orderTotal);
//             updateTotal();
//             console.log("NOT CLICKED YET");
//             xlargeBtn.classList.add('selected-pizza');
//         }
//     }
//     console.log(pizzaSize);
// }

// function resetPizzaSizeBtns(size){
//     if(size == "s"){
//         medBtn.classList.remove('selected-pizza');
//         largeBtn.classList.remove('selected-pizza');
//         xlargeBtn.classList.remove('selected-pizza');
//         updateTotal();


//     }
//     if(size == "m"){
//         smallBtn.classList.remove('selected-pizza');
//         largeBtn.classList.remove('selected-pizza');
//         xlargeBtn.classList.remove('selected-pizza');
//         updateTotal();


//     }
//     if(size == "l"){
//         smallBtn.classList.remove('selected-pizza');
//         medBtn.classList.remove('selected-pizza');
//         xlargeBtn.classList.remove('selected-pizza');
//         updateTotal();

//     }
//     if(size == "xl"){
//         smallBtn.classList.remove('selected-pizza');
//         medBtn.classList.remove('selected-pizza');
//         largeBtn.classList.remove('selected-pizza');
//         updateTotal();
//     }
// }

function setPizzaSauce(sauce){
    document.getElementsByClassName('fa-arrow-right')[0].style.visibility = "visible";
    if(sauce == "marinara"){
        pizzaSauce = sauce;
        resetPizzaSauceBtns(pizzaSauce);
        marinaraBtn.classList.add('selected-pizza');  
        pizzaTypeUrl = "url(images/pizza/sauce-marinara.png)"; 
    }
    if(sauce == "bbq"){
        pizzaSauce = sauce;
        resetPizzaSauceBtns(pizzaSauce);
        bbqBtn.classList.add('selected-pizza');  
        pizzaTypeUrl = "url(images/pizza/sauce-bbq.png)";   
    }
    if(sauce == "alfredo"){
        pizzaSauce = sauce;
        resetPizzaSauceBtns(pizzaSauce);
        alfredoBtn.classList.add('selected-pizza');    
        pizzaTypeUrl = "url(images/pizza/sauce-alfredo.png)"; 
    }
    drawPizzaSize();
}

function resetPizzaSauceBtns(sauce){
    if(sauce == "marinara"){
        bbqBtn.classList.remove('selected-pizza');
        alfredoBtn.classList.remove('selected-pizza');
    }
    if(sauce == "bbq"){
        marinaraBtn.classList.remove('selected-pizza');
        alfredoBtn.classList.remove('selected-pizza');
    }
    if(sauce == "alfredo"){
        marinaraBtn.classList.remove('selected-pizza');
        bbqBtn.classList.remove('selected-pizza');
    }
}


function updateTotal(){
    getOrderTotal();
    totalText = document.getElementById('total');
    totalText.innerHTML = `TOTAL: $${tempTotal}`;
}

