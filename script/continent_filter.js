function openContinentav() {
    document.getElementById("choose_continent").style.display = "flex";

    window.onclick = function(e) {
        if (e.target.id == "choose_continent") {
            document.getElementById("choose_continent").style.display = "none";
        }
    }
}

function filterContinent(continent) {
    clearSections();
    for (let t = 0; t < mealTypes.length; t++) {
        for (let n = 0; n < menu[continent][mealTypes[t]].length; n++) {
            mealsSections[t].innerHTML += `
                <div class="meals_starter_single meals_single">
                    <div class="meals_info">
                        <div class="single_meal_header">
                                <h3 class="meal_title">${menu[continent][mealTypes[t]][n].title}</h3>
                                <img class="img_location" src="./assets/icon/pin.png" alt="">
                                <p>${menu[continent][mealTypes[t]][n].country}</p>
                        </div>
                        <div class="meal_ingredients">${menu[continent][mealTypes[t]][n].ingredients}</div>
                        <div class="meal_price">${(menu[continent][mealTypes[t]][n].price).toFixed(2)} €</div>
                    </div>
                    <div class="count_and_add">
                        <div class="count_this_menu">${menu[continent][mealTypes[t]][n].quantity}</div>
                        <div class="meal_add_remove_cart" ${menu[continent][mealTypes[t]][n].id} onclick="">+</div>
                    </div>
                </div>`
        }
    }
    document.getElementById("choose_continent").style.display = "none";
}