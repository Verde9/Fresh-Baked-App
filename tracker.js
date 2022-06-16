//trackerjs
//variables saving used for the moveBar() funtion.
let bar = document.getElementById("progress_bar");
let words = ["Preparing", "Oven", "Ready"];
let width = 1;
let i = 0;

//havee to bring value of the order number from database
document.getElementById("h1_order").innerText = "Number: ";
console.log("hola");
//^----order number
//moveBar fuction is called
moveBar();
//moveBar function set a timer for the bar to slowly increase the width dynamically on the html file and also make words on a onject appear dynamicdaly
function moveBar() {
  const status = document.getElementById("text");

  if (i == 0) {
    i = 1;
    const elem = bar;
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
