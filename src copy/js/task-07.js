const inputRef = document.querySelector("input#font-size-control");
const abracadabraRef = document.querySelector("span#text");

inputRef.addEventListener("input", (event) => {
    let fontSize = event.target.value + "px";
console.log(fontSize)
    abracadabraRef.style.fontSize = fontSize;
});