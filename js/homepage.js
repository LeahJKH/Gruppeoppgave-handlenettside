const userCard = document.querySelector("User-cards");

const names = ["Anna", "Roger", "Mina"];
const titles = ["mmmmm, tasty", "You gotta try this", "See what i made"];

function createCards() {
  let randomCard = Math.floor(Math.random() * 3);
  userCard.innerHTML += `
<img src="" alt="User" />
<h2>${names[randomCard]}</h2>
<div class="conainer">
<img src="" alt="" />
<h3>${titles[randomCard]}</h3>
<p></p>
</div>
`;
} // creates a card each time called upon
