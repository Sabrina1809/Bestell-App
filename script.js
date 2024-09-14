let cartButton = document.getElementById("cart_icon_footer");
let cartBackground = document.getElementById("cart_background");
let restaurantLogo = document.getElementById("logo_restaurant");
let continentSelectionBackground = document.getElementById("choose_continent_background");
let continentSelectionOpened = document.getElementById("choose_continent_menu_opened")
let minimumSum = 17.00;

function setDetails() {
    if (screen.width <= 1000) {
        cartBackground.style.display = "none"
    } 
    document.getElementById("continent_title").innerHTML = "alle";
    document.getElementById("deliverytime").innerHTML = "ca. 20 min";
    document.getElementById("total_sum").innerHTML = (0.00).toFixed(2) + " €";
    document.getElementById("current_sum").innerHTML = (0.00).toFixed(2) + " €";
    document.getElementById("delivery_sum").innerHTML = (0.00).toFixed(2) + " €";
    document.getElementById("minimum_sum").innerHTML = "min. " + (minimumSum).toFixed(2) + " €";
    document.getElementById("count_in_cart_main").innerHTML = 0;
    // document.getElementById("count_in_cart_header_cart").innerHTML = 0;
    continentSelectionBackground.style.top = "-100%";
    continentSelectionBackground.style.opacity = 0;

    setMenues();
}

function setMenues() {
    document.getElementById("continent_title").innerHTML = "alle";
    continentSelectionBackground.style.top = "-100%";
    continentSelectionBackground.style.width = "0%";
    continentSelectionBackground.style.opacity = 0;
    
    setStarters();
    setMain();
    setDessert();
    setDrinks();
    scrollToMenu();
}

function openCloseCart(e) {
    e = e;
    if (cartBackground.style.display === "flex") {
        
        cartBackground.style.display = "none";
        cartBackground.style.width = "0%";
        cartBackground.style.opacity = 0;
        restaurantLogo.style.opacity = 1;
        window.onclick = function(e) {
            console.log(e)
            if(e.target.id == "card_background") {
                cartBackground.style.top = "-100%";
                cartBackground.style.width = "0%";
                cartBackground.style.opacity = 0;
            }
        }
    } else {
        continentSelectionBackground.style.top = "-100%";
        cartBackground.style.display = "flex";
        cartBackground.style.width = "100%";
        cartBackground.style.opacity = 1;
        restaurantLogo.style.opacity = 0;

    }
}

window.onresize = function() {
    showHideCart();
}

function showHideCart() {
    if (screen.width <= 1000) {
        cartBackground.style.display = "none";
    } 
    if (screen.width > 1000) {
        cartBackground.style.display = "flex"
    }
}


function openCloseContinent(e) {
    e = e;
    let continentClosed = document.getElementById("choose_continent_menu_closed");
    let posContinentClosed = continentClosed.getBoundingClientRect().y;
    posContinentClosed = posContinentClosed  + 20 + 5 + "px";
    if (continentSelectionBackground.style.top == "-100%") {
        continentSelectionBackground.style.top = "0px";
        continentSelectionBackground.style.width = "100%";
        continentSelectionBackground.style.opacity = 1;
        continentSelectionOpened.style.top = posContinentClosed;
        window.onclick = function(e) {
            if(e.target.id == "choose_continent_background") {
                continentSelectionBackground.style.top = "-100%";
                continentSelectionBackground.style.width = "0%";
                continentSelectionBackground.style.opacity = 0;
            }
        }
    } else {
        continentSelectionBackground.style.top = "-100%";
        continentSelectionBackground.style.opacity = 0;
    }    
}


function filterContinent(i) {
    let index = i;
    document.getElementById("continent_title").innerHTML = menu[i].name
    continentSelectionBackground.style.top = "-100%";
    continentSelectionBackground.style.width = "0%";
    continentSelectionBackground.style.opacity = 0;

    continentStarters(index);
    continentMain(index);
    continentDessert(index);
    continentDrinks(index);
    scrollToMenu();
}

function scrollToMenu() {
    const chooseMealTypeElement = document.getElementById("choose_meal_type");
    if (chooseMealTypeElement) {
        let menuPosition = chooseMealTypeElement.getBoundingClientRect();
        let scrollToMenu = menuPosition.top + menuPosition.height;

        window.scrollTo({ top: scrollToMenu});
    }
    document.getElementById("choose_meal_type_option_starter").style.textShadow = "0 0 1px var(--bestellapp-orange)";
}

function highlightMenuType(id) {
    document.getElementById("choose_meal_type_option_starter").style.textShadow = "none";
    document.getElementById("choose_meal_type_option_main").style.textShadow = "none";
    document.getElementById("choose_meal_type_option_dessert").style.textShadow = "none";
    document.getElementById("choose_meal_type_option_drinks").style.textShadow = "none";

    document.getElementById(id).style.textShadow = "0 0 1px var(--bestellapp-orange)";
}

window.ontouchmove = function() {
    highlightMenuTypeSmartphone()
}

let ids = [
    "choose_meal_type_option_starter",
    "choose_meal_type_option_main",
    "choose_meal_type_option_dessert",
    "choose_meal_type_option_drinks"
]

function highlightMenuTypeSmartphone() {
   let windowHeight = window.innerHeight;
   let sections = [
    document.getElementById("starter").getBoundingClientRect(),
    document.getElementById("main").getBoundingClientRect(),
    document.getElementById("dessert").getBoundingClientRect(),
    document.getElementById("drinks").getBoundingClientRect()
    ]

   for (let i = 0; i < sections.length; i++) {
    if (sections[i].top <= windowHeight/2) {
        for (let j = 0; j < ids.length; j++) {
            document.getElementById(ids[j]).style.textShadow = "none";
        }
        document.getElementById(ids[i]).style.textShadow = "0 0 1px var(--bestellapp-orange)";
    }
   }
}

function chooseDeliveryOrPickup() {
    let switchDeliveryPickup = document.getElementById("deliveryOrPickup");

    if (switchDeliveryPickup.checked) {
        document.getElementById("deliverytime").innerHTML = "ca. 45 min"
        document.getElementById("delivery_sum").innerHTML = (5.90).toFixed(2) + " €"
    } else {
         document.getElementById("deliverytime").innerHTML = "ca. 20 min"
         document.getElementById("delivery_sum").innerHTML = (0.00).toFixed(2) + " €"
    }
    calculateSum()
}

function saveMealInfo(continent, typeOfMeal, mealNo) {
    let thisContinent = Number(continent);
    let thisTypeOfMeal = typeOfMeal;
    let thisMealNo = Number(mealNo);
    let thisMeal = menu[thisContinent][thisTypeOfMeal][thisMealNo];
    let thisId = `menu${thisContinent}${thisTypeOfMeal}${thisMealNo}`;

    let mealDetailsInCart = {
        title: `${thisMeal.title}`,
        price: `${Number(thisMeal.price).toFixed(2)}`,
        quantity: `${Number(thisMeal.quantity) + 1}`,
        id: `${thisId}`,
        idCountInCart: `count${thisId}`,
        meal: `${thisMeal}`
    }
    let idCountCartMainPage = mealDetailsInCart.idCountInCart;
    console.log(idCountCartMainPage);

    document.getElementById("min_sum_text").innerHTML = "";

    isMenuAlreadyInCart(thisId, thisContinent,thisTypeOfMeal, thisMealNo, mealDetailsInCart);
    setCountToCart();
    checkIfCartIsEmpty();
    calculateSum();
    showCountMenuMainPage(mealDetailsInCart, thisMeal, thisId)
}

function showCountMenuMainPage(mealDetailsInCart, thisMeal, thisId) {
 
    document.getElementById(mealDetailsInCart.idCountInCart).innerHTML = thisMeal.quantity;
    console.log(mealDetailsInCart.idCountInCart)
    if (mealDetailsInCart.meal.quantity = 0) {
        let countElementMenuMainPage = document.getElementById(mealDetailsInCart.idCountInCart)
        console.log(countElementMenuMainPage)
        document.getElementById(mealDetailsInCart.idCountInCart).style.display = "none";
    } else {
        document.getElementById(mealDetailsInCart.idCountInCart).style.display = "flex";
    }
}

function isMenuAlreadyInCart(thisId, thisContinent,thisTypeOfMeal, thisMealNo, mealDetailsInCart) {
    let alreadyInCartIndex = menuesInCart.findIndex(menu => menu.id === thisId);

    if (alreadyInCartIndex == -1) {
        menuesInCart.push(mealDetailsInCart);
        newToCard(mealDetailsInCart);   
        menu[thisContinent][thisTypeOfMeal][thisMealNo].quantity =  mealDetailsInCart.quantity;
    } else {
        menu[thisContinent][thisTypeOfMeal][thisMealNo].quantity =  mealDetailsInCart.quantity;
        menuesInCart[alreadyInCartIndex].quantity = mealDetailsInCart.quantity;
        menuesInCart[alreadyInCartIndex].price = (mealDetailsInCart.price * mealDetailsInCart.quantity).toFixed(2);
        addToCart(menuesInCart);
    }
}

function checkIfCartIsEmpty() {
    if (menuesInCart.length > 0) {
        document.getElementById("cart_empty").style.display = "none";
    } else {
        document.getElementById("cart_empty").style.display = "block";
    }
}

let menuesInCart = []

function changeQtyInsideCart(e, plusMinus1) {
    plusMinus1 = plusMinus1
    let clickedMenuTitle = e.target.parentElement.parentElement.childNodes[1].innerHTML;
    document.getElementById("min_sum_text").innerHTML = "";
    if (plusMinus1 == 0) {
        console.log("ist Null, kommt weg")
        let alreadyInCartIndex = menuesInCart.findIndex(menu => menu.title === clickedMenuTitle);
        menuesInCart.splice(alreadyInCartIndex, 1);
        updateMenuInArray(clickedMenuTitle, plusMinus1)
    } else {
        
        updateMenuInCart(clickedMenuTitle, plusMinus1);    
        checkIfCartIsEmpty();
    }
    calculateSum();
}

function updateMenuInCart(clickedMenuTitle, plusMinus1) {
    let alreadyInCartIndex = menuesInCart.findIndex(menu => menu.title === clickedMenuTitle);
    let oldQuantity = Number(menuesInCart[alreadyInCartIndex].quantity);
    menuesInCart[alreadyInCartIndex].quantity = Number(menuesInCart[alreadyInCartIndex].quantity) + plusMinus1;
    menuesInCart[alreadyInCartIndex].price = (Number(menuesInCart[alreadyInCartIndex].price / oldQuantity) * (Number(menuesInCart[alreadyInCartIndex].quantity))).toFixed(2);
    plusMinus1 = plusMinus1;
    if (menuesInCart[alreadyInCartIndex].quantity == 0) {
        menuesInCart.splice(alreadyInCartIndex, 1);
    } 
   
    updateMenuInArray(clickedMenuTitle, plusMinus1)
    addToCart(menuesInCart)
    setCountToCart();
    calculateSum();

}

function deleteFromCart(e) {
    let titleToDelete = e.target.parentElement.parentElement.previousElementSibling.innerHTML;
    let indexToDelete = menuesInCart.findIndex(menu => menu.title === titleToDelete);
    menuesInCart.splice(indexToDelete, 1);
    updateMenuInArray(titleToDelete, 0);
    addToCart(menuesInCart)
    setCountToCart();
    checkIfCartIsEmpty();
    calculateSum();
}

function updateMenuInArray(clickedMenuTitle, plusMinus1) {
    clickedMenuTitle = clickedMenuTitle
    console.log(clickedMenuTitle)
    let typeOfMeal = checkMealType(clickedMenuTitle);
    let numberOfMeal = checkNumberOfMeal(clickedMenuTitle, typeOfMeal);
    let continent = checkContinent(clickedMenuTitle, typeOfMeal, numberOfMeal);

    if (plusMinus1 == 0) {
        menu[continent][typeOfMeal][numberOfMeal].quantity = 0
    } else {
        menu[continent][typeOfMeal][numberOfMeal].quantity = Number(menu[continent][typeOfMeal][numberOfMeal].quantity) + plusMinus1
    }
}

function checkMealType(clickedMenuTitle) {
    let typeOfMeal;
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].starter.length; j++) {
           if (menu[i].starter[j].title == clickedMenuTitle) {
            typeOfMeal = 'starter';
           } 
        }
    }
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].main.length; j++) {
           if (menu[i].main[j].title == clickedMenuTitle) {
            typeOfMeal = 'main';
           }
        }
    }
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].dessert.length; j++) {
           if (menu[i].dessert[j].title == clickedMenuTitle) {
            typeOfMeal = 'dessert';
           }
        }
    }
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].drinks.length; j++) {
           if (menu[i].drinks[j].title == clickedMenuTitle) {
            typeOfMeal = 'drinks';
           }
        }
    }
    return typeOfMeal;
}

function checkNumberOfMeal(clickedMenuTitle, typeOfMeal) {
    let mealNumber;
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i][typeOfMeal].length; j++) {
           if (menu[i][typeOfMeal][j].title == clickedMenuTitle) {
            mealNumber = j;
           } 
        }
    }
    return mealNumber
}

function checkContinent(clickedMenuTitle, typeOfMeal, numberOfMeal) {
    let mealNumber;
    for (let i = 0; i < menu.length; i++) {
        if (menu[i][typeOfMeal][numberOfMeal].title == clickedMenuTitle) {
        mealNumber = i;
        } 
    }
    return mealNumber
}
    
function setCountToCart() {
    let totalQty = menuesInCart.reduce(checkTotalQty, 0); 
    document.getElementById("count_in_cart_main").innerHTML = Number(totalQty);
    // document.getElementById("count_in_cart_header_cart").innerHTML = Number(totalQty);
}

function checkTotalQty(subtotal, menuesInCart) {
    return subtotal + Number(menuesInCart.quantity);
}

function calculateSum() {
    let cutrrentSum = menuesInCart.reduce(checkSubTotal, 0); 
    let deliveryPrice = document.getElementById("delivery_sum").innerHTML;
    let deliveryPriceToCalc = Number(deliveryPrice.slice(0, -1));
    let totalSum = cutrrentSum + deliveryPriceToCalc;
    document.getElementById("total_sum").innerHTML = Number(totalSum).toFixed(2) + " €";
    document.getElementById("current_sum").innerHTML = Number(cutrrentSum).toFixed(2) + " €";
}

function checkSubTotal(subtotal, menuesInCart) {
    return subtotal + Number(menuesInCart.price);
}

function checkMinSum(minimumSum) {
    let sumToCheck = document.getElementById("current_sum").innerHTML;
    sumToCheck = Number(sumToCheck.slice(0, -1)).toFixed(2);
    let differenz = minimumSum - sumToCheck;
    differenz = differenz.toFixed(2)
    if (differenz > 0) {
        document.getElementById("min_sum_text").innerHTML = 
        `(${differenz} € zu wenig)`
    } else {
        document.getElementById("menues_in_cart").innerHTML = "";
        document.getElementById("cart_complete").innerHTML = "";
        document.getElementById("cart_complete").innerHTML = ` 
        <div id="thx_for_order">Vielen Dank für deine Bestellung. 
        Wir bereiten alles frisch zu und wünschen dir schon jetzt einen <br>GUTEN APPETIT.<br>
        Dein Taste The World - Team
        </div>`;

        document.getElementById("cart_icon_footer").innerHTML = `
        <div onclick="backToStart()" id="buttonBackToStart">
            <img id="home_icon" src="./assets/icon/icons8-zuhause-50.png" alt="">
        </div>`

        showBackToStartButton()
    }
}

function backToStart() {
    scrollToTop();
    location.reload();
}

function scrollToTop() {
    console.log(document.getElementById("body").getBoundingClientRect())
        let topPosition = document.getElementById("top_position").getBoundingClientRect().top;
        window.scrollY = 0;
}



function showBackToStartButton() {
    let windowWidth = window.innerWidth

    if(window.innerWidth >= 1000) {
        document.getElementById("cart_icon_back_to_start").style.display = "flex";
        document.getElementById("content_small").style.filter = 'blur(5px)';
        document.getElementById("content_small").style.pointerEvents = 'none';
    }
}

