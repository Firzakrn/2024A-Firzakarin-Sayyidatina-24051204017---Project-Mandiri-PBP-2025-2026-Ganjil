const chatBtn = document.getElementById("chatBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".chat-header .close");
const form = document.getElementById("chatForm");
const emailInput = document.getElementById("email");
const anonToggle = document.getElementById("anonToggle");

chatBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


anonToggle.addEventListener("change", () => {
  if (anonToggle.checked) {
    emailInput.disabled = true;
    emailInput.removeAttribute("required");
    emailInput.value = "";
    emailInput.placeholder = "Anonymous";
  } else {
    emailInput.disabled = false;
    emailInput.setAttribute("required", "");
    emailInput.placeholder = "Enter your email";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const anon = anonToggle.checked;
  const comment = document.getElementById("comment").value.trim();

  if (!anon && !emailInput.value.trim()) {
    alert("Please enter your email or enable anonymous mode.");
    return;
  }
  if (!comment) {
    alert("Please write your message.");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
  modal.style.display = "none";
});
