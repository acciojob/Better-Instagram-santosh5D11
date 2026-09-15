const images = document.querySelectorAll(".image");

let draggedElement = null;

images.forEach((image) => {
    image.addEventListener("dragstart", function () {
        draggedElement = this;
    });

    image.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    image.addEventListener("drop", function (event) {
        event.preventDefault();

        if (draggedElement === this) {
            return;
        }

		// Get the actual background images from CSS
        const draggedImage = getComputedStyle(draggedElement).backgroundImage;
        const targetImage = getComputedStyle(this).backgroundImage;

        // Swap background images
        draggedElement.style.backgroundImage = targetImage;
        this.style.backgroundImage = draggedImage;

        // Swap the text/content as well
        const tempContent = draggedElement.innerHTML;
        draggedElement.innerHTML = this.innerHTML;
        this.innerHTML = tempContent;
    });
});
