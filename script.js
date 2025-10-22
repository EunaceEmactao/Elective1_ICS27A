document.getElementById("sendBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("response");

  if(name === "" || email === "" || message === "") {
    response.style.color = "red";
    response.textContent = "Please fill in all fields!";
  } else {
    response.style.color = "green";
    response.textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
});