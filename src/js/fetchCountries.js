const BASE_URL = 'https://restcountries.com/v3.1/name/';
const filterResponse = 'fields=name,capital,population,flags,languages';

export function fetchCountries(countryName) {
  return fetch(`${BASE_URL}${countryName}?${filterResponse}`)
    .then(response => response.json())
    .catch(console.log);
}
