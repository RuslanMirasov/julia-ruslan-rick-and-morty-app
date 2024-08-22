// Imports
import { Navigation, updateNavigation } from "./components/navigation/navigation.js";
import { renderCardsMarkup, loadImages } from "./components/card/card.js";
import { Header } from "./components/header/header.js";
import { Main } from "./components/main/main.js";

// State
let page = 1;
let maxPage = 1;
let searchQuery = "";

// Components
export const header = Header();
export const main = Main();
export const navigation = Navigation();

document.body.append(header, main, navigation);

// Methods
export const getState = () => {
  return {
    page,
    maxPage,
    searchQuery,
  };
};

export const setState = (newPage = page, newQuery = searchQuery) => {
  page = newPage;
  searchQuery = newQuery;
  fetchCharacters(page, searchQuery);
};

const fetchCharacters = async (currentPage = 1, query = searchQuery) => {
  const url = `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${query}`;
  const cardsContainer = main.querySelector('[data-js="card-container"]');
  cardsContainer.innerHTML = "";
  cardsContainer.classList.add("pending");

  try {
    const cards = await (await fetch(url)).json();
    page = currentPage;
    maxPage = cards?.info?.pages;
    updateNavigation(navigation, page, maxPage);
    renderCardsMarkup(cards.results);
    loadImages(main);
  } catch (error) {
    console.log("Fetch error: ", error);
  } finally {
    setTimeout(() => {
      cardsContainer.classList.remove("pending");
    }, 100);
  }
};

fetchCharacters();
