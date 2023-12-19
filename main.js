import './style.css';

const url = `https://restcountries.com/v3.1/all`;
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // Ajoutez d'autres éléments à mettre à jour pour le mode sombre ici
  const inputs = document.getElementById("searchInput");
  inputs.classList.toggle("dark-mode")
  const Dark = document.querySelector(".button")
  Dark.classList.toggle("dark-mode")
  // Mettez à jour les cartes individuelles avec la classe dark-mode
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.toggle('dark-mode'));
};

const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Dark Mode";
darkModeBtn.addEventListener("click", toggleDarkMode);
document.body.appendChild(darkModeBtn);


const searchInput = document.querySelector("#searchInput");
const resultContainer = document.createElement("div");
resultContainer.setAttribute("class", "container");

document.body.appendChild(searchInput);
document.body.appendChild(resultContainer);

let originalData = []; // Stocke une copie originale des données
let displayedData = []; // Stocke les données affichées

const fetchUser = async () => {
  try {
    const response = await fetch(url);
    originalData = await response.json();
    displayedData = [...originalData]; // Initialise displayedData avec les données originales
  } catch (error) {
    console.log("error ===========>", error);
  }
};

const displayUser = (item) => {
  resultContainer.innerHTML = ""; // Efface les résultats précédents

  for (let el of item) {
    let template = document.createElement('div');
    template.setAttribute("class", "card");
    template.innerHTML = `
      <img  class ="img" src=${el.flags.png} alt="??"/>
      <h3>${el.name.common}</h3>
      <p><b>Capitale:</b> ${el.capital}</p>
      <p><b>Continent:</b>${el.continents}</p>`;
    resultContainer.appendChild(template);
  }
};

const fetchedData = async () => {
  await Promise.all([fetchUser()]);

  const searchByName = (arr, searchedName) => {
    return arr.filter((item) =>
      item.name.common.toLowerCase().includes(searchedName.toLowerCase())
    );
  };

  searchInput.addEventListener("input", function (e) {
    const countryName = e.target.value;
    console.log(countryName);
    displayedData = searchByName(originalData, countryName);
    console.log("filterData=>",displayedData);
    displayUser(displayedData);
  });

  displayUser(displayedData);
};

fetchedData();
