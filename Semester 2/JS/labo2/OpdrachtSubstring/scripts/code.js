const setup = () => {
    let btn = document.getElementById("btnSubstring");

    btn.addEventListener("click", () => {
        let text = document.getElementById("txtInput").value;
        let start = parseInt(document.getElementById("startIndex").value);
        let end = parseInt(document.getElementById("endIndex").value);
        let resultElement = document.getElementById("result");

        resultElement.innerHTML = text.substring(start, end);
    });
};

window.addEventListener("load", setup);
