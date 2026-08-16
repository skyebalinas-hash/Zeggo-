/* ==========================================
   ZEGGO SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof properties === "undefined") {
        console.error("Properties data not loaded.");
        return;
    }

    const container = document.getElementById("featuredProperties");

    if (!container) {
        return;
    }

    /* Homepage: show first 3 */
    if (
        window.location.pathname.endsWith("/") ||
        window.location.pathname.endsWith("index.html")
    ) {
        displayProperties(properties.slice(0, 3));
    }

    /* Properties page: show all */
    else if (
        window.location.pathname.endsWith("properties.html")
    ) {
        displayProperties(properties);
    }


    /* Search button */

    const searchButton = document.getElementById("searchBtn");

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            filterProperties();

        });

    }


    /* Enter key */

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                filterProperties();

            }

        });

    }

});


/* ==========================================
   DISPLAY PROPERTIES
========================================== */

function displayProperties(list) {

    const container = document.getElementById("featuredProperties");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `
            <div class="no-properties">
                <h3>No properties found</h3>
                <p>Try changing your search or filters.</p>
            </div>
        `;

        return;
    }


    list.forEach(function (property) {

        container.innerHTML += `

            <div class="property-card">

                <div class="property-image">
           <img
                src="${property.image}"
                alt="${property.title}"
           >
           <button
    class="favorite-btn"
    type="button"
    aria-label="Save property"
>
    <i class="fa-regular fa-heart"></i>
</button>
                      
                        ${
                            property.status === "sale"
                            ? "FOR SALE"
                            : "FOR RENT"
                        }

                    </span>

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
   SEARCH + FILTER
========================================== */

function filterProperties() {

    const keyword =
        document.getElementById("searchInput")?.value
        .toLowerCase()
        .trim() || "";


    const status =
        document.getElementById("statusFilter")?.value || "all";


    const type =
        document.getElementById("typeFilter")?.value || "all";


    const beds =
        document.getElementById("bedFilter")?.value || "all";


    const price =
        document.getElementById("priceFilter")?.value || "all";


    const results = properties.filter(function (property) {


        /* Search EVERYTHING */

        const searchable = [

            property.title,

            property.city,

            property.address,

            property.description,

            property.type,

            property.category,

            ...(property.tags || [])

        ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


        const keywordMatch =
            keyword === "" ||
            searchable.includes(keyword);


        /* Buy / Rent */

        const statusMatch =
            status === "all" ||
            property.status === status;


        /* Property type */

        const typeMatch =
            type === "all" ||
            property.type.toLowerCase() === type.toLowerCase();


        /* Bedrooms */

        const bedMatch =
            beds === "all" ||
            property.bedrooms >= Number(beds);


        /* Price */

        let priceMatch = true;

        if (price !== "all") {

            priceMatch =
                property.price <= Number(price);

        }


        return (
            keywordMatch &&
            statusMatch &&
            typeMatch &&
            bedMatch &&
            priceMatch
        );

    });


    displayProperties(results);

}
