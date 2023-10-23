document.addEventListener("DOMContentLoaded", function () {
  const userCard = document.querySelector("#user-cards"); // Corrected the selector

  //!! current pages !!//
  const pages = {
    homePage: document.querySelector("#home-page"),
    shoppingCartPage: document.querySelector("#shopping-page"),
    userPage: document.querySelector("#user-page"),
    listpage: document.querySelector("#list-page"),
  };
  //!! current pages !!//

  const users = [
    {
      name: "Anna",
      title: "mmmmm, tasty",
      time: "60 min",
      image: { src: "./images/hamburger.avif", title: "Hamburger title" },
    },
    {
      name: "Roger",
      title: "You gotta try this",
      time: "20 min",
      image: { src: "./images/pasta.avif", title: "Pasta title" },
    },
    {
      name: "Mina",
      title: "See what I made",
      time: "45 min",
      image: { src: "./images/pizza.avif", title: "Pizza title" },
    },
    {
      name: "Hans",
      title: "Easy and fast",
      time: "10 min",
      image: { src: "./images/Salad.avif", title: "Salad title" },
    },
  ];

  // Like button function
  const likeButton = document.getElementById("likeButton");
  const likeCount = document.getElementById("likeCount");
  let count = 0;

  // Retrieve the initial count from localStorage, or set it to 0 if it doesn't exist
  const savedCount = localStorage.getItem("likeCount");
  if (savedCount) {
    count = parseInt(savedCount);
    likeCount.innerText = count;
  }

  likeButton.addEventListener("click", () => {
    count++;
    likeCount.innerText = count;
    localStorage.setItem("likeCount", count.toString());
  });
  //Create card
  function createUserCard() {
    const randomCardIndex = Math.floor(Math.random() * users.length);

    userCardElement.innerHTML = `
    <img src="${users[randomCardIndex].image.src}" alt="User" class="user-img" />
    <h2>${users[randomCardIndex].image.title}</h2>
    <div class="container">
      <h3>${users[randomCardIndex].title}</h3>
      <p>${users[randomCardIndex].time}</p>
    </div>
  `;

    userCard.appendChild(userCardElement);
  }

  // Create multiple user cards
  for (let i = 0; i < 4; i++) {
    createUserCard();
  }

  //!! Page switchers !!//
  //const recepice = document.querySelector("#recepiece-page").addEventListener("click", function () {});;
  pages.listpage.addEventListener("click", function () {
    location.href = "./list.html";
  }); // makes the button clickable and changes page
  pages.homePage.addEventListener("click", function () {
    location.href = "./homepage.html";
  }); // makes the button clickable and changes page
  pages.shoppingCartPage.addEventListener("click", function () {
    location.href = "./handlekurv.html";
  }); // makes the button clickable and changes page
  pages.userPage.addEventListener("click", function () {
    location.href = "./userpage.html";
  }); // makes the button clickable and changes page
  //!! Page switchers !!//
});
