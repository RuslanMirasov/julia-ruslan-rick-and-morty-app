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

export const renderCardsMarkup = (cards, cardContainer) => {
  const cardsMarkup = [];
  cards.forEach((element) => {
    cardsMarkup.push(createCharacterCard(element));
  });
  cardContainer.innerHTML = cardsMarkup.join("");
};
