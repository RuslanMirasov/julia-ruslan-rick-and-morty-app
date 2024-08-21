import {
  getSerchQuery,
  SearchBar,
} from "./components/search-bar/search-bar.js";

import {
  getNextPage,
  getPrevPage,
  updateNavigation,
} from "./components/nav-pagination/nav-pagination.js";
import { Header } from "./components/header/header.js";
import { NavButton } from "./components/nav-button/nav-button.js";
import { Pagination } from "./components/nav-pagination/nav-pagination.js";
import { renderCardsMarkup, loadImages } from "./components/card/card.js";

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const bodyElement = document.querySelector('[data-js="body"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const navigation = document.querySelector('[data-js="navigation"]');

const handleSubmit = (e) => {
  searchQuery = getSerchQuery(e);
  fetchCharacters();
};

const handleClickNext = () => {
  fetchCharacters(getNextPage(page, maxPage));
};

const handleClickPrev = () => {
  fetchCharacters(getPrevPage(page));
};

export const pagination = Pagination();

export const prevButton = NavButton(
  "button--prev",
  "button-prev",
  "previous",
  true,
  handleClickPrev
);
export const nextButton = NavButton(
  "button--next",
  "button--next",
  "next",
  false,
  handleClickNext
);

bodyElement.insertAdjacentElement("afterbegin", Header());
navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(SearchBar(handleSubmit));

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

fetchCharacters();
