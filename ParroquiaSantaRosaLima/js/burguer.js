document.addEventListener("DOMContentLoaded", () => {
    const hb = document.querySelector(".burguer");
    const navbarList = document.querySelector(".navbar-list");
    
    const nv = document.createElement("DIV");
    nv.classList.add("mobile-nav");
    
    nv.innerHTML = `
        <img src="img/icons8-x-60.png" class="close-menu" alt="Cerrar menú">
        <ul>
            ${navbarList.innerHTML}
        </ul>
    `; 
    document.body.appendChild(nv);

    hb.addEventListener("click", (e) => {
        e.preventDefault();
        nv.classList.add("active");
    });

    nv.querySelector(".close-menu").addEventListener("click", () => {
        nv.classList.remove("active");
    });
});