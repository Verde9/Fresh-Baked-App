let count = 1;

let pizza = {
  myUserId: sessionStorage.getItem("userId"),
  ingredients: [],
};
pizza.myUserId = sessionStorage.getItem("userId");

let pizzBtn = document.querySelectorAll("input[name='pizzaSize']");

let selected = "";
let findSelected = () => {
  selected = document.querySelector("input[name=pizzaSize]:checked").value;
  if (selected == "Small") {
    pizza.price = 12.99;
    pizza.size = selected;
  } else if (selected == "Medium") {
    pizza.price = 15.99;
    pizza.size = selected;
  } else {
    pizza.price = 19.99;
    pizza.size = selected;
  }
};

pizzBtn.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelected);
});
//******************************************************************************************** */
let crustBtn = document.querySelectorAll("input[name='pizzaCrust']");
let price = pizza.price;
let selectedCrust = "";
let findSelectedCrust = () => {
  selected = document.querySelector("input[name=pizzaCrust]:checked").value;
  if (selected == "Stuffed Crust") {
    price = pizza.price + 2.99;
    pizza.crust = selected;
    pizza.price = price;
  }
};

crustBtn.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelectedCrust);
});
//********************************************************************************************

let sauceBtn = document.querySelectorAll("input[name='pizzaSauce']");

let selectedSauce = "";
let findSelectedSauce = () => {
  selected = document.querySelector("input[name=pizzaSauce]:checked").value;
  pizza.sauce = selected;
};

sauceBtn.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelectedSauce);
});
// findSelected()
//********************************************************************************************

var ingElement = document.getElementById("ingredients");
var checkBoxes = ingElement.querySelectorAll('input[type="checkbox"]');

document.getElementById("cartButton").addEventListener("click", function (e) {
  e.preventDefault(e);
  getData();
  addAnotherPizza();
});

document.getElementById("goBack").addEventListener("click", function (e) {
  e.preventDefault();

  window.location.replace("../index.html");
});

let result = [];

function getData() {
  result = [];
  checkBoxes.forEach((item) => {
    if (item.checked) {
      let data = {
        item: item.value,
      };
      pizza.ingredients.push(data);
    }
  });
}
let stillOrdering = true;
function addAnotherPizza() {
  let choice = window.confirm("Do you want to add another pizza");
  console.log("pizza", pizza);
  stillOrdering = choice;
  if (choice) {
    document.querySelector("input[name=pizzaSize]:checked").checked = false;
    document.querySelector("input[name=pizzaCrust]:checked").checked = false;
    document.querySelector("input[name=pizzaSauce]:checked").checked = false;

    var checkBoxes = ingElement.querySelectorAll('input[type="checkbox"]');

    checkBoxes.forEach((item) => {
      item.checked = false;
    });
  } else {
    updateUserPizzaOrder();
  }
}

// function updateUserPizzaOrder() {
//   fetch("http://localhost:3000/updateUserPizzaOrder", {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       userId: pizza.myUserId,
//       price: pizza.price,
//       sauce: pizza.sauce,
//       ingredients: pizza.ingredients,
//     }),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//     })
//     .then((response) => {
//       checkout();
//     });
// }

function checkout() {
  window.location.replace("../checkout.html");
}
