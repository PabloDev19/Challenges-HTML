// script.js
fetch("/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const box_cards = document.querySelectorAll(".summary-card");
    box_cards.forEach((e, index) => {
      console.log(e);
      const img = e.querySelector(".summary-text img");
      const texto = e.querySelector(".summary-text h3");
      const score = e.querySelector(".summary-info p > span");

      texto.innerHTML = data[index].category;
      img.setAttribute("src", data[index].icon);
      score.innerHTML = data[index].score;
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
