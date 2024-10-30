function checkNumber() {
  const input = document.getElementById("number-input").value;
  const message = document.getElementById("message");
  const number = parseInt(input);
  if (isNaN(number)) {
      message.textContent = "Please enter a number, not a word.";
  } else {
      switch (number) {
          case 1:
              message.textContent = "One is the loneliest number that you'll ever do.";
              break;
          case 2:
              message.textContent = "Two can be as bad as one. It's the loneliest number since the number one.";
              break;
          case 3:
              message.textContent = "There is no three.";
              break;
          default:
              message.textContent = "You didn't enter a valid number.";
      }
  }
}
