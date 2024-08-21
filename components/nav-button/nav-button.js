export const NavButton = (className, attr, text, disabled = false, onClick) => {
  const newButton = document.createElement("button");
  newButton.classList.add("button");
  newButton.classList.add(className);
  newButton.setAttribute("data-js", attr);
  if (disabled) {
    newButton.setAttribute("disabled", disabled);
  }
  newButton.innerHTML = text;

  if (onClick) {
    newButton.addEventListener("click", onClick);
  }

  return newButton;
};
