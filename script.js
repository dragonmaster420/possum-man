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
    "Where'd you have it last? In the...",
    "In Carlton Gardens.[pause]",
];

/* =========================
   BEDROOM CHOICES
========================= */

const showerLines = [
    "It's been ages since you had a shower. That only occurs to you 'cause mould's started growing in the corners and in the grit.",
    "The water keeps coming out cold. You ease each limb under so they at least get wet.",
    "For a moment, there's another naked body in the bathroom with you. When you cringe away from it, it does the same. Turns out it's yours -- in the mirror.",
    "You wrap yourself in a towel and stand at the sink for a while, staring down the drain.",
];

const watchLines = [
    "You've seen every epsiode of Married at First Sight there is. You count how many there are and realise how many hours that adds up to.",
    "It'd be too difficult to get into anything you haven't already seen, so you put on the most recent season.",
    "You forgot how actually romantic some of the couples are.",
];

const bedLines = [
    "Thankfully, you're finally drunk enough to feel like you can get to sleep.",
];

/* =========================
   SCENE 6
========================= */

const nextMorningLines = [
    "You wake up. There's nothing to do.",
    "...",
    "[pause]It's dark again. As much as you'd rather not, you do need your phone.",
    "You can't afford a new one. They told you not to come into work anymore. It might still be in Carlton Gardens, at that tree you were at.",
    "It's worth checking. What else are you gonna do?",
];

/* =========================
   MORNING CHOICES
========================= */

const messageHimLines = [
    "You don't have your phone, yeah, but you can still log in to Instagram on your laptop.",
    "In your chat with him, the DMs are pretty one-sided, but that's surely only 'cause he's waiting on you to say the right thing.",
    "You type 'I miss you' and send it.",
    "You wait an hour or so, and nothing changes.",
];

const goOutLines = [
    "You get on with it.",
];

const morningLoopLines = [
    "You're still really tired.",
];


const yourNextSceneLines = [
    "It would've been weird going to the Gardens without more wine.",
];


/* =========================
   STATE
========================= */

let currentLine = 0;
let currentScene = 1;

let isTyping = false;

let lookedLeft = false;
let lookedRight = false;

let showerDone = false;
let watchDone = false;

let messagedHim = false;

let bedroomChoiceActive = false;
let morningChoiceActive = false;

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
   FINISH LINE EVENTS
========================= */

function handleLineFinish() {

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
}

/* =========================
   TYPEWRITER
========================= */

function typeLine(text) {

    clearTimeout(typingTimeout);

    const isPossumDialogue = text.startsWith("[possum]");

    if (isPossumDialogue) {

        text = text.replace("[possum]", "");
    }

    isTyping = true;

    dialogue.textContent = "";

    nextIndicator.classList.remove("show");

    let index = 0;

    function typeCharacter() {

        if (!isTyping) {
            return;
        }

        if (index >= text.length) {

            handleLineFinish();
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
   BEDROOM CHOICES
========================= */

function showBedroomChoices() {

    bedroomChoiceActive = true;

    leftChoice.textContent = "have a shower";
    rightChoice.textContent = "watch something";
    upChoice.textContent = "go to bed";

    if (!showerDone) {
        leftChoice.classList.add("show");
    }

    if (!watchDone) {
        rightChoice.classList.add("show");
    }

    upChoice.classList.add("show");
}

function hideBedroomChoices() {

    leftChoice.classList.remove("show");
    rightChoice.classList.remove("show");
    upChoice.classList.remove("show");
}

/* =========================
   MORNING CHOICES
========================= */

function showMorningChoices() {

    morningChoiceActive = true;

    leftChoice.textContent = "message him";
    rightChoice.textContent = "go out";
    upChoice.textContent = "go to bed";

    if (!messagedHim) {
        leftChoice.classList.add("show");
    }

    rightChoice.classList.add("show");
    upChoice.classList.add("show");
}

function hideMorningChoices() {

    leftChoice.classList.remove("show");
    rightChoice.classList.remove("show");
    upChoice.classList.remove("show");
}

/* =========================
   LOOK LEFT
========================= */

/* =========================
   LOOK LEFT
========================= */

leftChoice.addEventListener("click", () => {

    if (morningChoiceActive) {

        messagedHim = true;

        hideMorningChoices();

        currentScene = 12;
        currentLine = 0;

        typeLine(messageHimLines[currentLine]);

        return;
    }

    if (bedroomChoiceActive) {

        showerDone = true;

        hideBedroomChoices();

        currentScene = 8;
        currentLine = 0;

        typeLine(showerLines[currentLine]);

        return;
    }

    lookedLeft = true;

    hideChoices();

    currentScene = 15; // NEW TEMP SCENE
    currentLine = 0;

    typeLine(leftChoiceLines[currentLine]);
});

/* =========================
   LOOK RIGHT
========================= */

rightChoice.addEventListener("click", () => {

    if (morningChoiceActive) {

        morningChoiceActive = false;

        hideMorningChoices();

        currentScene = 13;
        currentLine = 0;

        typeLine(goOutLines[currentLine]);

        return;
    }

    if (bedroomChoiceActive) {

        watchDone = true;

        hideBedroomChoices();

        currentScene = 9;
        currentLine = 0;

        typeLine(watchLines[currentLine]);

        return;
    }

    lookedRight = true;

    hideChoices();

    currentScene = 16; // NEW TEMP SCENE
    currentLine = 0;

    typeLine(rightChoiceLines[currentLine]);
});

/* =========================
   LOOK UP
========================= */

upChoice.addEventListener("click", () => {

    if (morningChoiceActive) {

        hideMorningChoices();

        currentScene = 14;
        currentLine = 0;

        typeLine(morningLoopLines[currentLine]);

        return;
    }

    if (bedroomChoiceActive) {

        bedroomChoiceActive = false;

        hideBedroomChoices();

        currentScene = 10;
        currentLine = 0;

        typeLine(bedLines[currentLine]);

        return;
    }

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

        else if (currentScene === 8) {
            fullText = showerLines[currentLine];
        }

        else if (currentScene === 9) {
            fullText = watchLines[currentLine];
        }

        else if (currentScene === 10) {
            fullText = bedLines[currentLine];
        }

        else if (currentScene === 11) {
            fullText = nextMorningLines[currentLine];
        }

        else if (currentScene === 12) {
            fullText = messageHimLines[currentLine];
        }

        else if (currentScene === 13) {
            fullText = goOutLines[currentLine];
        }

        else if (currentScene === 14) {
            fullText = morningLoopLines[currentLine];
        }

        else if (currentScene === 15) {
            fullText = leftChoiceLines[currentLine];
        }

        else if (currentScene === 16) {
            fullText = rightChoiceLines[currentLine];
        }

        dialogue.textContent = fullText
            .replace("[possum]", "")
            .replace(/\[pause\]/g, "");

        handleLineFinish();

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

            showBedroomChoices();
        }
    }

    else if (currentScene === 8) {

        currentLine++;

        if (currentLine < showerLines.length) {

            typeLine(showerLines[currentLine]);

        } else {

            showBedroomChoices();
        }
    }

    else if (currentScene === 9) {

        currentLine++;

        if (currentLine < watchLines.length) {

            typeLine(watchLines[currentLine]);

        } else {

            showBedroomChoices();
        }
    }

    else if (currentScene === 10) {

        currentLine++;

        if (currentLine < bedLines.length) {

            typeLine(bedLines[currentLine]);

        } else {

            startScene(11, nextMorningLines);
        }
    }

    else if (currentScene === 11) {

        currentLine++;

        if (currentLine < nextMorningLines.length) {

            typeLine(nextMorningLines[currentLine]);

        } else {

            showMorningChoices();
        }
    }

    else if (currentScene === 12) {

        currentLine++;

        if (currentLine < messageHimLines.length) {

            typeLine(messageHimLines[currentLine]);

        } else {

            showMorningChoices();
        }
    }

    /* =========================
   GO OUT
========================= */

else if (currentScene === 13) {

    currentLine++;

    if (currentLine < goOutLines.length) {

        typeLine(goOutLines[currentLine]);

    } else {

        startScene(17, yourNextSceneLines);
    }
}

    else if (currentScene === 14) {

        currentLine++;

        if (currentLine < morningLoopLines.length) {

            typeLine(morningLoopLines[currentLine]);

        } else {

            startScene(11, nextMorningLines);
        }
    }

    else if (currentScene === 15) {

    currentLine++;

    if (currentLine < leftChoiceLines.length) {

        typeLine(leftChoiceLines[currentLine]);

    } else {

        showChoices();
    }
}

    else if (currentScene === 16) {

    currentLine++;

    if (currentLine < rightChoiceLines.length) {

        typeLine(rightChoiceLines[currentLine]);

    } else {

        showChoices();
    }
}
});