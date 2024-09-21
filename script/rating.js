const rating_main = document.getElementById("rating_main");
const ratingCtn = document.getElementById("rating_ctn");
const logoRestaurant = document.getElementById("logo_restaurant");
const cartIcon = document.getElementById("cart_icon_with_count");
const backToStartIcon = document.getElementById("back_to_start_icon");

function openRating() {
    ratingCtn.classList.add("open_close_soft");
    logoRestaurant.style.opacity = "0";
    cartIcon.style.display = "none";
    backToStartIcon.style.display = "none";

    window.onclick = function(e) {
        if (e.target.id === "rating_ctn") {
            ratingCtn.classList.remove("open_close_soft");
            logoRestaurant.style.opacity = "1";
            cartIcon.style.display = "flex";
        }
    }
    renderRatings()
}

function renderRatings() {
    rating_main.innerHTML = "";
    for (let i = 0; i < reviews.length; i++) {
        rating_main.innerHTML += `
         <div class="single_rating">
            <div class="rating_details">
                <div class="rating_guest">
                    <img src="./assets/icon/star.png" alt="gelber Stern">
                    <span>${reviews[i].stars} / 5</span>
                    ${reviews[i].name}, <wbr>${reviews[i].date}
                </div>
            </div>
            <div class="rating_text">
                ${reviews[i].text}
            </div>
        </div>`
    }
}