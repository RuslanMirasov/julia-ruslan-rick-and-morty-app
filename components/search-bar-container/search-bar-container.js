import { SearchBar } from "../search-bar/search-bar.js";

export const SearchBarContainer = () => {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");
  searchBarContainer.setAttribute("data-js", "search-bar-container");

  const searchBar = SearchBar();
  searchBarContainer.append(searchBar);

  return searchBarContainer;
};
