document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("galleryContainer");

    const ParroquiaObj = {
        parroquia: "Santa Rosa de Lima",
        fotos: [
            { id: 1, src: "img/Acolitos_todos.jpeg" },
            { id: 2, src: "img/Sacerdote.jpeg" },
            { id: 3, src: "img/Parroquia.jpeg" },
            { id: 4, src: "img/santo.jpeg" },
            { id: 5, src: "img/luz.jpeg" }
        ]
    };

    // Mostrar imágenes
    ParroquiaObj.fotos.forEach(foto => {

        const div = document.createElement("div");
        div.classList.add("gallery-item");

        div.innerHTML = `<img src="${foto.src}" alt="Imagen ${foto.id}">`;

        container.appendChild(div);
    });

    // MODAL
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const close = document.querySelector(".close");

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    close.onclick = () => modal.style.display = "none";
});