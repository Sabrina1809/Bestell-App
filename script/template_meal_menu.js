let mealsSections = [
    document.getElementById("meals_starter"),
    document.getElementById("meals_main"),
    document.getElementById("meals_dessert"),
    document.getElementById("meals_drinks"),
]

let mealTypes = [
    "starter",
    "main",
    "dessert",
    "drinks"
]

function renderMeals() {
    clearSections();
    for (let c = 0; c < menu.length; c++) {
        for (let t = 0; t < mealTypes.length; t++) {
            for (let n = 0; n < menu[c][mealTypes[t]].length; n++) {
                mealsSections[t].innerHTML += `
                <div class="meals_starter_single meals_single">
                <div class="meals_info">
                    <div class="single_meal_header">
                            <h3 class="meal_title">${menu[c][mealTypes[t]][n].title}</h3>
                            <img class="img_location" src="./assets/icon/pin.png" alt="">
                            <p>${menu[c][mealTypes[t]][n].country}</p>
                    </div>
                    <div class="meal_ingredients">${menu[c][mealTypes[t]][n].ingredients}</div>
                    <div class="meal_price">${(menu[c][mealTypes[t]][n].price).toFixed(2)} €</div>
                </div>
                <div class="count_and_add">
                    <div class="count_this_menu">${menu[c][mealTypes[t]][n].quantity}</div>
                    <div class="meal_add_remove_cart" ${menu[c][mealTypes[t]][n].id} onclick="">+</div>
                </div>
            </div>`
            }
        }
    }
}

function clearSections() {
    for (let i = 0; i < mealsSections.length; i++) {
        mealsSections[i].innerHTML = "";
    }
}