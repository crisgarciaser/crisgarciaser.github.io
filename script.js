document.getElementById("update-button").addEventListener("click", function () {
    let userInput = document.getElementById("text-input").value;
    if (userInput.trim() !== "") {
        document.getElementById("about-text").textContent = userInput;
    }
});
