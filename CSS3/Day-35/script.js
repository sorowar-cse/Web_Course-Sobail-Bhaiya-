// Dark Mode Toggle

// Get the button
const btn = document.querySelector(".btn-toggle");

// Get the current theme from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current local storage item is "dark"
// then apply the .dark-theme class to the body
if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    }

// Listen for a click on the button
btn.addEventListener("click", function() {
    // then toggle .dark-theme class to the body
    document.body.classList.toggle("dark-theme");

    // We then save the theme to localStorage
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
}
);
