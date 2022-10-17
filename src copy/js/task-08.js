const formRef = document.querySelector("form.login-form");
// const emailAndPasswordRef = document.querySelectorAll("input");
// const btnRef = document.querySelector("button");

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    const newSubmit = {
      email: email.value,
      password: password.value
    };
  console.log(newSubmit);
  event.currentTarget.reset();
}