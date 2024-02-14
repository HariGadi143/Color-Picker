const colorPickerContainerEl = document.getElementById("colorPickerContainer");
const selectedColorHexCodeEl = document.getElementById("selectedColorHexCode");

const firstBtn = document.getElementById("button1")
firstBtn.style.backgroundColor="#e0e0e0"


firstBtn.addEventListener("click", function () {
    colorPickerContainerEl.style.backgroundColor = "#e0e0e0"
    selectedColorHexCodeEl.textContent = "#e0e0e0"
})

const secondBtn = document.getElementById("button2")
secondBtn.style.backgroundColor="#6fcf97"


secondBtn.addEventListener("click", function () {
    colorPickerContainerEl.style.backgroundColor = "#6fcf97"
    selectedColorHexCodeEl.textContent = "#6fcf97"
})

const thirdBtn = document.getElementById("button3")
thirdBtn.style.backgroundColor="#56ccf2"


thirdBtn.addEventListener("click", function () {
    colorPickerContainerEl.style.backgroundColor = "#56ccf2"
    selectedColorHexCodeEl.textContent = "#56ccf2"
})

const fourthBtn = document.getElementById("button4")
fourthBtn.style.backgroundColor="#bb6bd9"


fourthBtn.addEventListener("click", function () {
    colorPickerContainerEl.style.backgroundColor = "#bb6bd9"
    selectedColorHexCodeEl.textContent = "#bb6bd9"
})