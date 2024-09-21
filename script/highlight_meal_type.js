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
        if (isInViewportBig(section)) {
        links[index].classList.add('active');
        } else {
        links[index].classList.remove('active');
        }
    });
    sections.forEach((section, index) => {
        if (isInViewportSmall(section)) {
        links[index].classList.add('active');
        } else {
        links[index].classList.remove('active');
        }
    });
};

function isInViewportBig(section) {
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.height > viewportHeight) {
        return (
            rect.top <= viewportHeight - 240 && rect.bottom >= 240
        );
    } else {
        return (
            rect.top >= 240 &&
            rect.bottom <= viewportHeight
        );
    }
}

function isInViewportSmall(section) {
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    return rect.top < (viewportHeight - 240) && rect.bottom >= 240;
}