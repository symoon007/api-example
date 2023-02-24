const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  const countryContainer = document.getElementById("all-country-list");
  countries.forEach((country) => {
    console.log(country.cca2);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0] : "...."}</h4>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        
        `;
    countryContainer.appendChild(div);
  });
};
const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetails(data[0]))
};
const showCountryDetails = (country) => {
     console.log(country);
  const detailContainer = document.getElementById("country-details");
 
  detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <h4>Capital: ${country.capital ? country.capital[0] : "...."}</h4
    <img src="${country.flags}">
    `;
};

loadCountries()