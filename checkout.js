//checkoutjs
//order number with its function
console.log("order");

const order = Math.floor(Math.random() * 10000000);

const orderNumberPara = document.getElementById("on");
orderNumberPara.innerText = "Order: " + order;
// orderNumberPara.innerHTML = "Order: " + order;

//editOrder BTN with itts fuction
const editButton = document.getElementById("editOrder_btn");
editButton.addEventListener("click", editOrder);

const goBack = document.getElementById("goBack_btn");
goBack.addEventListener("click", editOrder);

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
