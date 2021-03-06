var HTML_ARRAY = [];
//delivery
HTML_ARRAY[0] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>DELIVERY</h1> <div id='address-form'> <input id='streetBox' type='text' placeholder='Street'> <br> <input type='text' placeholder='Apt, Suite (optional)'> <br> <input id='cityBox' type='text' placeholder='City'> <br> <input type='text' id='stateBox'placeholder='State'> <input type='text' id='zipBox' placeholder='Zip Code'> </div> <div class='button' onclick='startOrder()'>FIND STORE</div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center'>CARRYOUT</h1> <input type='text' id='zipBox2' placeholder='Zip Code, City, or State'> <div class='button' onclick='startOrder()'>FIND STORE</div> </div> </div>";
//choose
HTML_ARRAY[1] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>PICK A PIZZA TO CUSTOMIZE:</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`custom`, this)' id='pizza-custom' class='pizza-option'>CUSTOM</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`cheese`, this)' id='pizza-cheese' class='pizza-option'>CHEESE</h2></div> </div> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`pepperoni`, this)' id='pizza-pepperoni' class='pizza-option'>PEPPERONI</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`meat`, this)' id='pizza-meat' class='pizza-option'>MEAT-MANIA</h2></div> </div> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`hawaiian`, this)' id='pizza-hawaiian'class='pizza-option'>HAWAIIAN</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`alfredo`, this)' id='pizza-alfredo' class='pizza-option'>ALFREDO</h2></div> </div> <div class='row arrows'> <!-- <div class='col-l-6' onclick='prevPage()'><i class='fa fa-arrow-left'></i></div> --> <div class='col-l-12' onclick='loadSizes()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='total'>TOTAL: $0</h1> <div class='row'> <div class='col-l-12' id='pizza-display'></div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";
//sizes
HTML_ARRAY[2] = "<div class='row'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row'> <div class='col-s-6 center' id='delivery'> <h1 class='center'>HOW HUNGRY ARE YOU?</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='sm' class='pizza-option'>SMALL 8&quot;</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='med' class='pizza-option'>MEDIUM 10&quot;</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='lg' class='pizza-option'>LARGE 14&quot;</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 id='xl' class='pizza-option'>X-LARGE 20&quot;</h2></div> <div class='col-l-3'></div> </div> <div class='row arrows'> <!-- <div class='col-l-6' onclick='startOrder()'><i class='fa fa-arrow-left'></i></div> --> <div class='col-l-12' onclick='loadSauce()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-s-6 center' id='carryout'> <h1 class='center' id='price'>TOTAL: $0</h1> <div class='m-auto' id='displayBox'> <div class='row pizzaRow'> <div class='col-l-12'> <canvas id='pizzaDisplay'></canvas> </div> </div> <div class='row'> <div class='col-l-12' id='details'> <h3>ORDER DETAILS</h3> <ul> <li id='sizeDtls'>SIZE:</li> <li id='toppingsDtls'>TOPPINGS:</li> </ul> </div> </div> </div> </div> </div>";
//sauces
HTML_ARRAY[3] = " <div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>SAUCE IT UP:</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`marinara`, this)' id='sauce-marinara' class='pizza-option'>MARINARA</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`bbq`, this)' id='sauce-bbq' class='pizza-option'>BBQ</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`alfredo`, this)' id='sauce-alfredo' class='pizza-option'>ALFREDO</h2></div> <div class='col-l-3'></div> </div> <div class='row arrows'> <div class='col-l-12' onclick='loadToppings()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='price'>TOTAL: $0</h1> <div class='row pizzaRow'> <div class='col-l-12'> <canvas id='pizzaDisplay'></canvas> </div> </div> <div class='row'> <div class='col-l-12' id='details'> <h3>ORDER DETAILS</h3> <ul> <li id='sizeDtls'>SIZE:</li> <li id='toppingsDtls'>TOPPINGS:</li> </ul> </div> </div> </div> </div>";
//toppings
HTML_ARRAY[4] = " <div class='row fit fadeIn'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit fadeIn'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>TOP IT UP:</h1> <div class='tooltip'>SPECIAL DEAL! <span class='tooltiptext'>5 Toppings = $3.00</span> </div> <div class='m-auto' id='pizzaOptionsBox'> <div class='col-l-6 center'> <table id='tableContainer'></table> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='price'>TOTAL: $0.00</h1> <div class='row pizzaRow'> <div class='col-l-12'> <canvas id='pizzaDisplay'></canvas> </div> </div> <div class='row'> <div class='col-l-12' id='details'> <h3>ORDER DETAILS</h3> <ul> <li id='sizeDtls'>SIZE:</li> <li id='toppingsDtls'>TOPPINGS:</li> </ul> <div class='button' id='checkout'>ADD TO ORDER</div> </div> </div> </div> </div>";
//review
HTML_ARRAY[5] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>REVIEW ORDER:</h1> <div class='center' id='review'> </div> <div class='button' id='placeOrder'>PLACE ORDER</div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='price'>TOTAL: $0</h1> <div class='row pizzaRow'> <div class='col-l-12'> <canvas id='pizzaDisplay'></canvas> </div> </div> </div> </div>";
//confirmation
HTML_ARRAY[6] = " <div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row thanks'> <div class='col-l-12 center' id='delivery'> <h1 class='center'>THANK YOU!</h1> <h1 class='center'>Your order has been placed!</h1> <h1 class='center'>You should receive an email confirmation shortly.</h1> <canvas id='pizzaDisplay'></canvas> </div> </div>";
//load animation
HTML_ARRAY[7] = " <div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-12 center' id='delivery'> <img id='loaderLogo' src='images/pizza/prebuilt-pepperoni.png'/> <h1 id='loaderText' class='center' data-text='LOADING TOPPINGS...'>LOADING TOPPINGS...</h1> </div> </div>";
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
var sm;
var med;
var lg;
var xl;
var priceDtls;
var sizeDtls;
var toppings;

var width = 0;
var height = 0;
var size = "";
var price = 0.00;
var toppingPrice = 0;
var bgSize = 0;

function displaySizeClick(evt){
    document.getElementsByClassName('fa-arrow-right')[0].style.visibility = "visible";
    if(evt.srcElement.id === "sm"){
        pizzaSizeCost = 2.00;
        bgSize = 160;
        str = 'Small 8"';
        if(!(evt.srcElement.classList.contains('selected-pizza'))){
            evt.srcElement.classList.add('selected-pizza');
            med.classList.remove('selected-pizza');
            lg.classList.remove('selected-pizza');
            xl.classList.remove('selected-pizza');     
        }

    }else if(evt.srcElement.id === "med"){
        pizzaSizeCost = 3.00;
        bgSize = 175;
        str = 'Medium 10"';
        if(!(evt.srcElement.classList.contains('selected-pizza'))){
            evt.srcElement.classList.add('selected-pizza');
            sm.classList.remove('selected-pizza');
            lg.classList.remove('selected-pizza');
            xl.classList.remove('selected-pizza');     
        }

    }else if(evt.srcElement.id === "lg"){
        pizzaSizeCost = 4.00;
        bgSize = 200;
        str = 'Large 14"';
        if(!(evt.srcElement.classList.contains('selected-pizza'))){
            evt.srcElement.classList.add('selected-pizza');
            med.classList.remove('selected-pizza');
            xl.classList.remove('selected-pizza');
            sm.classList.remove('selected-pizza');     
        }

    }else if(evt.srcElement.id === "xl"){
        pizzaSizeCost = 5.00;
        bgSize = 210;
        str = 'X-Large 20"';
        if(!(evt.srcElement.classList.contains('selected-pizza'))){
            evt.srcElement.classList.add('selected-pizza');
            med.classList.remove('selected-pizza');
            lg.classList.remove('selected-pizza');
            sm.classList.remove('selected-pizza');     
        }

    }
    sizeDtls.innerHTML = 'SIZE: '+str;
    var toppingStr = "";
    for(i = 0; i < toppingArrayDtls.length; i++){
        toppingStr += toppingArrayDtls[i]+", ";
    }
    toppings.innerHTML = "TOPPINGS: "+toppingStr.slice(0, -2);

    size = evt.srcElement.id;
    orderTotal = (pizzaTypeCost + pizzaSizeCost);
    priceDtls.innerHTML = "Total: $"+orderTotal;
    canvas.style.background = pizzaTypeUrl;
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize = bgSize.toString()+"px"; 
}
function setPizzaSize(){
    var sizeString = "";
    if(size === "sm"){
        sizeString = 'Small 8"';
    }else if(size === "med"){
        sizeString = 'Medium 10"';
    }else if(size === "lg"){
        sizeString = 'Large 14"';
    }else if(size === "xl"){
        sizeString = 'X-Large 20"';
    }
    sizeDtls.innerHTML = 'SIZE: '+sizeString;
    priceDtls.innerHTML = "Total: $"+orderTotal;
    drawPizza();
}
// Toppings Page
var toppingArray = [];
var toppingArrayDtls = [];
var checkout;
var full_l_r_top;
var reg_extra_top;

var table;
var buttonNames = ["bacon", "pepperoni", "pineapple", "mushrooms", "sausage", "olives", "ham", "spinach", "chicken", "onion"];
var buttons = [];

function buildTopping(item, index, arr){
    //Create table row and heading for button
    var row = document.createElement('tr');
    var heading = document.createElement('th');
    var p = document.createElement('p');
    p.textContent = item.charAt(0).toUpperCase() + item.substring(1);
    //Create topping button
    buttons[index] = document.createElement('input');
    buttons[index].id = item;
    buttons[index].type = 'checkbox';
    //Append button to table
    heading.appendChild(buttons[index]);
    heading.appendChild(p);
    row.appendChild(heading);
    table.appendChild(row);
    //Add event listener to button
    buttons[index].addEventListener('click', toppingHandlerClick);
    //Create table detail Regular/Extra dropdown
    var td = document.createElement('td');
    var select = document.createElement('select');
    select.setAttribute('class', 'full_l_r_top');
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
    selectA.setAttribute('class', 'reg_extra_top');
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
    selectA.addEventListener('click', changeImageClick);
}

function toCheckout(evt){
    pizzaDiv.innerHTML = HTML_ARRAY[5];
    loadReview();
}
function changeImageClick(evt){
    if(evt.target.value === "Left Half"){
        left(evt.target.id);
    }else if(evt.target.value === "Right Half"){
        right(evt.target.id);
    }else if(evt.target.value === "Full"){
        full(evt.target.id);
    }else if(evt.target.value === "Regular"){
        regular(evt.target.id);
    }else if(evt.target.value === "Extra"){
        extra(evt.target.id);
    }
    drawPizza();
    details();
}
function full(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("left", "full");
            toppingArray[i] = toppingArray[i].replace("right", "full");
            toppingArrayDtls[i] = toppingArrayDtls[i].replace("(Left)", "(Full)");
            toppingArrayDtls[i] = toppingArrayDtls[i].replace("(Rught)", "(Full)");
        }
    }
}
function left(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "left");
            toppingArray[i] = toppingArray[i].replace("right", "left");
            toppingArrayDtls[i] = toppingArrayDtls[i].replace("(Full)", "(Left)");
            toppingArrayDtls[i] = toppingArrayDtls[i].replace("(Right)", "(Left)");
        }
    }
}
function right(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("full", "right");
            toppingArray[i] = toppingArray[i].replace("left", "right");
            toppingArrayDtls[i] = toppingArrayDtls[i].replace("(Full)", "(Right)");
            toppingArrayDtls[i] = toppingArrayDtls[i].replace("(Left)", "(Right)");
        }
    }
}
function extra(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true && !toppingArray[i].includes('extra')){
            toppingArray[i] = toppingArray[i].slice(0, -5)+"-extra.png)";
            toppingArrayDtls[i] = "Extra "+toppingArrayDtls[i];
        }
    }
}
function regular(top){
    for(var i =0; i < toppingArray.length; i++){
        if(toppingArray[i].includes(top) === true){
            toppingArray[i] = toppingArray[i].replace("-extra", "");
            toppingArrayDtls[i] = toppingArrayDtls[i].replace("Extra ", "");
        }
    }
}
function toppingHandlerClick(evt){
    if(evt.target.checked === true) addTopping(evt);
    else removeTopping(evt);
}
function addTopping(evt){
    if(evt.srcElement.id === "bacon" && evt.target.checked === true){
        full_l_r_top[0].children[1].selected = true;
        reg_extra_top[0].children[1].selected = true;
        toppingArray.push("url(images/pizza/bacon-full.png)");
        toppingArrayDtls.push('Bacon (Full)');toppingPrice += 1;
    } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === true){
        full_l_r_top[1].children[1].selected = true;
        reg_extra_top[1].children[1].selected = true;
        toppingArray.push("url(images/pizza/pepperoni-full.png)");
        toppingArrayDtls.push('Pepperoni (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "chicken" && evt.target.checked === true){
        full_l_r_top[8].children[1].selected = true;
        reg_extra_top[8].children[1].selected = true;
        toppingArray.push("url(images/pizza/chicken-full.png)");
        toppingArrayDtls.push('Chicken (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "ham" && evt.target.checked === true){
        full_l_r_top[6].children[1].selected = true;
        reg_extra_top[6].children[1].selected = true;
        toppingArray.push("url(images/pizza/ham-full.png)");
        toppingArrayDtls.push('Ham (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "mushrooms" && evt.target.checked === true){
        full_l_r_top[3].children[1].selected = true;
        reg_extra_top[3].children[1].selected = true;
        toppingArray.push("url(images/pizza/mushrooms-full.png)");
        toppingArrayDtls.push('Mushrooms (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "olives" && evt.target.checked === true){
        full_l_r_top[5].children[1].selected = true;
        reg_extra_top[5].children[1].selected = true;
        toppingArray.push("url(images/pizza/olives-full.png)");
        toppingArrayDtls.push('Olives (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "onion" && evt.target.checked === true){
        full_l_r_top[9].children[1].selected = true;
        reg_extra_top[9].children[1].selected = true;
        toppingArray.push("url(images/pizza/onion-full.png)");
        toppingArrayDtls.push('Onion (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "pineapple" && evt.target.checked === true){
        full_l_r_top[2].children[1].selected = true;
        reg_extra_top[2].children[1].selected = true;
        toppingArray.push("url(images/pizza/pineapple-full.png)");
        toppingArrayDtls.push('Pineapple (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "spinach" && evt.target.checked === true){
        full_l_r_top[7].children[1].selected = true;
        reg_extra_top[7].children[1].selected = true;
        toppingArray.push("url(images/pizza/spinach-full.png)");
        toppingArrayDtls.push('Spinach (Full)');toppingPrice += 1;
    }else if(evt.srcElement.id === "sausage" && evt.target.checked === true){
        full_l_r_top[4].children[1].selected = true;
        reg_extra_top[4].children[1].selected = true;
        toppingArray.push("url(images/pizza/sausage-full.png)");
        toppingArrayDtls.push('Sausage (Full)');toppingPrice += 1;
    }
    drawPizza();
    details();
}
function removeTopping(evt){
    for(var i = toppingArray.length-1; i >= 0 ; i--){
        if(evt.srcElement.id === "bacon" && evt.target.checked === false){
            full_l_r_top[0].children[0].selected = true;
            reg_extra_top[0].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        } else if(evt.srcElement.id === "pepperoni" && evt.target.checked === false){
            full_l_r_top[1].children[0].selected = true;
            reg_extra_top[1].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "chicken" && evt.target.checked === false){
            full_l_r_top[8].children[0].selected = true;
            reg_extra_top[8].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "ham" && evt.target.checked === false){
            full_l_r_top[6].children[0].selected = true;
            reg_extra_top[6].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "mushrooms" && evt.target.checked === false){
            full_l_r_top[3].children[0].selected = true;
            reg_extra_top[3].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "olives" && evt.target.checked === false){
            full_l_r_top[5].children[0].selected = true;
            reg_extra_top[5].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "onion" && evt.target.checked === false){
            full_l_r_top[9].children[0].selected = true;
            reg_extra_top[9].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "pineapple" && evt.target.checked === false){
            full_l_r_top[2].children[0].selected = true;
            reg_extra_top[2].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "spinach" && evt.target.checked === false){
            full_l_r_top[7].children[0].selected = true;
            reg_extra_top[7].children[0].selected = true;
            if(toppingArray[i].includes(evt.srcElement.id) === true){ toppingArray.splice(i, 1);
                toppingArrayDtls.splice(i, 1);
                toppingPrice -= 1;
            }
        }else if(evt.srcElement.id === "sausage" && evt.target.checked === false){
            full_l_r_top[4].children[0].selected = true;
            reg_extra_top[4].children[0].selected = true;
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
        checkout.style.visibility = "visible"; }
    else if(toppingArray.length === 5){ 
        toppingPrice = 3; 
        document.getElementsByClassName('tooltip')[0].style.visibility = 'visible'; }
    else if(toppingArray.length < 1) { checkout.style.visibility = "hidden"; }
    else if(toppingArray.length < 5){ 
        document.getElementsByClassName('tooltip')[0].style.visibility = 'hidden';
    }
    if(toppingPrice < 0){ toppingPrice = 0; }

    priceDtls.innerHTML = "Total: $"+(orderTotal + toppingPrice).toFixed(2);
    toppings.innerHTML = "TOPPINGS: ";
    for(i = 0; i < toppingArray.length; i++){
        str += toppingArrayDtls[i]+", ";
    }
    toppings.innerHTML += str.slice(0, -2);
}
function drawPizza(){
    var str = "";
    var bgsize = "";
    for(var i =0; i < toppingArray.length; i++){
        str += toppingArray[i]+", ";
        bgsize += (bgSize - 40)+"px, ";
        if(i == toppingArray.length-1){
            str = str.slice(0, -2);
            bgsize = bgsize.slice(0, -2);
            canvas.style.background = str+", url(images/pizza/cheese-extra.png), "+pizzaTypeUrl;
            canvas.style.backgroundSize = bgsize+", "+(bgSize - 25)+"px, "+bgSize.toString()+"px";
        }
    }
    if(toppingArray.length === 0){
        canvas.style.background = "url(images/pizza/cheese-extra.png), "+pizzaTypeUrl;
        canvas.style.backgroundSize = (bgSize - 25)+"px, "+bgSize.toString()+"px";
    }if(pizzaType !== 'custom'){
        canvas.style.background = pizzaTypeUrl;
        canvas.style.backgroundSize = bgSize.toString()+"px";
    }
    canvas.style.backgroundPosition = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';
}
//Review Page
var review;

///end
function validateLocation(){
    console.log("VALIDATING");
    var str = document.getElementById('streetBox').value;
    var city = document.getElementById('cityBox').value;
    var st = document.getElementById('stateBox').value;    
    var zip = document.getElementById('zipBox').value;
    var zip2 = document.getElementById('zipBox2').value;
    if((str != "" && city != "" && st != "" && zip != "") || zip2 != ""){
        return true;
    }
    else{
        return false;
    }
}
function startOrder(){
    console.log("START ORDER");
    if(validateLocation()){
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
    }
    else{
        alert("One or more fields are empty. Please try again.");
    }

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
    sm.addEventListener('click', displaySizeClick);
    med.addEventListener('click', displaySizeClick);
    lg.addEventListener('click', displaySizeClick);
    xl.addEventListener('click', displaySizeClick);
}

function loadSauce(){
    if(pizzaType !== 'custom'){
        toCheckout();
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
            setPizzaSize();
    }
    
}

function loadToppings(){
    pizzaDiv.innerHTML = HTML_ARRAY[7];
    setTimeout(function (){
        pizzaDiv.innerHTML = HTML_ARRAY[4];
        canvas = document.getElementById('pizzaDisplay');
        ctx = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;
        priceDtls = document.getElementById('price');
        sizeDtls = document.getElementById('sizeDtls');
        toppings = document.getElementById('toppingsDtls');
        checkout = document.getElementById('checkout');
        full_l_r_top = document.getElementsByClassName('full_l_r_top');
        reg_extra_top = document.getElementsByClassName('reg_extra_top');
        table = document.getElementById('tableContainer');
        buttonNames.forEach(buildTopping);
        checkout.addEventListener('click', toCheckout);
        setPizzaSize();
    },2000);
}
function loadReview(){
    review = document.getElementById('review');
    var placeOrder = document.getElementById('placeOrder');
    placeOrder.addEventListener('click', toFinalPage);
    canvas = document.getElementById('pizzaDisplay');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    priceDtls = document.getElementById('price');
    for(var i = 0; i < toppingArrayDtls.length; i++){
        var h2 = document.createElement('h2');
        h2.textContent = toppingArrayDtls[i];
        h2.className = 'reviewDetail';
        review.appendChild(h2);
    }
    drawPizza();
    priceDtls.innerHTML = "Total: $"+(orderTotal + toppingPrice).toFixed(2);
}
function toFinalPage(evt){
    pizzaDiv.innerHTML = HTML_ARRAY[6];
    canvas = document.getElementById('pizzaDisplay');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    drawPizza();
}
function refresh(){
    var content = pizza.innerHTML;
    pizza.innerHTML= content;
}

function getOrderTotal(){
    tempTotal = 0;
    tempTotal += pizzaTypeCost;
    tempTotal += pizzaSizeCost;
    console.log("TEMP TOTAL", tempTotal);
}

function setPizzaType(type){
    toppingArrayDtls = [];
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
    setPizzaSize();
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

