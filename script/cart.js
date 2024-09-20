// function openCloseCart() {
//     let cartFullScreen = document.getElementById("cart_small");
//     let cardContent = document.getElementById("content_cart");
//     let restaurantLogo = document.getElementById("logo_restaurant");
//     showMealsInCart();
//     if(cartFullScreen.style.display == "flex") {
//         cartFullScreen.style.display = "none";
//         cartFullScreen.style.backdropFilter = "none";
//         restaurantLogo.style.opacity = 1;
//     } else {
//         cartFullScreen.style.display = "flex";
//         cartFullScreen.style.backdropFilter = "blur(5px)";
//         restaurantLogo.style.opacity = 0;
//     }
// }

function closeCart() {
    document.getElementById("cart_small").style.display = "none";
    document.getElementById("cart_small").style.backdropFilter = "0px";
}

function saveMealInfo(e, plusMinus1) {
    let clickedButtonId = e.target.id;
    let mealId = clickedButtonId.slice(9);
    let continent = mealId.charAt(4);
    let mealType = mealId.slice(5, -1);
    let mealNo = mealId.charAt(mealId.length - 1);
    let newQty = menu[continent][mealType][mealNo].quantity + plusMinus1
    menu[continent][mealType][mealNo].quantity = newQty;
    document.getElementById(`count_${mealId}`).innerHTML = `${newQty}`;

    if (menu[continent][mealType][mealNo].quantity > 0) {
        document.getElementById(`count_${mealId}`).style.display = "flex";

    }
    saveMealForCart(continent, mealType, mealNo, newQty)
    // showCountInMeal(newQty, mealId);
    showCartContent()
}

function showCountInMeal(newQty, mealId) {
    if (newQty == 0) {
        document.getElementById(`count_${mealId}`).style.display = "none";
    } 
}

let mealsWithQuantity = []

function saveMealForCart(continent, mealType, mealNo, newQty) {
    let indexOfMealInCart = mealsWithQuantity.indexOf(menu[continent][mealType][mealNo])
    console.log(indexOfMealInCart)
    if (indexOfMealInCart !== -1) {
        mealsWithQuantity[indexOfMealInCart].quantity = newQty;
    } else {
        mealsWithQuantity.push(menu[continent][mealType][mealNo])
    }
}

function showCartContent() {
    if (mealsWithQuantity.length == 0) {
        document.getElementById("menues_in_cart").innerHTML = `
         <div id="cart_empty" class="cart_empty">
            Dein Warenkorb ist leer. Füge leckere Gerichte aus der Karte hinzu.
        </div>`
    } else {
        showMealsInCart();
    }
}

function showMealsInCart() {
    document.getElementById("menues_in_cart").innerHTML = "";
    console.log(mealsWithQuantity)
    for (let i = 0; i < mealsWithQuantity.length; i++) {
        let price = (mealsWithQuantity[i].quantity * mealsWithQuantity[i].price).toFixed(2).replace(".", ",");
        let innerHTML = `
        <div class="menu_in_cart" id="cart_${mealsWithQuantity[i].id}">
            <div class="menu_cart_title">${mealsWithQuantity[i].title}</div>
            <div class="add_remove_line">
                <div id="decrease_${mealsWithQuantity[i].id}" class="meal_add_remove_inside_cart" onclick="addRemoveOne(event, -1)">
                    -
                </div>
                <span class="count">${mealsWithQuantity[i].quantity}</span>
                <div id="increase_${mealsWithQuantity[i].id}" class="meal_add_remove_inside_cart" onclick="addRemoveOne(event, 1)">
                    +
                </div>
                <div class="price">${price} €</div>
                <div class="meal_add_remove_inside_cart delete_from_cart">
                    <img id="deleteId_${mealsWithQuantity[i].id}" onclick="deleteFromCart(event)" class="basket" src="./assets/icon/basket.png" alt="Mülleimer">
                </div>
                </div>
        </div>`
        document.getElementById("menues_in_cart").innerHTML += innerHTML;
    }
}

function addRemoveOne(e, plusMinus1) {
    let mealId = e.target.id.slice(9);
    let continent = mealId.charAt(4);
    let mealType = mealId.slice(5, -1);
    let mealNo = mealId.charAt(mealId.length - 1);
    let newQty = menu[continent][mealType][mealNo].quantity + plusMinus1
    menu[continent][mealType][mealNo].quantity = newQty;
    let continentToLoad = checkCurrentContinent();
    loadContinentMenu(continentToLoad)
    qtyNullRemoveFromCart(newQty, continent, mealType, mealNo)
    showCartContent()
}

function qtyNullRemoveFromCart(newQty, continent, mealType, mealNo) {
    if (newQty == 0) {
        let indexToChangeQty =  mealsWithQuantity.indexOf(menu[continent][mealType][mealNo]);
        console.log(indexToChangeQty)
        mealsWithQuantity.splice(indexToChangeQty, 1)
    }
}

function showQtyInMeal() {
    let indexToAddRemoveOne = mealsWithQuantity.indexOf(menu[continent][mealType][mealNo]);
    if (newQty == 0) {
        mealsWithQuantity.splice(indexToAddRemoveOne, 1)
    } else {
        mealsWithQuantity[indexToAddRemoveOne].quantity = menu[continent][mealType][mealNo].quantity;
        document.getElementById(`count_${mealId}`).innerHTML = `${newQty}`;
    }
}

function checkCurrentContinent() {
    let currentContinent = document.getElementById("continent_title").innerHTML

    switch (currentContinent) {
        case 'alle':
            return 'alle';
        case 'Europa':
            return 0;
        case 'Asien':
            return 1;
        case 'Afrika':
            return 2;
        case 'Nordamerika':
            return 3;
        case 'Südamerika':
            return 4;
        case 'Ozeanien':
            return 5;
    }
}

function loadContinentMenu(continentToLoad) {
    if (continentToLoad == "alle") {
        filterContinentAll()
    } else {
        filterContinentSingle(continentToLoad)
    }
}

function deleteFromCart(e) {
    let mealId = e.target.id.slice(9);
    let continent = mealId.charAt(4);
    let mealType = mealId.slice(5, -1);
    let mealNo = mealId.charAt(mealId.length - 1);
    let indexToDeleteFromCart =  mealsWithQuantity.indexOf(menu[continent][mealType][mealNo]);
    console.log(indexToDeleteFromCart)
    mealsWithQuantity.splice(indexToDeleteFromCart, 1)
    menu[continent][mealType][mealNo].quantity = 0;

    let continentToLoad = checkCurrentContinent();
    loadContinentMenu(continentToLoad)
    showCartContent()
}