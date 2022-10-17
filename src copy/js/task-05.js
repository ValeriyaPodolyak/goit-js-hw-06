let inputRef = document.querySelector("input#name-input");
let spanRef = document.querySelector("span#name-output");

inputRef.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
        spanRef.textContent = "Anonymous";
        console.log(spanRef)
    } else {
        spanRef.textContent = inputValue;
                console.log(spanRef.textContent);

    };
}); 
