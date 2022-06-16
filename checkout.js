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
const order = Math.floor(Math.random() * 10000000);

const orderNumberPara = document.getElementById("on");
orderNumberPara.innerText = "Order: " + order;
// orderNumberPara.innerHTML = "Order: " + order;

//editOrder BTN with itts fuction
const editButton = document.getElementById("editOrder_btn");
editButton.addEventListener("click", editOrder);

const goBack = document.getElementById("goBack_btn");
goBack.addEventListener("click", function (e) {
  e.preventDefault();

  window.location.replace("./client/createPizza.html");
});

const orderBtn = document.getElementById("order_btn");
orderBtn.addEventListener("click", orderPage);

function editOrder() {
  //window.location.href = /*"///index.html for pizza order selection///"*/
  console.log(a);
}

function orderPage() {
  //window.location.href = /*"///index.html for tracking page and save all user inputs///"*/
  console.log(a);
}
