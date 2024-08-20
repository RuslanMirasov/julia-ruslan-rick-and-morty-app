import { fetchCharacters } from "../../index.js";

export const goToNextPage = (nextPage, currentPage) => {
  if (nextPage) {
    currentPage++;
    fetchCharacters(nextPage);
  }
};

export const goToPrevPage = (prevPage, currentPage) => {
  if (prevPage) {
    currentPage--;
    fetchCharacters(prevPage);
  }
};
