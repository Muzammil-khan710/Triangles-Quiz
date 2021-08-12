const sides =  document.querySelectorAll(".input")
const hypotenuseBtn = document.querySelector("#hypotenuse")
const outputDiv = document.querySelector("#output")

function calculateSquaresOfSides(p, b) {
    const sumOfSquares = p*p + b*b
    return sumOfSquares;
}

function checkHypotenuse() {
    const sumOfSquares = calculateSquaresOfSides(Number(sides[0].value), Number(sides[1].value ))
    const hypotenuseLength = Math.sqrt(sumOfSquares);
    outputDiv.innerText =  `The length of Hypotenuse is ${hypotenuseLength} cm.`
}


hypotenuseBtn.addEventListener("click", checkHypotenuse)