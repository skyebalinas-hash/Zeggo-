/* ==========================================
   ZEGGO
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof properties === "undefined") {
        console.error("Zeggo: properties.js was not loaded.");
        return;
    }

    const propertyContainer =
        document.getElementById("featuredProperties");

    const currentPage =
        window.location.pathname.split("/").pop();


    /* ==========================================
       PROPERTY DISPLAY
    ========================================== */

    if (propertyContainer) {

        if (
            currentPage === "index.html" ||
            currentPage === ""
        ) {

            displayProperties(properties.slice(0, 3));

        }

        else if (currentPage === "properties.html") {

            displayProperties(properties);

        }

    }


    /* ==========================================
       SEARCH BUTTON
    ========================================== */

    const searchButton =
        document.getElementById("searchBtn");

    if (searchButton) {

        searchButton.addEventListener("click", () => {

            filterProperties();

        });

    }


    /* ==========================================
       ENTER KEY
    ========================================== */

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                filterProperties();

            }

        });

    }


    /* ==========================================
       SEARCH SUGGESTIONS
    ========================================== */

    setupSearchSuggestions();

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

                <i class="fa-solid fa-house-circle-xmark"></i>

                <h3>No properties found</h3>

                <p>
                    Try changing your search or filters.
                </p>

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

        console.error("Zeggo: properties is not available.");

        return;

    }


    const searchElement =
        document.getElementById("searchInput");

    const keyword =
        searchElement
            ? searchElement.value.toLowerCase().trim()
            : "";


    const statusElement =
        document.getElementById("statusFilter");

    const status =
        statusElement
            ? statusElement.value
            : "all";


    const typeElement =
        document.getElementById("typeFilter");

    const type =
        typeElement
            ? typeElement.value
            : "all";


    const bedsElement =
        document.getElementById("bedFilter");

    const beds =
        bedsElement
            ? bedsElement.value
            : "all";


    const priceElement =
        document.getElementById("priceFilter");

    const price =
        priceElement
            ? priceElement.value
            : "all";


    const filtered =
        properties.filter(property => {


            /* ==========================================
               SEARCH ALL PROPERTY INFORMATION
            ========================================== */

            const searchableText = [

                property.title,

                property.city,

                property.address,

                property.description,

                property.type,

                property.category,

                ...(Array.isArray(property.tags)
                    ? property.tags
                    : [])

            ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();


            const matchesKeyword =
                keyword === "" ||
                searchableText.includes(keyword);


            /* ==========================================
               SALE / RENT
            ========================================== */

            const matchesStatus =
                status === "all" ||
                property.status === status;


            /* ==========================================
               PROPERTY TYPE
            ========================================== */

            const matchesType =
                type === "all" ||
                String(property.type).toLowerCase() ===
                type.toLowerCase();


            /* ==========================================
               BEDROOMS
            ========================================== */

            const matchesBeds =
                beds === "all" ||
                Number(property.bedrooms) >= Number(beds);


            /* ==========================================
               PRICE
            ========================================== */

            let matchesPrice = true;


            if (price !== "all") {

                const maximumPrice =
                    Number(price);

                matchesPrice =
                    Number(property.price) <= maximumPrice;

            }


            /* ==========================================
               FINAL MATCH
            ========================================== */

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


/* ==========================================
   SEARCH SUGGESTIONS
========================================== */

function setupSearchSuggestions() {

    const searchInput =
        document.getElementById("searchInput");

    const suggestionsBox =
        document.getElementById("searchSuggestions");


    if (
        !searchInput ||
        !suggestionsBox ||
        typeof properties === "undefined"
    ) {

        return;

    }


    searchInput.addEventListener("input", () => {

        const keyword =
            searchInput.value
                .toLowerCase()
                .trim();


        suggestionsBox.innerHTML = "";


        if (keyword.length < 2) {

            suggestionsBox.style.display = "none";

            return;

        }


        const suggestions = [];


        properties.forEach(property => {


            const items = [

                property.title,

                property.city,

                property.address,

                property.type,

                property.category,

                ...(Array.isArray(property.tags)
                    ? property.tags
                    : [])

            ];


            items.forEach(item => {

                if (!item) {
                    return;
                }


                const text =
                    String(item);


                if (
                    text
                        .toLowerCase()
                        .includes(keyword) &&
                    !suggestions.includes(text)
                ) {

                    suggestions.push(text);

                }

            });

        });


        if (suggestions.length === 0) {

            suggestionsBox.style.display = "none";

            return;

        }


        suggestions
            .slice(0, 6)
            .forEach(item => {

                const suggestion =
                    document.createElement("div");


                suggestion.className =
                    "search-suggestion";


                suggestion.innerHTML = `

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <span>${item}</span>

                `;


                suggestion.addEventListener(
                    "click",
                    () => {

                        searchInput.value = item;

                        suggestionsBox.style.display =
                            "none";

                        filterProperties();

                    }
                );


                suggestionsBox.appendChild(
                    suggestion
                );

            });


        suggestionsBox.style.display = "block";

    });


    /* ==========================================
       CLOSE SUGGESTIONS
    ========================================== */

    document.addEventListener("click", event => {

        if (
            !event.target.closest(".search-container")
        ) {

            suggestionsBox.style.display =
                "none";

        }

    });

}
