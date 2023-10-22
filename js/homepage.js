const userCard = document.querySelector("User-cards");
// Arrays
const users = [
  {
    name: "Anna",
    title: "mmmmm, tasty",
    time: "10 min",
    image: { src: "hamburger.avif", title: "Hamburger title" },
  },
  {
    name: "Roger",
    title: "You gotta try this",
    time: "20 min",
    image: { src: "pasta.avif", title: "Pasta title" },
  },
  {
    name: "Mina",
    title: "See what I made",
    time: "45 min",
    image: { src: "pizza.avif", title: "Pizza title" },
  },
  {
    name: "Hans",
    title: "Easy and fast",
    time: "60 min",
    image: { src: "Salad.avif", title: "Salad title" },
  },
];
//  Function to create a user card
function createUserCard(user) {
  const randomCardIndex = Math.floor(Math.random() * names.length);
  const user = users[randomCardIndex];

  userCard.innerHTML = `
    <img src=${image[randomCardIndex].src} alt="User" class="user-img" />
    <h2>${image[randomCardIndex].title}</h2>
    <div class="container">
      }
      <h3>${titles[randomCardIndex]}</h3>
      <p>${time[randomCardIndex]}</p>
    </div>
  `;
  userCard.appendChild(userCard);
}

// Create multiple user cards
for (let i = 0; i < 4; i++) {
  createUserCard();
}
// Test
//
// userCard.innerHTML = `
//   <img src="${user.image.src}" alt="User" class="user-img" />
//   <h2>${user.name}</h2>
//   <div class="container">
//     ${createImageElement(user.image.src, user.image.title).outerHTML}
//     <h3>${user.title}</h3>
//     <p>${user.time}</p>
//   </div>
// `;

// PAGE SWITCHERS//
const homePage = document.querySelector("#home-page");
const shoppingCartPage = document.querySelector("#shopping-page");
const userPage = document.querySelector("#user-page");

//const listpage = document.querySelector("#list-page").addEventListener("click", function () {});;
homePage.addEventListener("click", function () {
  location.href = "./homepage.html";
});
shoppingCartPage.addEventListener("click", function () {
  location.href = "./handlekurv.html";
});
userPage.addEventListener("click", function () {
  location.href = "./userpage.html";
});
//const recepice = document.querySelector("#recepiece-page").addEventListener("click", function () {});;
