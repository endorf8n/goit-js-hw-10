import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  select: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
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
  .catch(err => Notify.failure(refs.error.textContent));

const onSelectChange = event => {
  const breedId = refs.select.value;

  fetchCatByBreed(breedId)
    .then(data => {
      const infoAboutCat = data[0].breeds[0];

      const markup = `<img src="${data[0].url}" alt="" width="300" height="auto">
       <div><h1 class="title">${infoAboutCat.name}</h1>
       <p class="descr">${infoAboutCat.description}</p>
       <p><span class="cat-temp">Temperament:</span> ${infoAboutCat.temperament}</p></div>`;

      refs.container.innerHTML = markup;
    })
    .catch(err => Notify.failure(refs.error.textContent));
};

refs.select.addEventListener('change', onSelectChange);
