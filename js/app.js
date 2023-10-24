document.addEventListener("DOMContentLoaded", function () {
  const loadingBar = document.querySelector("#loading-bar");
  let count = 1;
  let intervalID = setInterval(increment, 50); // the speed it loads

  function increment() {
    count++;
    loadingBar.value = count;
    if (count === 100) {
      location.href = "./userpage.html";
    }
  } //makes it fill the loadingbar then checks if its full before sending too next
});
