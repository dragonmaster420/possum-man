/* =========================
   ELEMENTS
========================= */

const titleScreen = document.getElementById("titleScreen");
const introScreen = document.getElementById("introScreen");

const textbox = document.getElementById("textbox");
const dialogue = document.getElementById("dialogue");

const nextIndicator = document.getElementById("nextIndicator");

const leftChoice = document.getElementById("leftChoice");
const rightChoice = document.getElementById("rightChoice");
const upChoice = document.getElementById("upChoice");

const answerChoice = document.getElementById("answerChoice");
const dontAnswerChoice = document.getElementById("dontAnswerChoice");

/* =========================
   AUDIO
========================= */

const typingSound = new Audio("audio/typing-1.mp3");
typingSound.volume = 0.25;

const possumTypingSound = new Audio("audio/p-typing.mp3");
possumTypingSound.volume = 0.25;

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
    "\"Look,\" someone says. There's a guy walking on the footpath. Does he think you can't hear him? He points you out to the other guy beside him. Maybe it's his boyfriend. You can't tell.[pause]",
    "You take a seat against a tree -- like the only one without one of those plastic sheets they use to keep possums off -- and the bottle dinks against the thick roots. You know you shouldn't check your phone, but you've got an empty hand you don't know what else to do with.",
    "You go on... Right, yeah. You deleted Instagram. There was a reason you did that. Can't have been that good.",
    "You redownload it. What're you gonna see on there that's worse than what you've been thinking about? It's only been a couple weeks, anyway. He's not gonna",
    "[possum]\"Hello.\"[pause]",
    "The fuck?"
];

/* =========================
   CHOICE DIALOGUE
========================= */

const leftChoiceLines = [
    "..."
];

const rightChoiceLines = [
    "You're second-guessing yourself.",
];

const upChoiceLines = [
];

/* =========================
   SCENE 3
========================= */

const scene3Lines = [
    "[possum]\"Hello there.\"",
    "[pause]You don't realise how drunk you are until you try to stand up and can't stay steady, and stumble back against the tree.",
    "You weren't looking where you were going, anyway. You were looking at the thing that must've been watching you since you got here.",
    "[possum]\"How are you going?\"",
];

/* =========================
   DIALOGUE RESPONSES
========================= */

const answerLines = [
    "\"I'm alright,\" you say.",
];

const dontAnswerLines = [
    "[possum]\"Not very talkative, are you? That's alright.\"",
];

/* =========================
   CONTINUED STORY
========================= */

const scene4Lines = [
    "[pause]\"You're... you're a possum?\"",
    "[possum]\"Of course I am.\"",
    "Every now and then, he'll reposition his hands along the branch he's on, but he doesn't take his eyes off you.",
    "[possum]\"What are you doing here?\"",
    "What are you meant to tell him?",
    "\"I dunno.\"",
    "Those guys you saw earlier have gone. Doesn't seem like there's anyone else who's gonna hear you.",
    "\"My boyfriend said he didn't wanna be with me anymore,\" you say. \"I'd usually be at his place, but... yeah.\"",
    "[possum]\"Oh no! That wasn't very nice of him!\"",
    "\"Aw, I mean, I get it.\"",
    "The leaves rustle. It seems like something else has caught the possum's attention, but only for a second. It's like he's doing that thing your psych did -- like he's waiting for you to talk again first.",
    "\"Sorry. I'm, like, really drunk.\"",
    "He doesn't so much as blink at that.",
    "[pause]\"I might go now,\" you say. \"I'm tired as.\"",
    "[possum]\"Will you be back soon?\"",
    "...",
    "\"Uh, I dunno. Maybe.\"",
    "The possum nods. He's still nodding as he climbs further up the tree, out of sight.",
    "Carlton Gardens sways, and you almost lose your balance, but you find the path out. Your bottle is drained, now. You drop it into a bin and it clinks against all the others in there.",
];

/* =========================
   SCENE 5
========================= */

const scene5Lines = [

    "Your bedsheets aren't put on right. Your pillowcase was starting to tinge yellow, so you took it off.",
    "It's gonna take a while for you to get to sleep, regardless. There are tablets you can take, but you tried one not long ago and it didn't do what it was meant to -- you were still awake except you couldn't move.",
    "It'd be too expensive to get the type of thing you need. You'll look up what else you can do to...",
    "Fuck.",
    "You don't have your phone on you.",
    "Where'd you have it last? in the...",
    "In Carlton Gardens.[pause]",

];

/* =========================
   STATE
========================= */

let currentLine = 0;
let currentScene = 1;

let isTyping = false;

let lookedLeft = false;
let lookedRight = false;

let typingTimeout;

/* =========================
   START GAME
========================= */

titleScreen.addEventListener("click", () => {

    titleScreen.classList.add("fade-out");
});

titleScreen.addEventListener("transitionend", () => {

    if (titleScreen.classList.contains("fade-out")) {

        titleScreen.style.display = "none";

        introScreen.classList.add("show");

        setTimeout(() => {

            textbox.classList.add("show");

            setTimeout(() => {

                typeLine(lines[currentLine]);

            }, 2500);

        }, 5000);
    }
});

/* =========================
   TYPEWRITER
========================= */

function typeLine(text) {

    const isPossumDialogue = text.startsWith("[possum]");

    if (isPossumDialogue) {

        text = text.replace("[possum]", "");
    }

    isTyping = true;

    dialogue.textContent = "";

    nextIndicator.classList.remove("show");

    let index = 0;

    function typeCharacter() {

        if (index >= text.length) {

            isTyping = false;

            if (
                currentScene === 1 &&
                currentLine === lines.length - 1
            ) {

                startNextScene();

                return;
            }

            if (
                currentScene === 2 &&
                currentLine === nextSceneLines.length - 1
            ) {

                setTimeout(() => {

                    showChoices();

                }, 800);

                return;
            }

            if (
                currentScene === 2 &&
                (
                    leftChoiceLines.includes(text) ||
                    rightChoiceLines.includes(text)
                )
            ) {

                setTimeout(() => {

                    showChoices();

                }, 500);

                return;
            }

            if (
                currentScene === 3 &&
                currentLine === scene3Lines.length - 1
            ) {

                setTimeout(() => {

                    showDialogueChoices();

                }, 800);

                return;
            }

            nextIndicator.classList.add("show");

            return;
        }

        if (text.slice(index, index + 7) === "[pause]") {

            index += 7;

            typingTimeout = setTimeout(typeCharacter, 3000);

            return;
        }

        const currentChar = text[index];

        dialogue.textContent += currentChar;

        if (currentChar !== " ") {

            if (isPossumDialogue) {

                possumTypingSound.currentTime = 0;
                possumTypingSound.play();

            } else {

                typingSound.currentTime = 0;
                typingSound.play();
            }
        }

        index++;

        let delay = 55;

        const nextChar = text[index];

        const recentText = dialogue.textContent.toLowerCase();

        if (recentText.endsWith("boyfriend")) {

            delay = 140;
        }

        if (
            currentChar === "\"" &&
            (
                text[index - 2] === "." ||
                text[index - 2] === "!" ||
                text[index - 2] === "?"
            )
        ) {

            delay = 700;
        }

        else if (
            (
                currentChar === "." ||
                currentChar === "!" ||
                currentChar === "?"
            )
            &&
            nextChar !== "\""
        ) {

            delay = 700;
        }

        else if (
            currentChar === "-" &&
            nextChar === "-"
        ) {

            delay = 220;
        }

        else if (
            currentChar === "," ||
            currentChar === ";" ||
            currentChar === ":"
        ) {

            delay = 300;
        }

        typingTimeout = setTimeout(typeCharacter, delay);
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
   CONTINUE STORY
========================= */

function startNextScenePart() {

    currentScene = 6;

    currentLine = 0;

    typeLine(scene4Lines[currentLine]);
}

/* =========================
   START NEW SCENE
========================= */

function startScene(sceneNumber, sceneLines) {

    currentScene = sceneNumber;

    currentLine = 0;

    textbox.classList.remove("show");

    nextIndicator.classList.remove("show");

    setTimeout(() => {

        dialogue.textContent = "";

        textbox.classList.add("show");

        setTimeout(() => {

            typeLine(sceneLines[currentLine]);

        }, 1500);

    }, 2500);
}

/* =========================
   CHOICE VISIBILITY
========================= */

function showChoices() {

    if (!lookedLeft) {
        leftChoice.classList.add("show");
    }

    if (!lookedRight) {
        rightChoice.classList.add("show");
    }

    if (lookedLeft && lookedRight) {
        upChoice.classList.add("show");
    }
}

function hideChoices() {

    leftChoice.classList.remove("show");
    rightChoice.classList.remove("show");
    upChoice.classList.remove("show");
}

function showDialogueChoices() {

    answerChoice.classList.add("show");
    dontAnswerChoice.classList.add("show");
}

function hideDialogueChoices() {

    answerChoice.classList.remove("show");
    dontAnswerChoice.classList.remove("show");
}

/* =========================
   LOOK LEFT
========================= */

leftChoice.addEventListener("click", () => {

    lookedLeft = true;

    hideChoices();

    currentLine = 0;

    typeLine(leftChoiceLines[currentLine]);
});

/* =========================
   LOOK RIGHT
========================= */

rightChoice.addEventListener("click", () => {

    lookedRight = true;

    hideChoices();

    currentLine = 0;

    typeLine(rightChoiceLines[currentLine]);
});

/* =========================
   LOOK UP
========================= */

upChoice.addEventListener("click", () => {

    hideChoices();

    currentScene = 3;

    currentLine = 0;

    typeLine(scene3Lines[currentLine]);
});

/* =========================
   ANSWER HIM
========================= */

answerChoice.addEventListener("click", () => {

    hideDialogueChoices();

    currentScene = 4;

    currentLine = 0;

    typeLine(answerLines[currentLine]);
});

/* =========================
   DON'T ANSWER HIM
========================= */

dontAnswerChoice.addEventListener("click", () => {

    hideDialogueChoices();

    currentScene = 5;

    currentLine = 0;

    typeLine(dontAnswerLines[currentLine]);
});

/* =========================
   CLICK TO ADVANCE / SKIP
========================= */

textbox.addEventListener("click", () => {

    if (isTyping) {

        clearTimeout(typingTimeout);

        let fullText = "";

        if (currentScene === 1) {

            fullText = lines[currentLine];
        }

        else if (currentScene === 2) {

            fullText = nextSceneLines[currentLine];
        }

        else if (currentScene === 3) {

            fullText = scene3Lines[currentLine];
        }

        else if (currentScene === 4) {

            fullText = answerLines[currentLine];
        }

        else if (currentScene === 5) {

            fullText = dontAnswerLines[currentLine];
        }

        else if (currentScene === 6) {

            fullText = scene4Lines[currentLine];
        }

        else if (currentScene === 7) {

            fullText = scene5Lines[currentLine];
        }

        dialogue.textContent = fullText
            .replace("[possum]", "")
            .replace(/\[pause\]/g, "");

        isTyping = false;

        if (
            currentScene === 1 &&
            currentLine === lines.length - 1
        ) {

            startNextScene();

            return;
        }

        if (
            currentScene === 2 &&
            currentLine === nextSceneLines.length - 1
        ) {

            setTimeout(() => {

                showChoices();

            }, 800);

            return;
        }

        if (
            currentScene === 3 &&
            currentLine === scene3Lines.length - 1
        ) {

            setTimeout(() => {

                showDialogueChoices();

            }, 800);

            return;
        }

        nextIndicator.classList.add("show");

        return;
    }

    if (currentScene === 1) {

        currentLine++;

        if (currentLine < lines.length) {

            typeLine(lines[currentLine]);
        }
    }

    else if (currentScene === 2) {

        currentLine++;

        if (currentLine < nextSceneLines.length) {

            typeLine(nextSceneLines[currentLine]);
        }
    }

    else if (currentScene === 3) {

        currentLine++;

        if (currentLine < scene3Lines.length) {

            typeLine(scene3Lines[currentLine]);
        }
    }

    else if (currentScene === 4) {

        currentLine++;

        if (currentLine < answerLines.length) {

            typeLine(answerLines[currentLine]);

        } else {

            startNextScenePart();
        }
    }

    else if (currentScene === 5) {

        currentLine++;

        if (currentLine < dontAnswerLines.length) {

            typeLine(dontAnswerLines[currentLine]);

        } else {

            startNextScenePart();
        }
    }

    else if (currentScene === 6) {

        currentLine++;

        if (currentLine < scene4Lines.length) {

            typeLine(scene4Lines[currentLine]);

        } else {

            startScene(7, scene5Lines);
        }
    }

    else if (currentScene === 7) {

        currentLine++;

        if (currentLine < scene5Lines.length) {

            typeLine(scene5Lines[currentLine]);

        } else {

            nextIndicator.classList.remove("show");

            dialogue.textContent = "";
        }
    }
});