function sendMail(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_9thq0gh", "template_xteg1wj", parms)
    .then(
      (response) => {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      },
      (error) => {
        alert("Failed to send email. Please try again later.");
        console.error("FAILED...", error);
      }
    );
}
