'use strict';

window.addEventListener(`DOMContentLoaded`, () => {

  function searchCity() {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
      searchInput = document.querySelector(`input.search`),
      matchesList = document.querySelector(`ul.suggestions`),
      cities = [];

    fetch(endpoint)
      .then(ans => ans.json())
      .then(data => cities.push(...data));

    function formatNumber(num) {
      return num.replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
    }

    function findMatches(stringToMatch, cities) {
      return cities.filter(place => {
        // if the city or state matches with that we searched
        // we have to create a variable that contains a string we are searching for. It has to be a variable, but we can't put a variable inside a regular expression. so we have to create a regexp outside
        const regex = new RegExp(stringToMatch, `gi`);
        return place.city.match(regex) || place.state.match(regex);
      });
    }
    function displayMatch() {
      const matchArray = findMatches(this.value, cities);
      const res = matchArray.map(item => {
        const regex = new RegExp(this.value, `gi`);
        const cityName = item.city.replace(regex, `<span class="highlighted">${this.value}</span>`);
        const stateName = item.state.replace(regex, `<span class="highlighted">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${formatNumber(item.population)}</span>
          </li>
        `;
      }).join(``); // comma was appearing because of it is an array
      matchesList.innerHTML = res;
    }

    searchInput.addEventListener(`keyup`, displayMatch);

  }

  searchCity();
});