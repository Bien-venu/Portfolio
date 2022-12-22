const handleSubmit = (event) => {
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  let names = document.querySelector(".names").value;
  event.preventDefault();

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  ) {
    alert(
      `HELLO ${names}!, thank you for your Message, We will contact you late on your email: ${email},Thank you!!!`
    );
  } else {
    alert(`${email} is an invalid email! Please try again!!!`);
  }
};