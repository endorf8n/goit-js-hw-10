import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const refs = {
  select: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(data => {
    console.log(data);
    const cats = data
      .map(cat => {
        return `<option value="${cat.id}">${cat.name}</option>`;
      })
      .join('');
    refs.select.insertAdjacentHTML('beforeend', cats);
  })
  .catch(err => console.log(err));

const onSelectChange = event => {
  const breedId = refs.select.value;

  fetchCatByBreed(breedId)
    .then(data => {
      const infoAboutCat = data[0].breeds[0];

      const markup = `<img src="${data[0].url}" alt="" width="300" height="auto">
       <h1>${infoAboutCat.name}</h1>
       <p>${infoAboutCat.description}</p>
       <p>Temperament: ${infoAboutCat.temperament}</p>`;

      refs.container.innerHTML = markup;
    })
    .catch(err => console.log(err));
};

refs.select.addEventListener('change', onSelectChange);
