const dataLength = document.querySelector('input');
console.log(dataLength.dataset.length);
dataLength.addEventListener("blur", (event) => {
    if (dataLength.value == dataLength.dataset.length) { dataLength.className = "valid" }
    else {dataLength.className = "invalid" }
});