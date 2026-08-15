/* ==========================================
   ZEGGO
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof properties === "undefined") {
        return;
    }

    const propertyContainer = document.getElementById("featuredProperties");

    const currentPage = window.location.pathname.split("/").pop();

    /* ==========================================
       PROPERTY DISPLAY
    ========================================== */

    if (propertyContainer) {

        if (currentPage === "index.html" || currentPage === "") {

            displayProperties(properties.slice(0, 3));

        } else if (currentPage === "properties.html") {

            displayProperties(properties);

        }

    }

    /* ==========================================
       SEARCH BUTTON
    ========================================== */

    const searchButton = document.getElementById("searchBtn");

    if (searchButton) {

        searchButton.addEventListener("click", filterProperties);

    }

    /* ==========================================
       ENTER KEY SEARCH
    ========================================== */

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                filterProperties();

            }

        });

    }

    /* ==========================================
       SEARCH AUTOCOMPLETE
    ========================================== */

    const suggestionsBox =
        document.getElementById("searchSuggestions");

    if (searchInput && suggestionsBox) {

        searchInput.addEventListener("input", () => {

            const keyword =
                searchInput.value.trim().toLowerCase();

            suggestionsBox.innerHTML = "";

            if (keyword.length < 2) {

                suggestionsBox.style.display = "none";

                return;

            }

            const suggestions = [];

            properties.forEach(property => {

                const searchableItems = [
                    property.city,
                    property.address,
                    property.title
                ];

                searchableItems.forEach(item => {

                    if (
                        typeof item === "string" &&
                        item.toLowerCase().includes(keyword) &&
                        !suggestions.includes(item)
                    ) {

                        suggestions.push(item);

                    }

                });

            });

            if (suggestions.length === 0) {

                suggestionsBox.style.display = "none";

                return;

            }

            suggestions.slice(0, 6).forEach(item => {

                const suggestion =
                    document.createElement("div");

                suggestion.className =
                    "search-suggestion";

                suggestion.innerHTML = `
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${item}</span>
                `;

                suggestion.addEventListener("click", () => {

                    searchInput.value = item;

                    suggestionsBox.style.display = "none";

                    filterProperties();

                });

                suggestionsBox.appendChild(suggestion);

            });

            suggestionsBox.style.display = "block";

        });

        /* Close suggestions when clicking elsewhere */

        document.addEventListener("click", (event) => {

            if (!event.target.closest(".search-container")) {

                suggestionsBox.style.display = "none";

            }

        });

    }

});


/* ==========================================
   DISPLAY PROPERTY CARDS
========================================== */

function displayProperties(propertyList) {

    const container =
        document.getElementById("featuredProperties");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (!propertyList || propertyList.length === 0) {

        container.innerHTML = `
            <div class="no-properties">
                <h3>No properties found</h3>
                <p>Try changing your search or filters.</p>
            </div>
        `;

        return;

    }

    propertyList.forEach(property => {

        container.innerHTML += `

            <div class="property-card">

                <div class="property-image">

                    <img
                        src="${property.image}"
                        alt="${property.title}"
                    >

                    <span class="property-status">

                        ${
                            property.status === "sale"
                                ? "FOR SALE"
                                : "FOR RENT"
                        }

                    </span>

                    <button
                        class="favorite-btn"
                        type="button"
                        aria-label="Add ${property.title} to favorites"
                    >

                        <i class="fa-regular fa-heart"></i>

                    </button>

                </div>

                <div class="property-content">

                    <div class="property-price">

                        ${property.priceDisplay}

                    </div>

                    <h3 class="property-title">

                        ${property.title}

                    </h3>

                    <p class="property-location">

                        <i class="fa-solid fa-location-dot"></i>

                        ${property.address}

                    </p>

                    <div class="property-details">

                        <span>

                            <i class="fa-solid fa-bed"></i>

                            ${property.bedrooms}

                        </span>

                        <span>

                            <i class="fa-solid fa-bath"></i>

                            ${property.bathrooms}

                        </span>

                        <span>

                            <i class="fa-solid fa-car"></i>

                            ${property.garage}

                        </span>

                        <span>

                            <i class="fa-solid fa-ruler-combined"></i>

                            ${property.area}

                        </span>

                    </div>

                    <a
                        href="property.html?id=${property.id}"
                        class="view-details"
                    >

                        View Details

                    </a>

                </div>

            </div>

        `;

    });

}


/* ==========================================
   SEARCH & FILTER
========================================== */

function filterProperties() {

    if (typeof properties === "undefined") {
        return;
    }

    const searchElement =
        document.getElementById("searchInput");

    const statusElement =
        document.getElementById("statusFilter");

    const typeElement =
        document.getElementById("typeFilter");

    const bedsElement =
        document.getElementById("bedFilter");

    const priceElement =
        document.getElementById("priceFilter");

    const keyword =
        searchElement
            ? searchElement.value.toLowerCase().trim()
            : "";

    const status =
        statusElement
            ? statusElement.value
            : "all";

    const type =
        typeElement
            ? typeElement.value
            : "all";

    const beds =
        bedsElement
            ? bedsElement.value
            : "all";

    const price =
        priceElement
            ? priceElement.value
            : "all";

    const filtered =
        properties.filter(property => {

            const title =
                String(property.title || "").toLowerCase();

            const city =
                String(property.city || "").toLowerCase();

            const address =
                String(property.address || "").toLowerCase();

            const category =
    String(property.category || "").toLowerCase();

const tags =
    Array.isArray(property.tags)
        ? property.tags.join(" ").toLowerCase()
        : "";

const description =
    String(property.description || "").toLowerCase();

const type =
    String(property.type || "").toLowerCase();
           const features =
    Array.isArray(property.features)
        ? property.features.join(" ").toLowerCase()
        : "";
const matchesKeyword =
    keyword === "" ||
    title.includes(keyword) ||
    city.includes(keyword) ||
    address.includes(keyword) ||
    type.includes(keyword) ||
    category.includes(keyword) ||
    tags.includes(keyword) ||
    description.includes(keyword) ||
    features.includes(keyword);

            const matchesStatus =
                status === "all" ||
                property.status === status;

            const matchesType =
                type === "all" ||
                property.type === type;

            const matchesBeds =
                beds === "all" ||
                Number(property.bedrooms) >= Number(beds);

            let matchesPrice = true;

            if (price !== "all") {

                const maxPrice = Number(price);

                /*
                    Rental prices are also compared numerically.
                    This keeps the existing filter behavior intact.
                */

                matchesPrice =
                    Number(property.price) <= maxPrice;

            }

            return (
                matchesKeyword &&
                matchesStatus &&
                matchesType &&
                matchesBeds &&
                matchesPrice
            );

        });

    displayProperties(filtered);

}
