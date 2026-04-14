const eventos = [
    {
        nombre: "Rezar Santo Rosario",       
        fecha: "2026-04-21",
        hora: "08:00",
        lugar: "Parroquia Santa Rosa de Lima", 
        imagen: "img/Martes_Desk.jpeg",
        descripcion: "El Santo Rosario no es solo una oración, es un encuentro profundo con Dios a través de la Virgen María. Te invitamos a participar en este evento espiritual que une a la comunidad en un momento de paz, reflexión y fe compartida."
    },
    {
        nombre: "Desfile Procesional",
        fecha: "2026-04-22",
        hora: "16:00",
        lugar: "Salón Parroquial",
        imagen: "img/Desfile.jpeg",
        descripcion: "El servicio en el altar es un ministerio que requiere disciplina, respeto y amor por la liturgia. Para crecer en este servicio, es fundamental cultivar una actitud de oración y disponibilidad. El acólito debe llegar con puntualidad, preparado interiormente y con conocimiento de las funciones que desempeñará.",
    },
    {
        nombre: "Misa Especial",
        descripcion: "Celebración especial con participación de todos los acólitos.",
        fecha: "2026-02-10",
        hora: "18:00",
        lugar: "Capilla",
    }
];


function obtenerEventoMasCercano() {
    const hoy = new Date();
    const futuros = eventos.filter(e => new Date(e.fecha) >= hoy);
    futuros.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    return futuros[0];
}


function mostrarEventoPrincipal() {
    const evento = obtenerEventoMasCercano();

    if (!evento) return;

    document.getElementById("tituloPrincipal").textContent = evento.nombre;

    document.getElementById("fechaLugar").textContent =
        `${evento.fecha} - ${evento.lugar}`;

    document.getElementById("descripcionPrincipal").textContent =
        evento.descripcion;

    document.getElementById("imagenEvento").src = evento.imagen;
}


const contenedorEventos = document.getElementById("eventos");

function mostrarEventos(lista) {
    contenedorEventos.innerHTML = "";
    const hoy = new Date();

    lista.forEach(e => {
        const fechaEvento = new Date(e.fecha);

        const div = document.createElement("div");
        div.classList.add("evento");

        if (fechaEvento >= hoy) {
            div.classList.add("futuro");
        } else {
            div.classList.add("pasado");
        }

        const titulo = document.createElement("h3");
        titulo.textContent = e.nombre;

        const desc = document.createElement("p");
        desc.textContent = e.descripcion;

        const fechaHora = document.createElement("p");
        fechaHora.textContent = `📅 ${e.fecha} | ⏰ ${e.hora}`;

        const lugar = document.createElement("p");
        lugar.textContent = `📍 ${e.lugar}`;

        div.appendChild(titulo);
        div.appendChild(desc);
        div.appendChild(fechaHora);
        div.appendChild(lugar);

        contenedorEventos.appendChild(div);
    });
}


function mostrarAgenda() {
    document.getElementById("principal").style.display = "none";
    document.getElementById("agenda").style.display = "block";
}

function volver() {
    document.getElementById("agenda").style.display = "none";
    document.getElementById("principal").style.display = "flex";
}


function filtrar(tipo) {
    const hoy = new Date();

    if (tipo === "futuro") {
        mostrarEventos(eventos.filter(e => new Date(e.fecha) >= hoy));
    } else if (tipo === "pasado") {
        mostrarEventos(eventos.filter(e => new Date(e.fecha) < hoy));
    } else {
        mostrarEventos(eventos);
    }
}


document.getElementById("btnAgenda").addEventListener("click", mostrarAgenda);


mostrarEventoPrincipal();
mostrarEventos(eventos);