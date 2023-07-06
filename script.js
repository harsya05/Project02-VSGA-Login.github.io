const correctEmail = "jwd_b@gmail.com";
const correctPassword = "1234";
const messageContainer = document.getElementById("message-container");

function cekLogin() {
  const userEmail = document.getElementById("fEmail").value;
  const userPassword = document.getElementById("fPassword").value;

  if (userEmail != correctEmail || userPassword != correctPassword) {
    messageContainer.innerHTML =
      "<p class='error-message'>Password atau Email Salah !</p>";
  } else {
    messageContainer.innerHTML = "<p class='succes-message'>Login Berhasil</p>";
    setTimeout(() = {
   window.location.href ="https://harsya05.github.io/-Project02-VSGA-Order.github.io/"
}, 3000) ;
  }
}
function myFunction() {
  var x = document.getElementById("fPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
