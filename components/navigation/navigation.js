import { getState, setState } from "../../index.js";
import { NavButton } from "../nav-button/nav-button.js";
import { Pagination } from "../nav-pagination/nav-pagination.js";

export const Navigation = () => {
  const navigation = document.createElement("nav");
  navigation.classList.add("navigation");

  const handleClickNext = () => {
    let { page, maxPage } = getState();
    if (page < maxPage) {
      page++;
    }
    setState(page);
  };

  const handleClickPrev = () => {
    let { page } = getState();
    if (page > 1) {
      page--;
    }
    setState(page);
  };

  const pagination = Pagination();
  const prevButton = NavButton("button--prev", "button-prev", "previous", true, handleClickPrev);
  const nextButton = NavButton("button--next", "button--next", "next", false, handleClickNext);

  navigation.append(prevButton, pagination, nextButton);

  return navigation;
};

export const hideNavigation = (navigation) => {
  navigation.style.display = "none";
};

export const updateNavigation = (navigation, page, maxPages) => {
  const pagination = navigation.querySelector('[data-js="pagination"]');
  const prevButton = navigation.querySelector('[data-js="button-prev"]');
  const nextButton = navigation.querySelector('[data-js="button--next"]');
  if (maxPages > 1) {
    navigation.style.display = "inline-flex";
    pagination.innerHTML = `${page} / ${maxPages}`;
    page === 1 ? prevButton.setAttribute("disabled", true) : prevButton.removeAttribute("disabled");
    page === maxPages ? nextButton.setAttribute("disabled", true) : nextButton.removeAttribute("disabled");
    return;
  }
  navigation.style.display = "none";
};
