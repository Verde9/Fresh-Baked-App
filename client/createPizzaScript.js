let count = 1;

let pizza = {
  ingredients: [],
};
// let displayCount = document.getElementById("count");
// let subtract = document
//   .getElementById("subtract")
//   .addEventListener("click", handleSubtract);

// document.getElementById("add").addEventListener("click", handleAdd);

// function handleSubtract() {
//   if (count < 1) return;
//   count = count -= 1;
//   handleCount();
// }

// function handleAdd() {
//   count = count += 1;
//   handleCount();
//   pizza.price = price * count
// }

// function handleCount() {
//   displayCount.innerText = count;
//   pizza.count = count;
// }

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
  console.log(pizza);
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

function addAnotherPizza() {
  let choice = window.confirm("Do you want to add another pizza");

  if (choice) {
    document.querySelector("input[name=pizzaSize]:checked").checked = false;
    document.querySelector("input[name=pizzaCrust]:checked").checked = false;
    document.querySelector("input[name=pizzaSauce]:checked").checked = false;

    var checkBoxes = ingElement.querySelectorAll('input[type="checkbox"]');

    checkBoxes.forEach((item) => {
      item.checked = false;
    });
  } else {
    window.location.replace("../checkout.html");
  }
}
