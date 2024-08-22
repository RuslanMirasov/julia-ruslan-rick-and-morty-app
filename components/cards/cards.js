export const Cards = () => {
  const cards = document.createElement("ul");
  cards.classList.add("card-container", "pending");
  cards.setAttribute("data-js", "card-container");

  return cards;
};
