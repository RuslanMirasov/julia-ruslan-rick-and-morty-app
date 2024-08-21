export const Header = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerImage = document.createElement("img");
  headerImage.setAttribute("src", "./assets/logo.png");
  headerImage.setAttribute("alt", "Rick and Morty");

  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("title");
  headerTitle.innerHTML = "Rick and Morty";

  header.append(headerImage, headerTitle);

  return header;
};
