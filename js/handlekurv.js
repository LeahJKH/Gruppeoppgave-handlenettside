document.addEventListener("DOMContentLoaded", function () {
  //!! current pages !!//
  const pages = {
    homePage: document.querySelector("#home-page"),
    shoppingCartPage: document.querySelector("#shopping-page"),
    userPage: document.querySelector("#user-page"),
    listpage: document.querySelector("#list-page"),
    homepagebtn: document.querySelector("#homepagebtn"),
  };
  //!! current pages !!//

  // Function to update the cart display
  function updateCartDisplay() {
    const cartAmount = document.querySelector(".cartAmount");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartAmount.textContent = totalItems;
    localStorage.setItem("cartNumber", totalItems);
  }

  totalItems = localStorage.getItem("cartNumber");
  updateCartDisplay();
  // Function to add an item to the cart and store it in local storage
  function addToCart(item) {
    const { name, price } = item;

    // Get the cart from local storage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find((cartItem) => cartItem.name === name);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart display
    updateCartDisplay();
  }

  // Event listener to add "Lasagne" to the cart
  const addLasagneButton = document.getElementById("addLasagne");
  addLasagneButton.addEventListener("click", () => {
    const productName = "Lasagne";
    const price = 19;
    addToCart({ name: productName, price });
  });

  // Event listener to add "Burger" to the cart
  const addBurgerButton = document.getElementById("addBurger");
  addBurgerButton.addEventListener("click", () => {
    const productName = "Burger/french fries";
    const price = 18;
    addToCart({ name: productName, price });
  });

  // Event listener to add "Pizza" to the cart
  const addPizzaButton = document.getElementById("addPizza");
  addPizzaButton.addEventListener("click", () => {
    const productName = "Pizza";
    const price = 21;
    addToCart({ name: productName, price });
  });

  //removing from cart

  // Function to remove an item from the cart and update local storage
  function removeFromCart(itemName) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the index of the product in the cart
    const productIndex = cart.findIndex((cartItem) => cartItem.name === itemName);

    if (productIndex !== -1) {
      // Remove the item from the cart
      cart.splice(productIndex, 1);

      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Update the cart display
    updateCartDisplay();
  }

  // Event listeners for "Delete" buttons

  // For Lasagne
  const deleteButton1 = document.getElementById("deleteButton1");
  deleteButton1.addEventListener("click", () => {
    removeFromCart("Lasagne");
  });

  // For Burger
  const deleteButton2 = document.getElementById("deleteButton2");
  deleteButton2.addEventListener("click", () => {
    removeFromCart("Burger/french fries");
  });

  // For Pizza
  const deleteButton3 = document.getElementById("deleteButton3");
  deleteButton3.addEventListener("click", () => {
    removeFromCart("Pizza");
  });

  //!! Page switchers !!//
  pages.homepagebtn.addEventListener("click", function () {
    location.href = "./homePage.html";
  });
  pages.listpage.addEventListener("click", function () {
    location.href = "./list.html";
  }); // makes the button clickable and changes page
  pages.homePage.addEventListener("click", function () {
    location.href = "./homePage.html";
  }); // makes the button clickable and changes page
  pages.shoppingCartPage.addEventListener("click", function () {
    location.href = "./handlekurv.html";
  }); // makes the button clickable and changes page
  pages.userPage.addEventListener("click", function () {
    location.href = "./userpage.html";
  }); // makes the button clickable and changes page
  //!! Page switchers !!//
});
