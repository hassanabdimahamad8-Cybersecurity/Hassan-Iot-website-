// Simple form validation and feedback for Admissions and Contact forms
document.addEventListener("DOMContentLoaded", function () {
  // Admission form
  const admissionForm = document.getElementById("admissionForm");
  if (admissionForm) {
    admissionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const program = document.getElementById("program").value;
      const msgEl = document.getElementById("formMessage");

      if (!name || !email || !program) {
        msgEl.textContent = "Please fill in all required fields.";
        msgEl.className = "form-message error";
        return;
      }
      if (!isValidEmail(email)) {
        msgEl.textContent = "Please enter a valid email address.";
        msgEl.className = "form-message error";
        return;
      }
      msgEl.textContent = "Thank you! Your inquiry has been recorded. The admissions office will contact you soon.";
      msgEl.className = "form-message success";
      admissionForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("cName").value.trim();
      const email = document.getElementById("cEmail").value.trim();
      const message = document.getElementById("cMessage").value.trim();
      const msgEl = document.getElementById("contactMessage");

      if (!name || !email || !message) {
        msgEl.textContent = "Please fill in all required fields.";
        msgEl.className = "form-message error";
        return;
      }
      if (!isValidEmail(email)) {
        msgEl.textContent = "Please enter a valid email address.";
        msgEl.className = "form-message error";
        return;
      }
      msgEl.textContent = "Message sent successfully! We will get back to you shortly.";
      msgEl.className = "form-message success";
      contactForm.reset();
    });
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}