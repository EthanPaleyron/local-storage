const colorElement = document.querySelector("#colorElement");
const red = document.querySelector("#buttonRed").addEventListener("click", () => {
    colorElement.innerHTML = "Red";
    colorElement.style.color = "red";
    saveData();
})

const green = document.querySelector("#buttonGreen").addEventListener("click", () => {
    colorElement.innerHTML = "Green";
    colorElement.style.color = "green";
    saveData();
})

const blue = document.querySelector("#buttonBlue").addEventListener("click", () => {
    colorElement.innerHTML = "Blue";
    colorElement.style.color = "blue";
    saveData();
})

const clearData = document.querySelector("#buttonClear").addEventListener("click", () => {
    localStorage.clear()
})

// LOCAL STORAGE
function saveData() {
    localStorage.setItem("txt", colorElement.innerHTML);
    localStorage.setItem("color", colorElement.style.color);
}

function showData() {
    colorElement.innerHTML = localStorage.getItem("txt");
    colorElement.style.color = localStorage.getItem("color");
}
showData()