document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");

    localStorage.removeItem("storedData");


    buttonText.addEventListener("click", function () {
        const inputValue = inputText.value;
        localStorage.setItem("storedData", inputValue);
    });
});
