document.addEventListener("DOMContentLoaded", function () {
  //!! OBJECT !!//
  const list = document.querySelector("#list");
  //!! OBJECT !!//

  //!! current pages !!//
  const pages = {
    homePage: document.querySelector("#home-page"),
    shoppingCartPage: document.querySelector("#shopping-page"),
    userPage: document.querySelector("#user-page"),
    listpage: document.querySelector("#list-page"),
  };
  //!! current pages !!//

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

  //!!main logic!!//

  //!!main logic!!//
}); //makes the page load before script
