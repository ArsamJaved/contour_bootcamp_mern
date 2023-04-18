let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        // If the clicked button's text content is an operator and the last character of the display is also an operator, do nothing
        if (["+","-","*","/",].includes(e.target.innerText) && "+-*/".includes(display.innerText.slice(-1))) {
          return;
        }
        // Otherwise, append the clicked button's text content to the display
        display.innerText += e.target.innerText;
    }
  });
});



// let display = document.getElementById("display");
// let buttons = Array.from(document.getElementsByClassName("button"));
// buttons.map((button) => {
//   button.addEventListener("click", (e) => {});
// });
