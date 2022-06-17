//checkoutjs
//order number with its function


getOrder()
async function getOrder() {
  let order = await fetch("http://localhost:3000/getOrder", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: sessionStorage.getItem("userId"),
    }),
  })
    let order2 = await order.json();

    let ingredientsArray = []
    let noDuplicates = [...new Set(ingredientsArray)]


    function ingredients() {
      order2.order[0].ingredients.forEach(ingredient => {
          ingredientsArray.push(ingredient.item)
      });
    }
    ingredients()
    const orderNumberPara = document.getElementById("on");
    const ingredientsDiv = document.getElementsByClassName("ingredients")

    orderNumberPara.innerText = `
    Order Number: ${order2.order[0].orderNumber}
    Price: $${order2.order[0].price}
    Pizza Sauce: ${order2.order[0].sauce}
    Pizza Ingredients: ${ingredientsArray}
    `
    // for (let index = 0; index < order2.order[0].ingredients.length; index++) {
    //   ingredientsDiv[index].innerText = `${order2.order[0].ingredients[index].item}`
    //   console.log(order2.order[0].ingredients[index].item)
    // }
}

console.log("pizzaObj", pizzaObj);
//No longer need it since we bringing order number from the server
//const order = Math.floor(Math.random() * 10000000);
//storing the Html p tag into a variable using its ID
const orderNumberPara = document.getElementById("on");

//inner text into the p tag wich it would dynamically display order number

>>>>>>> main
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
