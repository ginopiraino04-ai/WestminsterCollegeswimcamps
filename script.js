function sayHi() {
  alert("Welcome! Check out the camps below.");
}

// This will run when the page loads
console.log("Website loaded successfully");

// Make all "Sign Up" buttons clickable
document.querySelectorAll("button").forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Sign up coming soon! Contact for details.");
  });
});