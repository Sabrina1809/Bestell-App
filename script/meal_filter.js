function jumpToMealType(id) {
    document.getElementsByClassName("choose_meal_type_option_link").className.remove(".active");
    // document.getElementsByClassName("choose_meal_type_option_link").style.textShadow = "none";
    document.getElementById(id).classList.add(".active");
    console.log(window)
}

// farbig markieren