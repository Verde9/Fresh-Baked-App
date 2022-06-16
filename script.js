document
  .getElementById("pizza_creation_button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    createUser();
    // createPizza()
  });


if (sessionStorage.getItem("userId") == null) {
  function createUser() {
    let userId = "";
    fetch("http://localhost:3000/createUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "",
        quote: "",
        size: "",
        ingredients: "",
        orderNumber: "",
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((response) => {
        userId = response.id;
        sessionStorage.setItem("userId", userId);
      })
      .then(() => {
        createPizza();
      });
  }
} else {
  createPizza();
}

function createPizza() {
  window.location.replace("./client/createPizza.html");
}
