
$(document).ready(function() {
  
  // Getting references to our form and input
  var signUpForm = $(".signup");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");
  var firstNameInput = $("#firstName-input");
  var lastNameInput = $("#lastName-input");

  // When the signup button is clicked, we validate the email and password are not blank
  $(signUpForm).on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: $("#email-input").val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim()
    };
    console.log(userData);
   if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
      return;
      console.log("passed");
    }
    // If we have an email and password, run the CreateProfileUser function
    createProfileUser(userData.email, userData.password,userData.firstName,userData.lastName);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");

  });

//   // Does a post to the signup route. If succesful, we are redirected to the members page
//   // Otherwise we log any errors
  function createProfileUser(email, password,firstName,lastName) {
    $.post("/api/New", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }).then(function(data) {
       //window.location.replace(data);
       console.log(data);
    });
    // .catch(function(err) {
    //   console.log(err);
    // });
  }



});