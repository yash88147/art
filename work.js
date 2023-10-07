window.addEventListener("load", function() {
    // Get all elements with the "image-fade-in" class
    const images = document.querySelectorAll(".image-fade-in");

    // Add the "loaded" class to each image to trigger the fade-in effect
    images.forEach(function(image) {
        image.classList.add("loaded");
    });
});