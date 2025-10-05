//your JS code here. If required.
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

window.onload = function() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block"; // Show button if credentials exist
  }
};

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username && password) {
    alert("Logged in as " + username);

    if (checkbox.checked) {
    
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
   
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      existingBtn.style.display = "inline-block";
    } else {
      existingBtn.style.display = "none";
    }
  }
});


existingBtn.addEventListener("click", function() {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert("Logged in as " + savedUsername);
  }
});
