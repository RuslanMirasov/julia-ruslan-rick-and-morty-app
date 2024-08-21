import { Header } from "./components/header/header.js";
import { NavButton } from "./components/nav-button/nav-button.js";
import { Pagination } from "./components/nav-pagination/nav-pagination.js";
import { renderCardsMarkup, loadImages } from "./components/card/card.js";
import { getSerchQuery } from "./components/search-bar/search-bar.js";
import {
  getNextPage,
  getPrevPage,
  updateNavigation,
} from "./components/nav-pagination/nav-pagination.js";

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

const bodyElement = document.querySelector('[data-js="body"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');

const goToNextPage = () => {
  fetchCharacters(getNextPage(page, maxPage));
};

const goToPrevPage = () => {
  fetchCharacters(getPrevPage(page));
};

export const prevButton = NavButton(
  "button--prev",
  "button-prev",
  "previous",
  true,
  goToPrevPage
);
export const nextButton = NavButton(
  "button--next",
  "button--next",
  "next",
  false,
  goToNextPage
);
export const pagination = Pagination();

navigation.append(prevButton, pagination, nextButton);

const updateStates = (info, currentPage) => {
  if (info) {
    page = currentPage;
    maxPage = info.pages;
  }
};

async function fetchCharacters(page = 1, query = searchQuery) {
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${query}`;
  try {
    const data = await fetch(url);
    const cards = await data.json();
    updateStates(cards.info, page);
    updateNavigation(page, maxPage);
    renderCardsMarkup(cards.results);
    loadImages();
  } catch (error) {
    console.log("error:", error);
  }
}

bodyElement.insertAdjacentElement("afterbegin", Header());

searchBar.addEventListener("submit", (e) => {
  searchQuery = getSerchQuery(e);
  fetchCharacters();
});

fetchCharacters();
