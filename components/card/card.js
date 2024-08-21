import { showNonFoundMassege } from "../notfound/notfound.js";
import { cardContainer } from "../../index.js";
import { hideNavigation } from "../nav-pagination/nav-pagination.js";

function createCharacterCard(card) {
  const { image, name, status, type, episode } = card;
  const colorClass =
    status === "Alive"
      ? "greenText"
      : status === "Dead"
      ? "redText"
      : "grayText";

  const newCard = `
        <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${image} "
              alt="${name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <span><dt class="card__info-title">Status:</dt><dd class="card__info-description ${colorClass}">${status}</dd></span>
              <span><dt class="card__info-title">Type:</dt><dd class="card__info-description">${
                type ? type : "unknown"
              }</dd></span>
              <span><dt class="card__info-title">Occurrences:</dt><dd class="card__info-description">${
                episode.length
              }</dd></span>
            </dl>
          </div>
        </li>
    `;
  return newCard;
}

export const renderCardsMarkup = (cards) => {
  if (!cards) {
    cardContainer.innerHTML = showNonFoundMassege();
    hideNavigation();
    return;
  }

  const cardsMarkup = cards.map(createCharacterCard).join("");
  cardContainer.innerHTML = cardsMarkup;
};

export const loadImages = () => {
  const images = cardContainer.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("load", (e) => {
      e.target.style.opacity = "1";
    });
  });
};
