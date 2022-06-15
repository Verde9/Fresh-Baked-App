//trackerjs
let bar = document.getElementById("progress_bar");
let words = ["Preparing", "Oven", "Ready"];
let width = 1;
let i = 0;

//havee to bring value of the order number from database
document.getElementById("h1_order").innerText =
  "Order Confirmation " + "Number: ";
console.log("hola");

moveBar();
function moveBar() {
  const status = document.getElementById("text");

  if (i == 0) {
    i = 1;
    const elem = bar;
    //let width = 1;
    const timeout = setInterval(frame, 1000);

    function frame() {
      if (width >= 100) {
        clearInterval(timeout);
        i = 0;
      } else {
        width++;
      }
      bar.setAttribute("style", `width: ${width}%`);

      if (width > 0) {
        status.innerText = words[0];
      }
      if (width > 50) {
        status.innerText = words[1];
      }
      if (width == 100) {
        status.innerText = words[2];
      }
    }
  }
}
