let starterMealsCtn = document.getElementById("meals_starter_menu");
let mainMealsCtn = document.getElementById("meals_main_menu");
let dessertMealsCtn = document.getElementById("meals_dessert_menu");
let drinksMealsCtn = document.getElementById("meals_drinks_menu");
let cartMealsCtn = document.getElementById("menues_in_cart");

function setStarters() {
    starterMealsCtn.innerHTML = "";
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].starter.length; j++) {
            let ingredientsArray = menu[i].starter[j].ingredients;
            let ingredientsArrayStyled = ingredientsArray.join(', ');
            starterMealsCtn.innerHTML += `
                <div class="meals_starter_single meals_single">
                    <div class="meals_starter_info">
                        <div class="single_meal_header">
                                <h3 class="meal_title">${(menu[i].starter[j].title)}</h3>
                                <img class="img_location" src="./assets/icon/pin.png" alt="">
                                <p>${menu[i].starter[j].country}</p>
                            </div>
                        <div class="meal_ingredients">${ingredientsArrayStyled}</div>
                        <div class="meal_price">${(menu[i].starter[j].price).toFixed(2)} €</div>
                    </div>
                    <div class="meal_add_remove_cart" meal_add_remove_cart" onclick="saveMealInfo('${i}', 'starter', '${j}')">+</div>
                    <div id="count_menu_in_cart">5</div>
                </div>`
        }   
    }
}

function setMain() {
    mainMealsCtn.innerHTML = "";
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].main.length; j++) {
            let ingredientsArray = menu[i].main[j].ingredients;
            let ingredientsArrayStyled = ingredientsArray.join(', ');
            mainMealsCtn.innerHTML += `
            <div class="meals_main_single meals_single">
                <div class="meals_main_info">
                    <div class="single_meal_header">
                            <h3 class="meal_title">${menu[i].main[j].title}</h3>
                            <img class="img_location" src="./assets/icon/pin.png" alt="">
                            <p>${menu[i].main[j].country}</p>
                        </div>
                    <div class="meal_ingredients">${ingredientsArrayStyled}</div>
                    <div class="meal_price">${(menu[i].main[j].price).toFixed(2)} €</div>
                </div>
                <div class="meal_add_remove_cart" meal_add_remove_cart" onclick="saveMealInfo('${i}', 'main', '${j}')">+</div>
            </div>`
        }   
    }
}

function setDessert() {
    dessertMealsCtn.innerHTML = "";
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].dessert.length; j++) {
            let ingredientsArray = menu[i].dessert[j].ingredients;
            let ingredientsArrayStyled = ingredientsArray.join(', ');
            dessertMealsCtn.innerHTML += `
                <div class="meals_dessert_single meals_single">
                    <div class="meals_dessert_info">
                        <div class="single_meal_header">
                            <h3 class="meal_title">${menu[i].dessert[j].title}</h3>
                            <img class="img_location" src="./assets/icon/pin.png" alt="">
                            <p>${menu[i].dessert[j].country}</p>
                        </div>
                        <div class="meal_ingredients">${ingredientsArrayStyled}</div>
                        <div class="meal_price">${(menu[i].dessert[j].price).toFixed(2)} €</div>
                    </div>
                    <div class="meal_add_remove_cart" meal_add_remove_cart" onclick="saveMealInfo('${i}', 'dessert', '${j}')">+</div>
                </div>`
        }   
    }
}

function setDrinks() {
    drinksMealsCtn.innerHTML = "";
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].drinks.length; j++) {
            let ingredientsArray = menu[i].drinks[j].ingredients;
            let ingredientsArrayStyled = ingredientsArray.join(', ');
            drinksMealsCtn.innerHTML += `
                <div class="meals_drinks_single meals_single">
                    <div class="meals_drinks_info">
                        <div class="single_meal_header">
                            <h3 class="meal_title">${menu[i].drinks[j].title}</h3>
                            <img class="img_location" src="./assets/icon/pin.png" alt="">
                            <p>${menu[i].drinks[j].country}</p>
                        </div>
                        <div class="meal_ingredients">${ingredientsArrayStyled}</div>
                        <div class="meal_price">${(menu[i].drinks[j].price).toFixed(2)} €</div>
                    </div>
                    <div class="meal_add_remove_cart" meal_add_remove_cart" onclick="saveMealInfo('${i}', 'drinks', '${j}')">+</div>
                </div>`
        }   
    }
}

function continentStarters(i) {
    starterMealsCtn.innerHTML = "";
    for (let j = 0; j < menu[i].starter.length; j++) {
        let mealTitle = menu[i].starter[j].title;
        let mealQuantity = menu[i].starter[j].quantity;
        let mealPrice = (menu[i].starter[j].price).toFixed(2);
        let continent = i;
        let mealNo = j;
        let mealCountID = `countmenu${i}starter${j}`
        starterMealsCtn.innerHTML += `
        <div class="meals_starter_single meals_single">
            <div class="meals_starter_info">
                <div class="single_meal_header">
                    <h3 class="meal_title">${mealTitle}</h3>
                    <img class="img_location" src="./assets/icon/pin.png" alt="">
                    <p>${menu[i].starter[j].country}</p>
                </div>
                <div class="meal_ingredients">${menu[i].starter[j].ingredients.join(', ')}</div>
                <div class="meal_price">${mealPrice} €</div>
            </div>
            <div id="" class="meal_add_remove_cart" onclick="saveMealInfo('${continent}', 'starter', '${mealNo}')">+</div>
            <div class="${mealCountID}">${mealQuantity}</div>
        </div>`
    }   
}

function continentMain(i) {
    mainMealsCtn.innerHTML = "";
    for (let j = 0; j < menu[i].main.length; j++) {
        let mealTitle = menu[i].main[j].title;
        let mealPrice = (menu[i].main[j].price).toFixed(2);
        let continent = i;
        let mealNo = j;
        mainMealsCtn.innerHTML += `
        <div class="meals_main_single meals_single">
            <div class="meals_main_info">
                <div class="single_meal_header">
                    <h3 class="meal_title">${mealTitle}</h3>
                    <img class="img_location" src="./assets/icon/pin.png" alt="">
                    <p>${menu[i].main[j].country}</p>
                </div>
                <div class="meal_ingredients">${menu[i].main[j].ingredients.join(', ')}</div>
                <div class="meal_price">${mealPrice} €</div>
            </div>
            <div id="" class="meal_add_remove_cart" onclick="saveMealInfo('${continent}', 'main', '${mealNo}')">+</div>
        </div>`
    }   
}

function continentDessert(i) {
    dessertMealsCtn.innerHTML = "";
    for (let j = 0; j < menu[i].dessert.length; j++) {
        let mealTitle = menu[i].dessert[j].title;
        let mealPrice = (menu[i].dessert[j].price).toFixed(2);
        let continent = i;
        let mealNo = j;
        dessertMealsCtn.innerHTML += `
        <div class="meals_dessert_single meals_single">
            <div class="meals_dessert_info">
                <div class="single_meal_header">
                    <h3 class="meal_title">${mealTitle}</h3>
                    <img class="img_location" src="./assets/icon/pin.png" alt="">
                    <p>${menu[i].dessert[j].country}</p>
                </div>
                <div class="meal_ingredients">${menu[i].dessert[j].ingredients.join(', ')}</div>
                <div class="meal_price">${mealPrice} €</div>
            </div>
            <div id="" class="meal_add_remove_cart" onclick="saveMealInfo('${continent}', 'dessert', '${mealNo}')">+</div>
        </div>`
    }   
}

function continentDrinks(i) {
    drinksMealsCtn.innerHTML = "";
    for (let j = 0; j < menu[i].drinks.length; j++) {
        let mealTitle = menu[i].drinks[j].title;
        let mealPrice = (menu[i].drinks[j].price).toFixed(2);
        let continent = i;
        let mealNo = j;
        drinksMealsCtn.innerHTML += `
        <div class="meals_drinks_single meals_single">
            <div class="meals_drinks_info">
                <div class="single_meal_header">
                    <h3 class="meal_title">${mealTitle}</h3>
                    <img class="img_location" src="./assets/icon/pin.png" alt="">
                    <p>${menu[i].drinks[j].country}</p>
                </div>
                <div class="meal_ingredients">${menu[i].drinks[j].ingredients.join(', ')}</div>
                <div class="meal_price">${mealPrice} €</div>
            </div>
            <div id="" class="meal_add_remove_cart" onclick="saveMealInfo('${continent}', 'drinks', '${mealNo}')">+</div>
        </div>`
    }   
}

function newToCard(mealDetailsInCart) {
    cartMealsCtn.innerHTML += `
    <div class="menu_in_cart">
        <div class="menu_cart_title">${mealDetailsInCart.title}</div>
        <div class="add_remove_line">
            <div class="meal_add_remove_cart" onclick="changeQtyInsideCart(event, -1)">
                -
            </div>
            <span class="count">${mealDetailsInCart.quantity}</span>
            <div class="meal_add_remove_cart" onclick="changeQtyInsideCart(event, 1)">
                +
            </div>
            <div class="price">${mealDetailsInCart.price} €</div>
            <div onclick="deleteFromCart(event)" class="meal_add_remove_cart delete_from_cart">
                <img class="basket" src="./assets/icon/icons8-müll-löschen-32 (1).png" alt="">
            </div>
        </div>
    </div>`
}

function addToCart(menuesInCart) {
    cartMealsCtn.innerHTML = "";
    for (let i = 0; i < menuesInCart.length; i++) {
        cartMealsCtn.innerHTML += `
        <div class="menu_in_cart">
            <div class="menu_cart_title">${menuesInCart[i].title}</div>
            <div class="add_remove_line">
                <div class="meal_add_remove_cart" onclick="changeQtyInsideCart(event, -1)">
                    -
                </div>
                <span class="count">${menuesInCart[i].quantity}</span>
                <div class="meal_add_remove_cart" onclick="changeQtyInsideCart(event, 1)">
                    +
                </div>
                <div class="price">${menuesInCart[i].price} €</div>
                <div onclick="deleteFromCart(event)" class="meal_add_remove_cart delete_from_cart">
                    <img class="basket" src="./assets/icon/icons8-müll-löschen-32 (1).png" alt="">
                </div>
             </div>
        </div>`
    }
}
