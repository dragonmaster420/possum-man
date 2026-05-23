const titleScreen = document.getElementById("titleScreen");
const introScreen = document.getElementById("introScreen");
const textbox = document.getElementById("textbox");
const dialogue = document.getElementById("dialogue");
const nextIndicator = document.getElementById("nextIndicator");

/* =========================
   AUDIO
========================= */

const typingSound = new Audio("audio/typing-1.mp3");

typingSound.volume = 0.25;

/* =========================
   SCENE 1
========================= */

const lines = [
    "It's shit.",
    "It's fucking shit, man.",
    "How long until something's gonna happen? I've been waiting so fucking long -- I can't keep doing the same shit.",
    "I was in bed and I didn't get up. I could've, but I didn't.",
    "Am I...",
    "Am I worth anything?",
    "I dunno.",
    "I feel like I show myself to people and then they've got better things to do. Like as soon as I give myself to someone, all they wanna do is give me back. Everyone's off me.",
    "Aw, well, not everyone.",
    "At least I've got"
];

/* =========================
   SCENE 2
========================= */

const nextSceneLines = [
    "Carlton Gardens is mostly shadows. There are lamps and stuff, but they only make more shadows. Can't see where the grass ends.",
    "You swing your bottle of wine around as if there's something there to hit. It doesn't really matter if it smashes or anything, 'cause you can always go get more.",
    "\"Look,\" someone says. There's a guy walking on the footpath. Does he think you can't hear him? He points you out to the other guy beside him. Maybe it's his boyfriend. You can't tell.",
    "[pause]",
    "You take a seat against a tree -- like the only one without one of those plastic sheets they use to keep possums off -- and the bottle dinks against the thick roots. You know you shouldn't check your phone, but you've got an empty hand you don't know what else to do with.",
    "You go on... Right, yeah. You deleted Instagram. There was a reason you did that. Can't have been that good.",
    "You redownload it. What're you gonna see on there that's worse than what you've been thinking about? It's only been a couple weeks, anyway. He's not gonna",
    "Hello.",
    "[pause]",
    "The fuck?",
];

/* =========================
   STATE
========================= */

let currentLine = 0;
let currentScene = 1;

let isTyping = false;

/* =========================
   START GAME
========================= */

titleScreen.addEventListener("click", () => {

    titleScreen.classList.add("fade-out");
});

/* Wait for title fade before continuing */

titleScreen.addEventListener("transitionend", () => {

    if (titleScreen.classList.contains("fade-out")) {

        titleScreen.style.display = "none";

        introScreen.classList.add("show");

        /* 5 second empty screen */

        setTimeout(() => {

            /* Textbox fades in EMPTY */

            textbox.classList.add("show");

            /* Additional pause before dialogue starts */

            setTimeout(() => {

                typeLine(lines[currentLine]);

            }, 2500);

        }, 5000);
    }
});

/* =========================
   TYPEWRITER SYSTEM
========================= */

function typeLine(text) {

    /* =========================
       FULL LINE PAUSE
    ========================= */

    if (text === "[pause]") {

        isTyping = true;

        nextIndicator.classList.remove("show");

        setTimeout(() => {

            isTyping = false;

            currentLine++;

            if (currentScene === 1) {

                typeLine(lines[currentLine]);

            } else {

                typeLine(nextSceneLines[currentLine]);
            }

        }, 3000);

        return;
    }

    isTyping = true;

    dialogue.textContent = "";

    nextIndicator.classList.remove("show");

    let index = 0;

    function typeCharacter() {

        if (index >= text.length) {

            isTyping = false;

            /* =========================
               HARD CUT TO NEXT SCENE
            ========================= */

            if (text === "At least I've got") {

                startNextScene();

                return;
            }

            /* =========================
               AUTO HELLO EVENT
            ========================= */

            if (
                text === "You redownload it. What're you gonna see on there that's worse than what you've been thinking about? It's only been a couple weeks, anyway. He's not gonna"
            ) {

                currentLine++;

                typeLine(nextSceneLines[currentLine]);

                return;
            }

            /* Remove Hello instantly */

            if (text === "Hello.") {

                setTimeout(() => {

                    dialogue.textContent = "";

                    currentLine++;

                    typeLine(nextSceneLines[currentLine]);

                }, 50);

                return;
            }

            nextIndicator.classList.add("show");

            return;
        }

        const currentChar = text[index];

        /* =========================
           CUSTOM [pause] TAG
        ========================= */

        if (text.slice(index, index + 7) === "[pause]") {

            index += 7;

            setTimeout(typeCharacter, 1000);

            return;
        }

        dialogue.textContent += currentChar;

        /* typing sound */

        if (currentChar !== " ") {

            typingSound.currentTime = 0;
            typingSound.play();
        }

        index++;

        let delay = 55;

        /* =========================
           PUNCTUATION PAUSES
        ========================= */

        const nextChar = text[index];

        /* Slow typing for specific word */

        const recentText = dialogue.textContent.toLowerCase();

        if (recentText.endsWith("boyfriend")) {

            delay = 140;
        }

        /* Handle punctuation followed by quotation marks */

        if (
            (currentChar === "." ||
             currentChar === "!" ||
             currentChar === "?")
            &&
            nextChar === "\""
        ) {

            delay = 700;
        }

        /* Standard sentence punctuation */

        else if (
            currentChar === "." ||
            currentChar === "!" ||
            currentChar === "?"
        ) {

            delay = 700;
        }

        /* Double dash pause */

        else if (
            currentChar === "-" &&
            nextChar === "-"
        ) {

            delay = 220;
        }

        /* Comma pause */

        else if (
            currentChar === "," ||
            currentChar === ";" ||
            currentChar === ":"
        ) {

            delay = 300;
        }

        setTimeout(typeCharacter, delay);
    }

    typeCharacter();
}

/* =========================
   NEXT SCENE
========================= */

function startNextScene() {

    currentScene = 2;

    currentLine = 0;

    dialogue.textContent = "";

    typeLine(nextSceneLines[currentLine]);
}

/* =========================
   CLICK TO ADVANCE / SKIP
========================= */

textbox.addEventListener("click", () => {

    /* =========================
       SKIP CURRENT LINE
    ========================= */

    if (isTyping) {

        if (currentScene === 1) {

            dialogue.textContent = lines[currentLine];

        } else {

            dialogue.textContent = nextSceneLines[currentLine];
        }

        isTyping = false;

        nextIndicator.classList.add("show");

        return;
    }

    /* =========================
       SCENE 1 ADVANCEMENT
    ========================= */

    if (currentScene === 1) {

        currentLine++;

        if (currentLine < lines.length) {

            typeLine(lines[currentLine]);
        }
    }

    /* =========================
       SCENE 2 ADVANCEMENT
    ========================= */

    else if (currentScene === 2) {

        currentLine++;

        if (currentLine < nextSceneLines.length) {

            typeLine(nextSceneLines[currentLine]);

        } else {

            nextIndicator.classList.remove("show");

            dialogue.textContent = "";
        }
    }
});