$(document).ready(function () {
  // Getting information from the user "Login"
  var emailInputLi = $("#emailLogin");
  var passInputLi = $("#passwordLogin");

  var emailInputRe = $("#emailReg");
  var passwordRe = $("#passwordReg");

  Adding event listeners to the form to create a new object
  $(document).on("click", "#loginBtn", function() {
    event.preventDefault()
    var username = $("#emailLogin").val();
    console.log(username);
    console.log("hi");
  });
});
