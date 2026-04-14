// Loop While

let i = 0;

while (i < 10) {
    console.log(i);
}

// Loop do while

let x = 0;

do {
    console.log("Hola")
} while (x < 10);

// Loop For
for (let z = 0; z < 10; z++) {
    console.log(z);

}


const ParroquiaObj =
{
  "parroquia": "Santa Rosa de Lima",
  "acolitos": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "rango": "Acolito Mayor",
      "activo": true
    },
    {
      "id": 2,
      "nombre": "María García",
      "rango": "Monitora",
      "activo": true
    }
  ]
}



ParroquiaObj.acolitos.forEach((acolito) => {
    console.log(`ID: ${acolito.id}`);
    console.log(`Nombre: ${acolito.nombre}`);
    console.log(`Cargo: ${acolito.rango}`);
});