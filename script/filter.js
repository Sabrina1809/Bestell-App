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

function openContinentav() {
    document.getElementById("choose_continent").style.display = "flex";
    logoRestaurant.style.opacity = 0;
    cartIcon.style.display = "none";

    window.onclick = function(e) {
        if (e.target.id == "choose_continent") {
            document.getElementById("choose_continent").style.display = "none";
            logoRestaurant.style.opacity = 1;
            cartIcon.style.display = "flex";
        }
    }
}

function filterContinent(c) {
    if (c == "all") {
        filterContinentAll();
    }  else {
        c = c;
        filterContinentSingle(c);
    }
    logoRestaurant.style.opacity = 1;
    window.scrollTo({
        top: 0,
    });  
    if (window.innerWidth <= 1000) {
        cartIcon.style.display = "flex";    
    } else {
        cartIcon.style.display = "none";    
    }
}

function clearSections() {
    for (let i = 0; i < mealsSections.length; i++) {
        mealsSections[i].innerHTML = "";
    }
}

function filterContinentAll() {
    clearSections();
    for (let c = 0; c < menu.length; c++) {
        for (let t = 0; t < mealTypes.length; t++) {
            for (let n = 0; n < menu[c][mealTypes[t]].length; n++) {
                filterContinentAllTemplate(c, t, n);
                if (menu[c][mealTypes[t]][n].quantity > 0) {
                    document.getElementById(`count_${menu[c][mealTypes[t]][n].id}`).style.display = "flex";
                }
            }
        }
    }
    document.getElementById("choose_continent").style.display = "none";
    document.getElementById("continent_title").innerHTML = "alle";
}

function filterContinentAllTemplate(c, t, n) {
    mealsSections[t].innerHTML += `
    <div class="meals_starter_single meals_single">
    <div class="meals_info">
        <div class="single_meal_header">
                <h3 class="meal_title">${menu[c][mealTypes[t]][n].title}</h3>
                <img class="img_location" src="./assets/icon/pin.png" alt="Pin">
                <p>${menu[c][mealTypes[t]][n].country}</p>
        </div>
        <div class="meal_ingredients">${menu[c][mealTypes[t]][n].ingredients.join(", ")}</div>
        <div class="meal_price">${(menu[c][mealTypes[t]][n].price).toFixed(2).replace(".", ",")} €</div>
    </div>
    <div class="count_and_add">
        <div id="count_${menu[c][mealTypes[t]][n].id}" class="count_this_menu">${menu[c][mealTypes[t]][n].quantity}</div>
        <div class="meal_add_remove_cart" id="add_cart_${menu[c][mealTypes[t]][n].id}" onclick="saveMealInfo(event, 1)">+</div>
    </div>
</div>`
}

function filterContinentSingle(c) {
    clearSections();
    for (let t = 0; t < mealTypes.length; t++) {
        for (let n = 0; n < menu[c][mealTypes[t]].length; n++) {
            filterContinentSingleTemplate(t, c, n);
            if (menu[c][mealTypes[t]][n].quantity > 0) {
                document.getElementById(`count_${menu[c][mealTypes[t]][n].id}`).style.display = "flex";
            }
        }
    }
    document.getElementById("choose_continent").style.display = "none";
    document.getElementById("continent_title").innerHTML = menu[c].name;
}

function filterContinentSingleTemplate(t, c, n) {
    mealsSections[t].innerHTML += `
    <div class="meals_starter_single meals_single">
        <div class="meals_info">
            <div class="single_meal_header">
                    <h3 class="meal_title">${menu[c][mealTypes[t]][n].title}</h3>
                    <img class="img_location" src="./assets/icon/pin.png" alt="Pin">
                    <p>${menu[c][mealTypes[t]][n].country}</p>
            </div>
            <div class="meal_ingredients">${menu[c][mealTypes[t]][n].ingredients.join(", ")}</div>
            <div class="meal_price">${(menu[c][mealTypes[t]][n].price).toFixed(2).replace(".", ",")} €</div>
        </div>
        <div class="count_and_add">
            <div id="count_${menu[c][mealTypes[t]][n].id}" class="count_this_menu">${menu[c][mealTypes[t]][n].quantity}</div>
            <div class="meal_add_remove_cart" id="add_cart_${menu[c][mealTypes[t]][n].id}" onclick="saveMealInfo(event, 1)">+</div>
        </div>
    </div>`
}