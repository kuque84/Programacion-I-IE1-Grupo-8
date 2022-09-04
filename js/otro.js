let perrosEncontrados = [{
    breed: "Beagle",
    color: "blanco"
  },

  {
    raza: "Chihuahua",
    color: "amarillo"
  },

  {
    breed: "Pug",
    color: "negro"
  },
]

function encuentraMiPerro(perro) {
  return perro.raza === "Chihuahua"
  
}

let miPerro = perrosEncontrados.find(perro => encuentraMiPerro(perro));
console.log(perro)
console.log(miPerro);


/*

{
  raza: "Chihuahua",
  color: "amarillo"
}

*/