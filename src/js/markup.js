export function markupPreview(country) {
  return country
    .map(({ name, flags }) => {
      return `<li class="country-list__item">
              
              <img class="country-list__flag" src="${flags.svg}" alt='${name.official}' width="100" height="50" />
              <div style="margin-left: 60px"><h2 class="country-list__pretitle">${name.official}</h2></div>
          </li>`;
    })
    .join('');
}

export function searchedCountryFoundMarkup(country) {
  return country
    .map(({ name, capital, population, flags, languages }) => {
      const languagesValue = Object.values(languages).join(', ');

      return `
      <li class="country-info__item">
          <img class="country-info__item--flag" width='200' height='120' src="${flags.svg}" alt="${name.official}">
          <h1 class="country-info__item--name">${name.official}</h1>
      </li>
      <li class="country-info__item"><b>Capital:</b> ${capital}</li>
      <li class="country-info__item"><b>Population:</b> ${population}</li>
      <li class="country-info__item"><b>languages:</b> ${languagesValue}</li>
      `;
    })
    .join('');
}
