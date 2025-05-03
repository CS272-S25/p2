document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmationMsg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      // Simulate sending the message by saving it to sessionStorage
      sessionStorage.setItem("lastContactMessage", JSON.stringify({ name, email, message }));
  
      // Clear form + show confirmation
      form.reset();
      confirmation.style.display = "block";
    });
  });
  