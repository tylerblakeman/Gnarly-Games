$(document).ready(function () {
  // Getting information from the user "Login"
  var emailInputLi = $("#emailLogin");
  var passInputLi = $("#passwordLogin");

  var emailInput = $("#emailReg");
  var password = $("#passwordReg");

  // Adding event listeners to the login to prevent defaults
  $(document).on("click", "#loginBtn", function() {
    event.preventDefault()
  });

  //event listener for login button - preventing refresh
  $(document).on("click", "#log-in", function() {
    event.preventDefault();
    var username = $(".login-user").val();
    var password = $(".login-pass").val();
    alert(username);
    alert(password)
    console.log("hi");
  })
});

  //event listener for register button - preventing refresh
  $(document).on("click", "#register", function() {
    event.preventDefault();
    var username = $(".register-user").val();
    var password = $(".register-pass1").val();
    var password2 = $(".register-pass2").val();
    alert(username);
    alert(password);
    alert(password2);
    console.log("hi");
  })
