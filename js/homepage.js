document.addEventListener("DOMContentLoaded", function () {
  const userCard = document.querySelector("#user-cards");
  const userName = document.querySelector("#username");

  // Define pages
  const pages = {
    homePage: document.querySelector("#home-page"),
    shoppingCartPage: document.querySelector("#shopping-page"),
    userPage: document.querySelector("#user-page"),
    listpage: document.querySelector("#list-page"),
  };

  // Set the username based on sessionStorage
  userName.textContent = `${sessionStorage.getItem("currName")}'s feed`;

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

  // Create a function to handle the like button
  function handleLikeButton(likeButton, likeCount, i) {
    let count = 0;
    const savedCount = localStorage.getItem(`likeCount${i}`); // Use a unique key for each like button

    if (savedCount) {
      count = parseInt(savedCount);
      likeCount.innerText = count;
    }

    likeButton.addEventListener("click", () => {
      count++;
      likeCount.innerText = count;
      localStorage.setItem(`likeCount${i}`, count.toString()); // Use a unique key for each like button
    });
  }

  // Create user cards
  function createUserCard() {
    const randomCardIndex = Math.floor(Math.random() * users.length);

    for (let i = 0; i < 4; i++) {
      let differentLikes = `<button id="likeButton${i}" class="likeButtonstyle">Like</button>
      <span id="likeCount${i}">0</span>`;

      // Create a new user card element
      const userCardElement = document.createElement("div");
      userCardElement.innerHTML = `<div style="border: 2px solid #9fb96e">
        <img src="${users[randomCardIndex].image.src}" alt="User" class="user-img" />
        <h2>${users[randomCardIndex].image.title}</h2>
        <div class="container">
          <h3>${users[randomCardIndex].title}</h3>
          <p>${users[randomCardIndex].time}</p>
          ${differentLikes}
        </div>
      </div>`;

      // Append the user card to the DOM
      userCard.appendChild(userCardElement);

      // Select the likeButton and likeCount elements
      const likeButton = document.getElementById(`likeButton${i}`);
      const likeCount = document.getElementById(`likeCount${i}`);

      // Handle the like button for this card
      handleLikeButton(likeButton, likeCount, i);
    }
  }

  // Create multiple user cards
  createUserCard();

  // Add click event listeners for page navigation
  pages.listpage.addEventListener("click", function () {
    location.href = "./list.html";
  });
  pages.homePage.addEventListener("click", function () {
    location.href = "./homepage.html";
  });
  pages.shoppingCartPage.addEventListener("click", function () {
    location.href = "./handlekurv.html";
  });
  pages.userPage.addEventListener("click", function () {
    location.href = "./userpage.html";
  });
});
