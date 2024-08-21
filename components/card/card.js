import { showNonFoundMassege } from "../notfound/notfound.js";
import { cardContainer } from "../../index.js";
import { hideNavigation } from "../nav-pagination/nav-pagination.js";

function createCharacterCard(card) {
  const { image, name, status, type, episode } = card;
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
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${episode.length}</dd>
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
