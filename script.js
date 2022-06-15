document
  .getElementById("pizza_creation_button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    createPizza();
  });

function createPizza() {
  window.location.replace("./client/createPizza.html");
}
