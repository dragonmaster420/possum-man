const titleScreen = document.getElementById("titleScreen");
const introScreen = document.getElementById("introScreen");
const textbox = document.getElementById("textbox");
const dialogue = document.getElementById("dialogue");
const nextIndicator = document.getElementById("nextIndicator");

/* DIALOGUE */
const lines = [
    "It's shit.",
    "It's fucking shit, man.",
    "How long until something's gonna happen? I've been waiting so fucking long. I can't keep doing the same shit."
];

let currentLine = 0;
let isTyping = false;

/* START GAME */
titleScreen.addEventListener("click", startGame);

function startGame() {

    titleScreen.classList.add("fade-out");

    setTimeout(() => {
        titleScreen.style.display = "none";
        introScreen.classList.add("show");
    }, 2000);

    setTimeout(() => {

        textbox.classList.add("show");

        typeLine(lines[currentLine]);

    }, 7000);
}

/* TYPEWRITER EFFECT */
function typeLine(text) {

    isTyping = true;

    dialogue.textContent = "";
    nextIndicator.classList.remove("show");

    let index = 0;

    const interval = setInterval(() => {

        dialogue.textContent += text[index];

        index++;

        if (index >= text.length) {

            clearInterval(interval);

            isTyping = false;

            nextIndicator.classList.add("show");
        }

    }, 35);
}

/* NEXT LINE */
textbox.addEventListener("click", () => {

    if (isTyping) return;

    currentLine++;

    if (currentLine < lines.length) {

        typeLine(lines[currentLine]);

    } else {

        nextIndicator.classList.remove("show");
    }
});