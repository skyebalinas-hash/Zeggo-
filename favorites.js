/* ==========================================
   ZEGGO
   FAVORITES.JS
========================================== */

document.addEventListener("click", function (event) {

    const button = event.target.closest(".favorite-btn");

    if (!button) {
        return;
    }

    const card = button.closest(".property-card");

    if (!card) {
        return;
    }

    const detailsLink = card.querySelector(".view-details");

    if (!detailsLink) {
        return;
    }

    const url = new URL(detailsLink.href);

    const propertyId = url.searchParams.get("id");

    if (!propertyId) {
        return;
    }

    let favorites =
        JSON.parse(localStorage.getItem("zeggoFavorites")) || [];

    if (favorites.includes(propertyId)) {

        favorites = favorites.filter(id => id !== propertyId);

        button.classList.remove("active");

        button.innerHTML =
            '<i class="fa-regular fa-heart"></i>';

    } else {

        favorites.push(propertyId);

        button.classList.add("active");

        button.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

    }

    localStorage.setItem(
        "zeggoFavorites",
        JSON.stringify(favorites)
    );

});
