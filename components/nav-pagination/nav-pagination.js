export const Pagination = () => {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  pagination.innerHTML = "1 / 1";

  return pagination;
};
