const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.innerText;

    // Numbers and operators
    if (
      (value >= "0" && value <= "9") ||
      value === "." ||
      value === "+" ||
      value === "-" ||
      value === "×" ||
      value === "÷"
    ) {
      display.value += value;
    }

    // Clear button
    if (value === "AC") {
      display.value = "";
    }

    // Calculate button
    if (value === "=") {
      try {
        const math = display.value
          .replaceAll("×", "*")
          .replaceAll("÷", "/");

        display.value = eval(math);
      } catch (error) {
        display.value = "Error";
      }
    }
  });
});