const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
const email = form.querySelector("[name='email']")
const password = form.querySelector("[name='password']")
function handleSubmit(event) {
    event.preventDefault();
     if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
     }
    else {
     console.log({Email : email.value, Password : password.value});
  event.currentTarget.reset();}

}
