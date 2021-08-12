const sides = document.querySelectorAll(".sides")
const areaBtn = document.querySelector("#calculate-area")
const outputDiv = document.querySelector("#output")

function calculateProductOfSides(b, h) {
    const productOfSides = b * h;
    return productOfSides;
}

function calculateArea() {
    const productOfSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value))
    const area  = productOfSides * 1/2;
    outputDiv.innerText = "The area of triangle is " + area + " cm square units." ;
}

areaBtn.addEventListener("click", calculateArea)