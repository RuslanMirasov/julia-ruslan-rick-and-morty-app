export const NavButton = (className, attr, text) => {
  return `
      <button class="button ${className}" data-js="${attr}">
        ${text}
      </button>
   `;
};
