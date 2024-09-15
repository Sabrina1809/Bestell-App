const sections = [
    document.getElementById("starter"),
    document.getElementById("main"),
    document.getElementById("dessert"),
    document.getElementById("drinks")
];

const links = [
    document.getElementById("choose_meal_type_option_starter"),
    document.getElementById("choose_meal_type_option_main"),
    document.getElementById("choose_meal_type_option_dessert"),
    document.getElementById("choose_meal_type_option_drinks")   
]

window.onscroll = function() {
    sections.forEach((section, index) => {
        if (isInViewport(section)) {
        links[index].classList.add('active');
        } else {
        links[index].classList.remove('active');
        }
    });
};

function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    return rect.top < viewportHeight && rect.bottom >= 0;
}