import { prevButton, nextButton, navigation, pagination } from "../../index.js";

export const hideNavigation = () => {
  navigation.style.display = "none";
};

export const updateNavigation = (page, pages) => {
  if (pages > 1) {
    navigation.style.display = "inline-flex";
    pagination.textContent = `${page} / ${pages}`;
    return;
  }
  navigation.style.display = "none";
};

export const getNextPage = (page, max) => {
  if (page < max) {
    page++;
    page === max && nextButton.setAttribute("disabled", true);
    prevButton.removeAttribute("disabled");
  }
  return page;
};

export const getPrevPage = (page) => {
  if (page > 1) {
    page--;
    page === 1 && prevButton.setAttribute("disabled", true);
    nextButton.removeAttribute("disabled");
  }
  return page;
};
