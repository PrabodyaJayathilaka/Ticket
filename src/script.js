// Get a reference to the button
var viewMarketplaceBtn = document.getElementById("viewMarketplaceBtn");

// Define the function to navigate to View Marketplace.html
function goToMarketplace() {
    window.location.href = "/View Marketplace.html";
}

// Attach an event listener to the button, listening for the "click" event
viewMarketplaceBtn.addEventListener("click", goToMarketplace);