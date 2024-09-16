

function renderMeals() {
    clearSections();
   
    document.getElementById("continent_title").innerHTML = "alle";
    for (let c = 0; c < menu.length; c++) {
        for (let t = 0; t < mealTypes.length; t++) {
            for (let n = 0; n < menu[c][mealTypes[t]].length; n++) {
           
                mealsSections[t].innerHTML += `
                <div class="meals_starter_single meals_single">
                <div class="meals_info">
                    <div class="single_meal_header">
                            <h3 class="meal_title">${menu[c][mealTypes[t]][n].title}</h3>
                            <img class="img_location" src="./assets/icon/pin.png" alt="Pin">
                            <p>${menu[c][mealTypes[t]][n].country}</p>
                    </div>
                    <div class="meal_ingredients">${menu[c][mealTypes[t]][n].ingredients}</div>
                    <div class="meal_price">${(menu[c][mealTypes[t]][n].price).toFixed(2)} €</div>
                </div>
                <div class="count_and_add">
                    <div id="count_${menu[c][mealTypes[t]][n].id}" class="count_this_menu">${menu[c][mealTypes[t]][n].quantity}</div>
                    <div class="meal_add_remove_cart" id="${menu[c][mealTypes[t]][n].id}" onclick="saveMealInfo(event, 1)">+</div>
                </div>
            </div>`
            }
        }
    }
    scrollToTop();
}



