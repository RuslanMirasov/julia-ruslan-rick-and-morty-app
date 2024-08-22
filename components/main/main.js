import { SearchBarContainer } from "../search-bar-container/search-bar-container.js";
import { Cards } from "../cards/cards.js";

export const Main = () => {
  const main = document.createElement("main");
  main.append(SearchBarContainer(), Cards());

  return main;
};
