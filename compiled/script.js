var HTML_ARRAY = [];
HTML_ARRAY[0] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>DELIVERY</h1> <div id='address-form'> <input type='text' placeholder='Street'> <br> <input type='text' placeholder='Apt, Suite (optional)'> <br> <input type='text' placeholder='City'> <br> <input type='text' id='stateBox'placeholder='State'> <input type='text' id='zipBox' placeholder='Zip Code'> </div> <div class='button' onclick='startOrder()'>FIND STORE</div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center'>CARRYOUT</h1> <input type='text' id='zipBox' placeholder='Zip Code, City, or State'> <div class='button' onclick='startOrder()'>FIND STORE</div> </div> </div>";
HTML_ARRAY[1] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>PICK A PIZZA TO CUSTOMIZE:</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`custom`, this)' id='pizza-custom' class='pizza-option'>CUSTOM</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`cheese`, this)' id='pizza-cheese' class='pizza-option'>CHEESE</h2></div> </div> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`pepperoni`, this)' id='pizza-pepperoni' class='pizza-option'>PEPPERONI</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`meat`, this)' id='pizza-meat' class='pizza-option'>MEAT-MANIA</h2></div> </div> <div class='row'> <div class='col-l-6 center'><h2 onclick='setPizzaType(`hawaiian`, this)' id='pizza-hawaiian'class='pizza-option'>HAWAIIAN</h2></div> <div class='col-l-6 center'><h2 onclick='setPizzaType(`alfredo`, this)' id='pizza-alfredo' class='pizza-option'>ALFREDO</h2></div> </div> <div class='row arrows'> <!-- <div class='col-l-6' onclick='prevPage()'><i class='fa fa-arrow-left'></i></div> --> <div class='col-l-12' onclick='loadSizes()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='total'>TOTAL: $0</h1> <div class='row'> <div class='col-l-12' id='pizza-display'></div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";
HTML_ARRAY[2] = "<div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>HOW HUNGRY ARE YOU?</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSize(`s`, this)' id='size-small' class='pizza-option'>SMALL 8in</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSize(`m`, this)' id='size-medium' class='pizza-option'>MEDIUM 10in</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSize(`l`, this)' id='size-large' class='pizza-option'>LARGE 14in</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSize(`xl`, this)' id='size-xlarge' class='pizza-option'>X-LARGE 20in</h2></div> <div class='col-l-3'></div> </div> <div class='row arrows'> <!-- <div class='col-l-6' onclick='startOrder()'><i class='fa fa-arrow-left'></i></div> --> <div class='col-l-12' onclick='loadSauce()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='total'>TOTAL: $0</h1> <div class='row'> <div class='col-l-12' id='pizza-display'></div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";

HTML_ARRAY[3] = " <div class='row fit'> <img src='images/slice-logo3.png' class='brand-logo'/> </div> <div class='row fit'> <div class='col-l-6 center' id='delivery'> <h1 class='center'>SAUCE IT UP:</h1> <div class='m-auto' id='pizzaOptionsBox'> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`marinara`, this)' id='sauce-marinara' class='pizza-option'>MARINARA</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`bbq`, this)' id='sauce-bbq' class='pizza-option'>BBQ</h2></div> <div class='col-l-3'></div> </div> <div class='row'> <div class='col-l-3'></div> <div class='col-l-6 center'><h2 onclick='setPizzaSauce(`alfredo`, this)' id='sauce-alfredo' class='pizza-option'>ALFREDO</h2></div> <div class='col-l-3'></div> </div> <div class='row arrows'> <div class='col-l-12' onclick='loadToppings()'><i class='fa fa-arrow-right'></i></div> </div> </div> </div> <div class='col-l-6 center' id='carryout'> <h1 class='center' id='total'>TOTAL: $0</h1> <div class='row'> <div class='col-l-12' id='pizza-display'></div> </div> <div class='row'> <div class='col-l-12 prebuilt-text'><p id='pizza-description'></p></div> </div> </div> </div>";

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
    totalText  = document.getElementById('total');
    totalText.innerHTML = `TOTAL: $${orderTotal}`;
    pizzaDisplay = document.getElementById('pizza-display');
    pizzaDisplay.style.backgroundImage = pizzaTypeUrl;
    smallBtn = document.getElementById('size-small');
    medBtn = document.getElementById('size-medium');
    largeBtn = document.getElementById('size-large');;
    xlargeBtn = document.getElementById('size-xlarge');
}

function loadSauce(){
    orderTotal = tempTotal;
    pizzaDiv.innerHTML = HTML_ARRAY[3];
    totalText  = document.getElementById('total');
    totalText.innerHTML = `TOTAL: $${orderTotal}`;
    pizzaDisplay = document.getElementById('pizza-display');
    pizzaDisplay.style.backgroundImage = pizzaTypeUrl;
    marinaraBtn = document.getElementById('sauce-marinara');
    bbqBtn = document.getElementById('sauce-bbq');
    alfredoBtn = document.getElementById('sauce-alfredo');
}

function loadToppings(){
    orderTotal = tempTotal;
    pizzaDiv.innerHTML = HTML_ARRAY[4];
    totalText  = document.getElementById('total');
    totalText.innerHTML = `TOTAL: $${orderTotal}`;
    pizzaDisplay = document.getElementById('pizza-display');
    pizzaDisplay.style.backgroundImage = pizzaTypeUrl;
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

function setPizzaSize(size){
    if(size == "s"){
        pizzaSize = size;
        resetPizzaSizeBtns(pizzaSize);
        if(smallBtn.classList.contains('selected-pizza')){
            console.log("CONTAINS DONT READ")
        }
        else{
            pizzaSizeCost = -2;
            updateTotal();
            console.log("NOT CLICKED YET");
            smallBtn.classList.add('selected-pizza');
        }
    }
    if(size == "m"){
        pizzaSize = size;
        resetPizzaSizeBtns(pizzaSize);
        if(medBtn.classList.contains('selected-pizza')){
            console.log("CONTAINS DONT READ")
        }
        else{
            pizzaSizeCost = 0;
            updateTotal();
            console.log("NOT CLICKED YET");
            medBtn.classList.add('selected-pizza');
        }

    }
    if(size == "l"){
        pizzaSize = size;
        resetPizzaSizeBtns(pizzaSize);
        if(largeBtn.classList.contains('selected-pizza')){
            console.log("CONTAINS DONT READ")
        }
        else{
            pizzaSizeCost = 3;
            updateTotal();
            console.log("NOT CLICKED YET");
            largeBtn.classList.add('selected-pizza');
        }

    }
    if(size == "xl"){
        pizzaSize = size;
        resetPizzaSizeBtns(pizzaSize);
        if(xlargeBtn.classList.contains('selected-pizza')){
            console.log("CONTAINS DONT READ")
        }
        else{
            pizzaSizeCost = 5;
            console.log(orderTotal);
            updateTotal();
            console.log("NOT CLICKED YET");
            xlargeBtn.classList.add('selected-pizza');
        }
    }
    console.log(pizzaSize);
}

function resetPizzaSizeBtns(size){
    if(size == "s"){
        medBtn.classList.remove('selected-pizza');
        largeBtn.classList.remove('selected-pizza');
        xlargeBtn.classList.remove('selected-pizza');
        updateTotal();


    }
    if(size == "m"){
        smallBtn.classList.remove('selected-pizza');
        largeBtn.classList.remove('selected-pizza');
        xlargeBtn.classList.remove('selected-pizza');
        updateTotal();


    }
    if(size == "l"){
        smallBtn.classList.remove('selected-pizza');
        medBtn.classList.remove('selected-pizza');
        xlargeBtn.classList.remove('selected-pizza');
        updateTotal();

    }
    if(size == "xl"){
        smallBtn.classList.remove('selected-pizza');
        medBtn.classList.remove('selected-pizza');
        largeBtn.classList.remove('selected-pizza');
        updateTotal();
    }
}

function setPizzaSauce(sauce){
    if(sauce == "marinara"){
        pizzaSauce = sauce;
        resetPizzaSauceBtns(pizzaSauce);
        marinaraBtn.classList.add('selected-pizza');  
        pizzaTypeUrl = "url(images/pizza/sauce-marinara.png)";
        pizzaDisplay.style.backgroundImage = pizzaTypeUrl;    
    }
    if(sauce == "bbq"){
        pizzaSauce = sauce;
        resetPizzaSauceBtns(pizzaSauce);
        bbqBtn.classList.add('selected-pizza');  
        pizzaTypeUrl = "url(images/pizza/sauce-bbq.png)";
        pizzaDisplay.style.backgroundImage = pizzaTypeUrl;    
    }
    if(sauce == "alfredo"){
        pizzaSauce = sauce;
        resetPizzaSauceBtns(pizzaSauce);
        alfredoBtn.classList.add('selected-pizza');    
        pizzaTypeUrl = "url(images/pizza/sauce-alfredo.png)";
        pizzaDisplay.style.backgroundImage = pizzaTypeUrl;  
    }
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

