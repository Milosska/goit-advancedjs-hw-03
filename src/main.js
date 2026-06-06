import { generateErrorToastMessage } from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

const refs = {
  searchForm: document.querySelector('.form'),
};

const errorMessages = {
  emptySearchQuery: 'Search query should not be empty!',
  noImagesFound:
    'Sorry, there are no images matching your search query. Please try again!',
};

const onSearchSubmit = event => {
  event.preventDefault();
  const form = event.currentTarget;
  const searchQuery = form.elements['search-text'].value.trim();

  if (!searchQuery) {
    generateErrorToastMessage(errorMessages.emptySearchQuery);
    return;
  }

  getImagesByQuery(searchQuery)
    .then(({ data: { hits } }) => {
      if (!hits.length) {
        generateErrorToastMessage(errorMessages.noImagesFound);
        return;
      }

      console.log(hits);
    })
    .catch(error => console.log(error))
    .finally();
};

refs.searchForm.addEventListener('submit', onSearchSubmit);
