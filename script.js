$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    slideSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
});

let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) => {
  e.preventDefault();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "scpakula@gmail.com",
    Password: "A347685195F7E2DAB74D247E3ED0CB844476",
    To: "scpakula@gmail.com",
    From: "scpakula@gmail.com",
    Subject: "Request from Restaraunt",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message: ${contactMessage}`,
  }).then((message) => {
    alert(message);
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  });
};
