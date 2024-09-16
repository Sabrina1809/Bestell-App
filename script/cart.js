function openCloseCart() {
    let cartFullScreen = document.getElementById("cart_full_screen");
    if(cartFullScreen.style.display == "flex") {
        cartFullScreen.style.display = "none";
    } else {
        cartFullScreen.style.display = "flex";
    }
}

let mealsInCart = [];

function saveMealInfo(e, plusMinus1) {
    e=e
    let clickedButtonId = e.target.id;
    let mealId = clickedButtonId.slice(9);
    let continent = mealId.charAt(4);
    let mealType = mealId.slice(5, -1);
    let mealNo = mealId.charAt(mealId.length - 1);
    let newQty = menu[continent][mealType][mealNo].quantity + plusMinus1
    menu[continent][mealType][mealNo].quantity = newQty;

    if (newQty == 0) {
        deleteFromCart(e)
    } else {
        showCountInMeal(newQty, mealId)
        saveMealsForCart(continent, mealType, mealNo, plusMinus1);
        showMealsInCart(continent, mealType, mealNo)
    }
}

function showCountInMeal(newQty, mealId) {
    if (newQty > 0) {
          document.getElementById(`count_${mealId}`).innerHTML = 
          newQty;
          document.getElementById(`count_${mealId}`).style.display = "flex";
    } else {
        document.getElementById(`count_${mealId}`).style.display = "none";
    }
}

function saveMealsForCart(continent, mealType, mealNo) {
    let indexInCart = mealsInCart.indexOf(menu[continent][mealType][mealNo])
    if (indexInCart == -1) {
        mealsInCart.push(menu[continent][mealType][mealNo])
        console.log(mealsInCart)
    } else {
        mealsInCart[indexInCart].quantity = menu[continent][mealType][mealNo].quantity
        console.log(mealsInCart)
    }
}

function showMealsInCart() {
    document.getElementById("menues_in_cart").innerHTML = "";
    console.log(mealsInCart)
    for (let i = 0; i < mealsInCart.length; i++) {
        let price = (mealsInCart[i].quantity * mealsInCart[i].price).toFixed(2).replace(".", ",");
        document.getElementById("menues_in_cart").innerHTML += `
        <div class="menu_in_cart" id="cart_${mealsInCart[i].id}">
            <div class="menu_cart_title">${mealsInCart[i].title}</div>
            <div class="add_remove_line">
                <div id="decrease_${mealsInCart[i].id}" class="meal_add_remove_inside_cart" onclick="saveMealInfo(event, -1)">
                    -
                </div>
                <span class="count">${mealsInCart[i].quantity}</span>
                <div id="increase_${mealsInCart[i].id}" class="meal_add_remove_inside_cart" onclick="saveMealInfo(event, 1)">
                    +
                </div>
                <div class="price">${price} €</div>
                <div class="meal_add_remove_inside_cart delete_from_cart">
                    <img id="deleteId_${mealsInCart[i].id}" onclick="deleteFromCart(event)" class="basket" src="./assets/icon/basket.png" alt="Mülleimer">
                </div>
                </div>
        </div>`
    }
}


function deleteFromCart(e) {
    let clickedButtonId = e.target.id;
    let mealId = clickedButtonId.slice(9);
    let continent = mealId.charAt(4);
    let mealType = mealId.slice(5, -1);
    let mealNo = mealId.charAt(mealId.length - 1);
    let mealsIndexInCart = mealsInCart.indexOf(menu[continent][mealType][mealNo])
    mealsInCart.splice(mealsIndexInCart, 1)
    menu[continent][mealType][mealNo].quantity = 0;
    document.getElementById(`count_${mealId}`).innerHTML = 0;
    document.getElementById(`count_${mealId}`).style.display = "none";
    showMealsInCart();
}