document.addEventListener("DOMContentLoaded", function () {
  const cardSpace = document.querySelector("#cardcontain");
  const username = document.querySelector("#Username");
  const password = document.querySelector("#password");
  const createUser = document.querySelector("#create-user");
  const loggInn = document.querySelector("#logg-inn");
  const userPageName = document.querySelector("#logg-user");

  const loggedinPage = document.querySelector("#loggedinnpage");
  const loggedOutPage = document.querySelector("#loggscreen");

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
      console.log("Please enter both a username and a password.");
    }
  });

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
      }
    }

    if (loggedIn) {
      startpage();
    } else {
      console.log("Login failed. Please check your credentials.");
    }
  });

  function startpage() {
    userPageName.textContent = loggedInUsername;
    loggedinPage.style.display = "flex";
    loggedOutPage.style.display = "none";
    cardcard();
  }

  function cardcard() {
    for (let i = 0; i < 4; i++) {
      cardSpace.innerHTML += `<section> <img src=""> <h3>i made food</h3> <p>yes i did</p> </div></section>`;
    }
  }
});
