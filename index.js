import { renderCardsMarkup } from "./components/card/card.js";
import { getSerchQuery } from "./components/search-bar/search-bar.js";
import {
  getNextPage,
  getPrevPage,
  updateNavigation,
} from "./components/nav-pagination/nav-pagination.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

const updateStates = (info, currentPage) => {
  if (info) {
    page = currentPage;
    maxPage = info.pages;
  }
};

async function fetchCharacters(page = 1, query = searchQuery) {
  cardContainer.classList.add("loading");
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${query}`;
  try {
    const data = await fetch(url);
    const cards = await data.json();
    updateStates(cards.info, page);
    updateNavigation(page, maxPage);
    renderCardsMarkup(cards.results);
  } catch (error) {
    console.log("error:", error);
  } finally {
    cardContainer.classList.remove("loading");
  }
}

nextButton.addEventListener("click", () => {
  fetchCharacters(getNextPage(page, maxPage));
});

prevButton.addEventListener("click", () => {
  fetchCharacters(getPrevPage(page));
});

searchBar.addEventListener("submit", (e) => {
  searchQuery = getSerchQuery(e);
  fetchCharacters();
});

fetchCharacters();
