//checkoutjs
//order number with its function
const order = Math.floor(Math.random() * 10000000);
//storing the Html p tag into a variable using its ID
const orderNumberPara = document.getElementById("on");
//inner text into the p tag wich it would dynamically display order number
orderNumberPara.innerText = "Order: " + order;
//editOrder BTN calling its fuction
const editButton = document.getElementById("editOrder_btn");
editButton.addEventListener("click", editOrder);
//go back button calling its function
const goBack = document.getElementById("goBack_btn");
goBack.addEventListener("click", function (e) {
  e.preventDefault();

  window.location.replace("./client/createPizza.html");
});
// order btn calling its function
const orderBtn = document.getElementById("order_btn");
orderBtn.addEventListener("click", orderPage);
//function utilize for edit and go back"it will take yout to the previus page"
function editOrder() {
  //window.location.href = /*"///index.html for pizza order selection///"*/
  console.log(order);
}
//function utilize for order"it will take yout to the next page"
function orderPage() {
  //window.location.href = /*"///index.html for tracking page and save all user inputs///"*/
  console.log(order);
}
