//checkoutjs
//order number with its function

getOrder();
var pizzaObj = {};
function getOrder() {
  fetch("http://localhost:3000/getOrder", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: sessionStorage.getItem("userId"),
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      pizzaObj.pizza = response;
    });
}
console.log("pizzaObj", pizzaObj);
//No longer need it since we bringing order number from the server
//const order = Math.floor(Math.random() * 10000000);
//storing the Html p tag into a variable using its ID
const orderNumberPara = document.getElementById("on");

//inner text into the p tag wich it would dynamically display order number

//go back button calling its function
const goBack = document.getElementById("goBack_btn");
goBack.addEventListener("click", function (e) {
  e.preventDefault();

  window.location.replace("./client/createPizza.html");
});

// order btn calling its function

const orderBtn = document.getElementById("order_btn");
orderBtn.addEventListener("click", orderPage);

//function utilize for order"it will take yout to the next page"
function orderPage() {
  window.location.href = "./tracker.html";
}
