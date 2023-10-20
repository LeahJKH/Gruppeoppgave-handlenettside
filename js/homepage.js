const userCard = document.querySelector("User-cards");
// Arrays
const names = ["Anna", "Roger", "Mina", "Hans"];
const titles = [
  "mmmmm, tasty",
  "You gotta try this",
  "See what i made",
  "Easy and fast",
];
const time = ["10 min", "20 min", "45min,", "60 min"];
// image create and array
const createImage = function (src, title) {
  const img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
};
// image array
let image = [];
// push img to the array
image.push(createImage("hamburger.avif", "Hamburger title"));
image.push(createImage("pasta.avif", "Pasta title"));
image.push(createImage("pizza.avif", "Pizza title"));
image.push(createImage("Salad.avif", "Salad title"));
// CreateCards
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
