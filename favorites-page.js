/* ==========================================
   ZEGGO
   FAVORITES PAGE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("savedProperties");

    if (!container || typeof properties === "undefined") {
        return;
    }

    const favorites =
        JSON.parse(localStorage.getItem("zeggoFavorites")) || [];

    const savedProperties = properties.filter(property =>
        favorites.includes(String(property.id))
    );

    if (savedProperties.length === 0) {

        container.innerHTML = `
            <div class="no-properties">
                <i class="fa-regular fa-heart"></i>

                <h2>No saved properties yet</h2>

                <p>
                    When you favorite a property,
                    it will appear here.
                </p>

                <a href="properties.html" class="cta-button">
                    Browse Properties
                </a>
            </div>
        `;

        return;
    }

    savedProperties.forEach(property => {

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

});
