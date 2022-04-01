document.querySelector("form").addEventListener("submit", signUpFun);

var userData = JSON.parse(localStorage.getItem("userCreds"))||[]
function signUpFun() {
  event.preventDefault();

  var userObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
    userName: document.querySelector("#user").value,
  };
  userData.push(userObj);
  localStorage.setItem("userCreds",JSON.stringify(userData));
  alert("Account Created");
  window.location.href = "login.html";
}