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

        const tempId = draggedElement.id;

        draggedElement.id = this.id;
        this.id = tempId;
    });
});
