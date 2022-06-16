document
  .getElementById("pizza_creation_button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    createUser();
    // createPizza()
  });

function createPizza() {
  window.location.replace("./client/createPizza.html");
}
// if (sessionStorage.getItem("userId") != null) {
function createUser() {
  // fetch("http://localhost:3000/user")
  //   .then((res) => {
  //     console.log("get...", res);
  //     if (res.ok) return res.json();
  //   })
  //   .then((response) => {
  //     console.log("in main js", response);
  //     // window.location.reload(true);
  //   });
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
      console.log("res...", res);
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
// } else {
//   createPizza();
// }
// export function getUserId() {
//   return userId;
// }
