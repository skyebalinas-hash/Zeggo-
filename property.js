/* ==========================================
   PROPERTY DETAILS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof properties === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    const id = Number(params.get("id"));

    const property = properties.find(item => item.id === id);

    if (!property) {
        window.location.href = "properties.html";
        return;
    }

    const propertyImage = document.getElementById("propertyImage");
    const propertyStatus = document.getElementById("propertyStatus");
    const propertyTitle = document.getElementById("propertyTitle");
    const propertyPrice = document.getElementById("propertyPrice");
    const propertyAddress = document.getElementById("propertyAddress");
    const propertyBeds = document.getElementById("propertyBeds");
    const propertyBaths = document.getElementById("propertyBaths");
    const propertyGarage = document.getElementById("propertyGarage");
    const propertyArea = document.getElementById("propertyArea");
    const propertyDescription = document.getElementById("propertyDescription");

    propertyImage.src = property.image;
    propertyImage.alt = property.title;

    propertyStatus.textContent =
        property.status === "sale" ? "FOR SALE" : "FOR RENT";

    propertyTitle.textContent = property.title;
    propertyPrice.textContent = property.priceDisplay;

    propertyAddress.innerHTML =
        `<i class="fa-solid fa-location-dot"></i> ${property.address}`;

    propertyBeds.textContent = property.bedrooms;
    propertyBaths.textContent = property.bathrooms;
    propertyGarage.textContent = property.garage;
    propertyArea.textContent = property.area;
    propertyDescription.textContent = property.description;

    document.title = `${property.title} | Zeggo`;

});
