let peoples = [];

// Cargar datos del JSON
fetch("/people.json")
  .then((response) => response.json())
  .then((data) => {
    peoples = data; // Guardar los datos en la variable
    console.log("Datos cargados:", peoples); // Mostrar los datos cargados
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));

// Obtener el input del buscador
const buscador = document.getElementById("buscador");

// Agregar evento "change" al buscador
buscador.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  console.log("Valor ingresado:", searchValue);

  fetch("/people.json")
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => console.error("Error al cargar el JSON:", error));

  // Filtrar resultados
  /*const resultados = peoples.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchValue) ||
      person.lastname.toLowerCase().includes(searchValue)
    );
  });*/

  // Mostrar resultados en la consola (puedes adaptarlo para mostrarlo en HTML)
  //console.log("Resultados de búsqueda:", resultados);
});
