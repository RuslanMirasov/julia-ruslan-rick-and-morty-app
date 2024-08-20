import { renderCardsMarkup } from "./components/card/card.js";
import {
  goToNextPage,
  goToPrevPage,
} from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let nextPage = null;
let prevPage = null;
let page = 1;
const searchQuery = "";

const updateStates = (info) => {
  const { pages, next, prev } = info;
  page = next ? Number(next?.split("page=")[1]) - 1 : maxPage;
  nextPage = next;
  prevPage = prev;
  maxPage = pages;
  pagination.innerHTML = `${page} / ${maxPage}`;
};

export async function fetchCharacters(url) {
  cardContainer.innerHTML = "";
  try {
    const data = await fetch(url);
    const cards = await data.json();
    updateStates(cards.info);
    renderCardsMarkup(cards.results, cardContainer);
  } catch (error) {
    console.log("error:", error);
  }
}

nextButton.addEventListener("click", () => {
  goToNextPage(nextPage, page);
});
prevButton.addEventListener("click", () => {
  goToPrevPage(prevPage, page);
});

fetchCharacters("https://rickandmortyapi.com/api/character?page=1");
