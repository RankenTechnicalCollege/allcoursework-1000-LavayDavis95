function verifyAge() {
  const ageInput = document.getElementById("age").value;
  const message = document.getElementById("message");
  
  if(!Number.isInteger(Number(ageInput)) || ageInput.trim()=== ""){
    message.textContent="Please enter your age!";
    return;
   }
  const age = parseInt(ageInput);
  if (age < 1 || age > 200) {
    message.textContent = "Age out of range!";
  } else if (age >= 21) {
      message.textContent = "Welcome to the venue!";
    } else {
      message.textContent = "You're not old enough!";
    }
  }
  