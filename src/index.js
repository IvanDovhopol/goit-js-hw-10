import { tooManyResultsCountryAlert, countryNotFoundAlert } from './js/alerts';
import { markupPreview, searchedCountryFoundMarkup } from './js/markup';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import './sass/_common.scss';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
  const countryName = e.target.value.trim();

  if (countryName === '') {
    return resetMarkup();
  }

  fetchCountries(countryName)
    .then(country => {
      resetMarkup();

      if (country.length === 1) {
        renderCountryData('countryInfo', searchedCountryFoundMarkup, country);
      } else if (country.length >= 10) {
        tooManyResultsCountryAlert();
      } else {
        renderCountryData('countryList', markupPreview, country);
      }
    })
    .catch(countryNotFoundAlert);
}

function resetMarkup() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function renderCountryData(position, render, country) {
  refs[position].insertAdjacentHTML('beforeend', render(country));
}
