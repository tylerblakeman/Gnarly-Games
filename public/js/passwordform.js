$(document).ready(function () {
  // Getting information from the user "Login"
  var emailInputLi = $("#emailLogin");
  var passInputLi = $("#passwordLogin");

  var emailInput = $("#emailReg");
  var password = $("#passwordReg");

  // Adding event listeners to the form to create a new object
  $(document).on("click", "#loginBtn", function() {
    event.preventDefault()
  });
  $(document).on("click", "#log-in", function() {
    var username = $("#login-user").val().trim();
    console.log(username);
    console.log("hi");
  })
});