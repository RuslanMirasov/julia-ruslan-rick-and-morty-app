export const getSerchQuery = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const searchQuery = formData.get("query").replace(/\s+/g, " ").trim();
  form.reset();
  return searchQuery;
};

export const SearchBar = (onSubmit) => {
  const searchForm = document.createElement("form");
  searchForm.classList.add("search-bar");
  searchForm.setAttribute("action", "");
  searchForm.setAttribute("data-js", "search-bar");

  const inputForm = document.createElement("input");
  inputForm.classList.add("search-bar__input");
  inputForm.setAttribute("name", "query");
  inputForm.setAttribute("type", "text");
  inputForm.setAttribute("placeholder", "search characters");
  inputForm.setAttribute("aria-label", "character name");

  const searchButton = document.createElement("button");
  searchButton.classList.add("search-bar__button");
  searchButton.setAttribute("aria-label", "search for character");

  const searchButtonImage = document.createElement("img");
  searchButtonImage.classList.add("search-bar__icon");
  searchButtonImage.setAttribute("src", "assets/magnifying-glass.png");
  searchButtonImage.setAttribute("alt", "Rick & Morty");

  searchButton.append(searchButtonImage);
  searchForm.append(inputForm, searchButton);

  if (onSubmit) {
    searchForm.addEventListener("submit", onSubmit);
  }

  return searchForm;
};
