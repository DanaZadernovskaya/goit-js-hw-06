const dataLength = document.querySelector('input');
console.log(dataLength.dataset.length);
dataLength.addEventListener("blur", () => {
    if (!dataLength.value.length) { dataLength.className = ''; }

    else if (dataLength.value.length == dataLength.dataset.length) { dataLength.className = "valid" }
    else {dataLength.className = "invalid" }
});