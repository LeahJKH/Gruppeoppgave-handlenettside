const userCard = document.querySelector("User-cards");
// Arrays
const names = ["Anna", "Roger", "Mina", "Hans"];
const titles = [
  "mmmmm, tasty",
  "You gotta try this",
  "See what i made",
  "Easy and fast",
];
const time = ["10 min", "20 min", "45min,", "60 min"];
// image create and array
const images = [
  { src: "hamburger.avif", title: "Hamburger title" },
  { src: "pasta.avif", title: "Pasta title" },
  { src: "pizza.avif", title: "Pizza title" },
  { src: "Salad.avif", title: "Salad title" },
];
// Function to create an image element
function createImageElement(src, title) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
}
//  Function to create a user card
function createUserCard() {
  const randomCardIndex = Math.floor(Math.random() * names.length);
  const userCard = document.querySelector("#user-food");
  userCard.innerHTML = `
    <img src="" alt="User" class="user-img" />
    <h2>${names[randomCardIndex]}</h2>
    <div class="container">
      ${
        createImageElement(
          images[randomCardIndex].src,
          images[randomCardIndex].title
        ).outerHTML
      }
      <h3>${titles[randomCardIndex]}</h3>
      <p>${times[randomCardIndex]}</p>
    </div>
  `;
  userCardContainer.appendChild(userCard);
}

// Create multiple user cards
for (let i = 0; i < 4; i++) {
  createUserCard();
}
