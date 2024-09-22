let mealsWithQuantity = []
let cartWithBackground = document.getElementById("cart_small");
let restaurantLogo = document.getElementById("logo_restaurant");

window.onresize = function() {
    if (window.innerWidth <= 1000) {
        cartIcon.style.display = "flex";    
    } else {
        cartIcon.style.display = "none";    
    }
}

function openCloseCart() {
    if (cartWithBackground.style.display == "flex") {
        cartWithBackground.style.display = "none";
        restaurantLogo.style.display = "flex";
    } else {
        cartWithBackground.style.display = "flex";
        restaurantLogo.style.display = "none";

        window.onclick = function(e) {
            if (e.target.id === "cart_small") {
                cartWithBackground.style.display = "none";
                restaurantLogo.style.display = "flex";
            }
        }
    }
}

function saveMealInfo(e, plusMinus1) {
    let mealId = e.target.id.slice(9);
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
    showCartContent()
    document.getElementById("min_sum_text").innerHTML = "";
}

function showCountInMeal(newQty, mealId) {
    if (newQty == 0) {
        document.getElementById(`count_${mealId}`).style.display = "none";
    } 
}

function saveMealForCart(continent, mealType, mealNo, newQty) {
    let indexOfMealInCart = mealsWithQuantity.indexOf(menu[continent][mealType][mealNo])
    if (indexOfMealInCart !== -1) {
        mealsWithQuantity[indexOfMealInCart].quantity = newQty;
    } else {
        mealsWithQuantity.push(menu[continent][mealType][mealNo])
    }
    setCountToBasket()
}

function showCartContent() {
    if (mealsWithQuantity.length == 0) {
        document.getElementById("menues_in_cart").innerHTML = `
         <div id="cart_empty" class="cart_empty">
            Dein Warenkorb ist leer. Füge leckere Gerichte aus der Karte hinzu.
        </div>`
    } else {
        showMealsInCart();
        calcOrderAndTotalSum();
    }
}

function showMealsInCart() {
    document.getElementById("menues_in_cart").innerHTML = "";
    for (let i = 0; i < mealsWithQuantity.length; i++) {
        let price = (mealsWithQuantity[i].quantity * mealsWithQuantity[i].price).toFixed(2).replace(".", ",");
        showMealsInCartTemplate(i, price)
    }
}

function showMealsInCartTemplate(i, price) {
    document.getElementById("menues_in_cart").innerHTML += `
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
    setCountToBasket()
}

function qtyNullRemoveFromCart(newQty, continent, mealType, mealNo) {
    if (newQty == 0) {
        let indexToChangeQty =  mealsWithQuantity.indexOf(menu[continent][mealType][mealNo]);
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
    mealsWithQuantity.splice(indexToDeleteFromCart, 1)
    menu[continent][mealType][mealNo].quantity = 0;

    let continentToLoad = checkCurrentContinent();
    loadContinentMenu(continentToLoad)
    showCartContent()
    setCountToBasket()
    calcOrderAndTotalSum()
    document.getElementById("min_sum_text").innerHTML = "";
}

function setCountToBasket() {
    let sum = 0;
    for (let i = 0; i < mealsWithQuantity.length; i++) {
        sum += mealsWithQuantity[i].quantity
    }
    document.getElementById("count_in_cart").innerHTML = `${sum}`
}

function calcDeliveryPrice(e) {
    let delivery = 5.90;
    let pickup = 0.00;
    if (e.target.checked == true) {
        document.getElementById("delivery_sum").innerHTML = `${delivery.toFixed(2).replace(".", ",")} €`
        document.getElementById("deliverytime").innerHTML = `ca. 45 min`
    } else {
        document.getElementById("delivery_sum").innerHTML = `${pickup.toFixed(2).replace(".", ",")} €`
        document.getElementById("deliverytime").innerHTML = `ca. 20 min`
    }
    calcOrderAndTotalSum()
}

function calcOrderAndTotalSum() {
    let orderSum = 0;
    for (let i = 0; i < mealsWithQuantity.length; i++) {
        orderSum += (mealsWithQuantity[i].quantity * mealsWithQuantity[i].price)
    }
    document.getElementById("current_sum").innerHTML = `${orderSum.toFixed(2).replace(".", ",")} €`;
    let deliveryPrice = document.getElementById("delivery_sum").innerHTML;
    deliveryPrice = Number(deliveryPrice.slice(0, -2).replace(",", "."))
    let totalSum = Number(orderSum + deliveryPrice).toFixed(2).replace(".", ",");
    document.getElementById("total_sum").innerHTML = `${totalSum} €`
}

function checkOrderSum() {
    let minOrderSum  = 17.00;
    let currentOrderSum = document.getElementById("current_sum").innerHTML
    currentOrderSum = Number(currentOrderSum.slice(0, -2).replace(",", "."));
    let diff = minOrderSum - currentOrderSum;
    if (diff > 0) {
        document.getElementById("min_sum_text").innerHTML = `(${diff.toFixed(2).replace(".", ",")} € zu wenig)`
    } else {
        sendOrder()
    }
}

function sendOrder() {
    document.getElementById("content_cart").innerHTML = `
    <div id="order_sent">
        Vielen Dank für deine Bestellung.<br>Wir bereiten alles frisch zu und wünschen dir schon jetzt einen <br> GUTEN APPETIT! <br> Dein Tast The World-Team
    </div>`
    document.getElementById("cart_icon_with_count").style.display = "none";
    document.getElementById("back_to_start_icon").style.display = "flex";
    document.getElementById("content_main_page").style.filter = "blur(5px)";
    document.getElementById("content_main_page").style.pointerEvents = "none";
}