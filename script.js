const myButton = document.getElementById("this is a button");

const resultText = document.getElementById("result");

const myButtonFunction = function () {
    let someText = `${Math.random()}`;
    resultText.innerText = someText;
};

myButton.addEventListener("click", myButtonFunction);