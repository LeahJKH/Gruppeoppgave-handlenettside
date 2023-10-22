document.addEventListener("DOMContentLoaded", function () {
  const cardSpace = document.querySelector("#cardcontain");
  const username = document.querySelector("#Username");
  const password = document.querySelector("#password");
  const createUser = document.querySelector("#Username");
  const loggInn = document.querySelector("#create-user");
  const userPageName = document.querySelector("#logg-user");

  let loggedInnUsername = "";
  let loggedInnPassword = "";

  createUser.addEventListener("click", function () {
    localStorage.setItem("userNameS", username.value);
    localStorage.setItem("passWordS", password.value);
    loggedInnUsername = localStorage.getItem("userNameS");
    loggedInnPassword = localStorage.getItem("passWordS");
    startpage();
  });
  loggInn.addEventListener("click", function () {});

  function startpage() {
    userPageName.textContent = loggedInnUsername;
    console.log(loggedInnPassword);
    console.log(loggedInnUsername);
    cardcard();
  }

  function cardcard() {
    for (let i = 0; i < 4; i++) {
      cardSpace.innerHTML += `<section> <img src=""> <h3>i made food</h3> <p>yes i did</p> </div></section>`;
    }
  }
});
