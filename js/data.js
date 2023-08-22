document.addEventListener("DOMContentLoaded", function () {
    const dataElement = document.getElementById("data");
    const storedData = localStorage.getItem("storedData");

    if (storedData) {
        dataElement.textContent = storedData;
    } else {
        dataElement.textContent = "null";
    }
});
