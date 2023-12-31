document.addEventListener("DOMContentLoaded", function () {
  //!! OBJECT !!//
  const list = document.querySelector("#list");
  const warnmsg = document.querySelector("#warn");
  //!! OBJECT !!//

  //!! current pages !!//
  const pages = {
    homePage: document.querySelector("#home-page"),
    shoppingCartPage: document.querySelector("#shopping-page"),
    userPage: document.querySelector("#user-page"),
    listpage: document.querySelector("#list-page"),
    homepagebtn: document.querySelector("#homepagebtn"),
  };
  //!! current pages !!//

  //ADD ITEM
  const addItemInput = document.querySelector(".addItemInput");
  const addItemButton = document.querySelector("button.addItemButton");

  //Remove Item
  const removeItemButton = document.querySelector("button.removeItemButton");

  //!! List items !!//
  const listItems = document.getElementsByTagName("li");

  addItemButton.addEventListener("click", () => {
    if (addItemInput.value != "") {
      let list = document.querySelector("ul");
      let li = document.createElement("li");
      li.textContent = addItemInput.value;
      let appendedItem = list.appendChild(li);
      addItemInput.value = "";
      warnmsg.textContent = "";
    } else {
      warnmsg.textContent = "please fill out something";
    }
  });
  //!! Remove item !!//
  removeItemButton.addEventListener("click", () => {
    let list = document.querySelector("ul");
    let li = document.querySelector("li:last-child");
    list.removeChild(li);
  });
  //
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
}); //makes the page load before script
