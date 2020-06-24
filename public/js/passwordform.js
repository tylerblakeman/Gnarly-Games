$(document).ready(function() {

var signupId = $("#modalLRInput12");
var userList = $("all");

$(document).on("click", "#1", handleUserInputForm);
$(document).on("click", "#2", handleUserInputForm);

getUser();

function handleUserInputForm(event) {
  event.preventDefault();
  // Don't do anything if the form fields haven't been filled out
  if (!signupId.val().trim().trim()) {
    return;
  }
  // Calling the upsertUser function and passing in the value of the email input
  upsertUser({
    email: signupId
      .val()
      .trim()
  });
}

  // Function creating a new user. Calls getUser upon completion
  function upsertUser(userData) {
    $.post("/api/user", userData)
      .then(getUser);
  }

 // Function for creating a new list for users
 function createUserRow(userData) {
  var newTr = $("<tr>");
  newTr.data("user", userData);
  newTr.append("<td>" + userData.email + "</td>");
  if (userData.Posts) {
    newTr.append("<td> " + userData.Posts.length + "</td>");
  } else {
    newTr.append("<td>0</td>");
  }
  return newTr;
}

 // Function for retrieving users and getting them ready to be rendered to the page
 function getUser() {
  $.get("/api/users", function(data) {
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createUserRow(data[i]));
    }
    renderUserList(rowsToAdd);
    signupId.val("");
  });
}

 // A function for rendering the list of users   to the page
 function renderUserList(rows) {
  userList.children().not(":last").remove();
  userContainer.children(".alert").remove();
  if (rows.length) {
    console.log(rows);
    userList.prepend(rows);
  }
  else {
    renderEmpty();
  }
}

// function hide (){
//   if $(document).on("click", "#1", "#2")
//   event.preventDefault();
//   $("#mymodal").modal('hide');
// }






  // Adding event listeners to the form to create a new object
  // $(document).on("click", "#1", function() {
  //   event.preventDefault()
  //   var username = $("#modalLRInput12").val();
  //   console.log(username);
  //   var password = $("modalLRInput13").val();
  //   console.log(password);
  //   var passwordCheck = $("modalLRInput13").val();
  //   console.log(passwordCheck);
  // });

  // Users access their accounts

  // $(document).on("click", "#2", function() {
  //   var userLogin = $("#modalLRInput10").val();
  //   console.log(userLogin);
  //   var passLogin = $("modalLRInput11").val();
  //   console.log(passLogin);
  // });

});

  // //event listener for register button - preventing refresh
  // $(document).on("click", "#register", function() {
  //   event.preventDefault();
  //   var username = $(".register-user").val();
  //   var password = $(".register-pass1").val();
  //   var password2 = $(".register-pass2").val();
  //   alert(username);
  //   alert(password);
  //   alert(password2);
  //   console.log("hi");
  // })
