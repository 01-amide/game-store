// Theme toggle with persistence
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// On page load, check localStorage for theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark"); // Enable dark mode
    toggleBtn.textContent = "☀️"; // Set icon to sun
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark"); // Toggle dark mode class
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark"); // Save preference
        toggleBtn.textContent = "☀️"; // Set icon to sun
    } else {
        localStorage.setItem("theme", "light"); // Save preference
        toggleBtn.textContent = "🌙"; // Set icon to moon
    }
});
