document.addEventListener("DOMContentLoaded", function () {
  //!! objects !!//
  const cardSpace = document.querySelector("#cardcontain");
  const username = document.querySelector("#Username");
  const password = document.querySelector("#password");
  const createUser = document.querySelector("#create-user");
  const loggInn = document.querySelector("#logg-inn");
  const userPageName = document.querySelector("#logg-user");
  const errorMsg = document.querySelector("#error-msg");
  const burger = document.querySelector("#burger");
  const newPost = document.querySelector("#newpost");
  //!! objects !!//

  //!! in page pages !!//
  const loggedinPage = document.querySelector("#loggedinnpage");
  const loggedOutPage = document.querySelector("#loggscreen");
  //!! in page pages !!//

  //!! current pages !!//
  const pages = {
    homePage: document.querySelector("#home-page"),
    shoppingCartPage: document.querySelector("#shopping-page"),
    userPage: document.querySelector("#user-page"),
    listpage: document.querySelector("#list-page"),
    homepagebtn: document.querySelector("#homepagebtn"),
  };
  //!! current pages !!//

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

  //!!login logic!!//
  let loggedInUsername = "";
  let loggedInPassword = "";

  createUser.addEventListener("click", function () {
    const usernames = JSON.parse(localStorage.getItem("userNames")) || [];
    const passwords = JSON.parse(localStorage.getItem("passWords")) || [];
    const newUsername = username.value;
    const newPassword = password.value;

    if (newUsername && newPassword) {
      usernames.push(newUsername);
      passwords.push(newPassword);
      localStorage.setItem("userNames", JSON.stringify(usernames));
      localStorage.setItem("passWords", JSON.stringify(passwords));

      loggedInUsername = newUsername;
      loggedInPassword = newPassword;
      startpage();
    } else {
      errorMsg.textContent = "Please enter both a username and a password.";
    } // error handler for creating an account
  }); // create user function

  loggInn.addEventListener("click", function () {
    const usernames = JSON.parse(localStorage.getItem("userNames")) || [];
    const passwords = JSON.parse(localStorage.getItem("passWords")) || [];
    const enteredUsername = username.value;
    const enteredPassword = password.value;

    let loggedIn = false;

    for (let i = 0; i < usernames.length; i++) {
      if (usernames[i] === enteredUsername && passwords[i] === enteredPassword) {
        loggedInUsername = enteredUsername;
        loggedInPassword = enteredPassword;
        loggedIn = true;
        break;
      } // checks if the login is right
    }
    if (loggedIn) {
      startpage();
    } else {
      errorMsg.textContent = "Login failed. Please check your credentials.";
    } // error handler
  }); // login function

  function startpage() {
    userPageName.textContent = loggedInUsername;
    loggedinPage.style.display = "flex";
    loggedOutPage.style.display = "none";
    sessionStorage.setItem("currName", loggedInUsername);
  } // starts the page making you logged inn
  //!!login logic!!//

  //!! main page logic!!//
  function card() {
    for (let i = 0; i < 1; i++) {
      cardSpace.innerHTML += `<section> <img src=""> <h3>i made food</h3> <p>yes i did</p> </div></section>`;
    }
  } // makes cards for the main page after logging in
  newPost.addEventListener("click", function () {
    card();
  });

  //!! main page logic!!//
});

//!! unfinished !!//
/*burger.addEventListener("mouseover", function () {
  burger.src = "./icons/animated/burger/animatedBurger.gif";
}); will make working*/
//!! unfinished !!//
