/* Extra: Automatic with setInterval */
// Fade in when it appears
// Fade out when it's gone with mouse moving

const boxContainer = document.getElementById("box-container");

const colors = [
    "black",
    "silver",
    "red",
    "purple",
    "green",
    "yellow",
    "blue",
    "aqua",
    "teal",
    "lime",
    "maroon",
    "cyan",
    "darkgreen",
    "gold",
    "lightblue",
];

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let indexNumber = 0;

let prevColorIndex = 0;
let colorIndex = 0;
function addBox() {
    let boxDiv = document.createElement("div");
    boxDiv.classList.add("box");
    boxDiv.style.opacity = 0;
    boxDiv.innerHTML = `<p>${indexNumber}</p>`;
    boxDiv.style.top = `${randomRange(10, 90)}vh`;
    boxDiv.style.left = `${randomRange(10, 90)}vw`;

    prevIndex = colorIndex;
    colorIndex = Math.floor(Math.random() * colors.length);
    if (prevIndex == colorIndex) {
        colorIndex = Math.floor(Math.random() * colors.length);
    }
    boxDiv.style.backgroundColor = colors[colorIndex];
    boxContainer.appendChild(boxDiv);

    boxDiv.style.transition = "opacity 2s ease";
    indexNumber++;
    // after 0.5 second, we change the opacity back to 1;
    setTimeout(() => {
        boxDiv.style.opacity = 1;
    }, 500);
}

window.addEventListener("DOMContentLoaded", function () {
    let timer = 0;
    setInterval(addBox, 1500);
    // when the mouse move, triggers a function
    document.onmousemove = function () {
        let boxes = document.getElementsByClassName("box");
        // console.log(boxes);
        if (boxes.length > 0) {
            for (let i = 0; i < boxes.length; i++) {
                // boxes[i].remove();
                removeFadeOut(boxes[i], 1500);
                indexNumber = 0;
            }
        }
    };
});
//https://stackoverflow.com/questions/33424138/how-to-remove-a-div-with-fade-out-effect-in-javascript
function removeFadeOut(el, speed) {
    let seconds = speed / 1000;
    el.style.transition = `opacity ${seconds}s ease`;
    el.style.opacity = 0;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, speed);
}
