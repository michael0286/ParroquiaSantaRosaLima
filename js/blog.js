const articulos = [
    {
        "id": "art001",
        "titulo": "El Significado de Servir en el Altar",
        "fecha": "5 de Abril del 2026",
        "imagen": "img/altar.jpeg",
        "resumen": "Ser acólito es mucho más que una responsabilidad litúrgica. Es una vocación de servicio que nos acerca a Dios y a nuestra comunidad.",
        "contenido": "Ser acólito es mucho más que una responsabilidad litúrgica. Es una vocación de servicio que nos acerca a Dios y a nuestra comunidad parroquial de Guaimaca. Cada vez que un acólito enciende las velas, lleva la cruz procesional o asiste al sacerdote durante la Eucaristía, está participando de manera activa en el misterio de la fe. Este servicio no es solo un gesto externo, sino una expresión profunda de amor a Dios. Desde los primeros acólitos de nuestra parroquia, hemos visto cómo jóvenes que comenzaron con timidez se han convertido en líderes espirituales de su comunidad. El altar es una escuela de humildad, disciplina y fraternidad. Aquí aprendemos que el verdadero liderazgo consiste en servir, tal como lo enseñó Jesús cuando lavó los pies a sus discípulos."
    },
    {
        "id": "art002",
        "titulo": "Semana Santa 2026: Preparativos y Reflexión",
        "fecha": "10 de Abril del 2026",
        "imagen": "img/santa.jpeg",
        "resumen": "La Semana Santa es el momento más importante del año litúrgico. Conoce cómo los acólitos de Guaimaca se preparan para estas celebraciones.",
        "contenido": "La Semana Santa es el corazón del año litúrgico para los acólitos de la Parroquia Santa Rosa de Lima en Guaimaca. Durante estas fechas, los jóvenes que sirven en el altar tienen una participación especial en cada una de las celebraciones: el Domingo de Ramos, el Jueves Santo con el lavatorio de pies, el Viernes Santo con la Pasión del Señor, la Vigilia Pascual y la gran celebración del Domingo de Resurrección. Los preparativos comienzan semanas antes. Los acólitos repasan los gestos litúrgicos, se aseguran de que los implementos del altar estén en orden y participan en retiros espirituales para llegar con el corazón bien dispuesto. Este año, más de 15 jóvenes acólitos participaron activamente en todas las celebraciones de Semana Santa, siendo un ejemplo de compromiso y fe para toda la comunidad de Guaimaca."
    },
    {
        "id": "art003",
        "titulo": "La Luz que Nos Guía: Sábado de Gloria",
        "fecha": "4 de abril del 2026",
        "imagen": "img/fogo.jpeg",
        "resumen": "Celebración de la Bendición del Fuego y del Nuevo Cirio Pascual: La Luz de Cristo que Ilumina Nuestro Camino hacia la Vida Eterna en el Sábado de Gloria",
        "contenido": "La bendición del fuego y del nuevo Cirio Pascual, un momento lleno de fe y significado para nuestra comunidad. Este símbolo representa la luz que encendemos en nuestros corazones y que está llamada a brillar siempre en nuestras vidas, recordándonos la presencia constante de Dios. Esta luz es signo de la Resurrección de Nuestro Señor Jesucristo, la verdadera Luz del mundo, que vence la oscuridad y nos llena de esperanza. A través de ella, somos guiados en nuestro caminar diario, iluminando nuestro camino hacia una vida llena de amor, fe y esperanza, y conduciéndonos finalmente hacia la vida eterna. Celebración solemne del Sábado de Gloria, donde renovamos nuestra fe y compromiso como cristianos."
    },
    {
        "id": "art004",
        "titulo": "Formación Espiritual: Encuentro de Acólitos 2026",
        "fecha": "15 de Febrero del 2026",
        "imagen": "img/congreso.jpeg",
        "resumen": "Este año celebramos nuestro encuentro anual de formación espiritual donde los acólitos de toda la región se reunieron en Guaimaca.",
        "contenido": "En febrero de 2026, la Parroquia Santa Rosa de Lima tuvo el honor de ser sede del Encuentro Regional de Acólitos de Francisco Morazán. Durante dos días, jóvenes de distintas parroquias se reunieron en Guaimaca para compartir experiencias, recibir formación litúrgica y fortalecer su vida espiritual. El encuentro incluyó talleres sobre el significado de cada elemento litúrgico, práctica de los gestos y movimientos en la misa, una noche de adoración al Santísimo y una convivencia fraternal que dejó amistades para toda la vida. El padre encargado de la parroquia destacó la importancia de estos encuentros para que los acólitos no se sientan solos en su misión y comprendan que son parte de una Iglesia más grande. Fue un fin de semana lleno de fe, alegría y compromiso renovado con el servicio en el altar."
    },
];

let vistaActual = "lista";

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista();

    document.getElementById("btnVolver").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        mostrarLista();
    });
});

function mostrarLista() {
    vistaActual = "lista";

    document.getElementById("blogContainer").style.display = "flex";
    document.getElementById("blogDetail").style.display = "none";

    let contenedor = document.getElementById("blogContainer");
    contenedor.innerHTML = "";

    articulos.forEach((art) => {
        let card = document.createElement("DIV");
        card.classList.add("blog-card");
        card.dataset.id = art.id;

        let img = document.createElement("DIV");
        img.classList.add("blog-card-img");
        img.innerHTML = `<img src="${art.imagen}" alt="${art.titulo}" />`;

        let info = document.createElement("DIV");
        info.classList.add("blog-card-info");
        info.innerHTML = `
            <span class="blog-card-fecha">${art.fecha}</span>
            <h3>${art.titulo}</h3>
            <p>${art.resumen}</p>
            <button class="blog-card-btn">Leer más →</button>
        `;

        card.appendChild(img);
        card.appendChild(info);
        contenedor.appendChild(card);

        card.querySelector(".blog-card-btn").addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            mostrarDetalle(art.id);
        });
    });
}

function mostrarDetalle(id) {
    vistaActual = "detalle";

    let art = articulos.find((a) => a.id === id);
    if (art === null || art === undefined) return;

    document.getElementById("blogContainer").style.display = "none";
    document.getElementById("blogDetail").style.display = "block";

    document.getElementById("blogDetailContent").innerHTML = `
        <span class="blog-detail-fecha">${art.fecha}</span>
        <h2>${art.titulo}</h2>
        <img src="${art.imagen}" alt="${art.titulo}" class="blog-detail-img" />
        <p>${art.contenido}</p>
    `;
}