document.addEventListener("DOMContentLoaded", function () {
  const cardSpace = document.querySelector("#cardcontain");
  cardcard();
  function cardcard() {
    for (let i = 0; i < 4; i++) {
      cardSpace.innerHTML += `<section> <img src=""> <h3>i made food</h3> <p>yes i did</p> </div></section>`;
    }
  }
});
