
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


const typingSound = new Audio("audio/typing-1.mp3");
typingSound.volume = 0.25;

const possumTypingSound = new Audio("audio/p-typing.mp3");
possumTypingSound.volume = 0.25;

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

const leftChoiceLines = [
    "..."
];

const rightChoiceLines = [
    "You're second-guessing yourself.",
];

const scene3Lines = [
    "[possum]\"Hello there.\"",
    "[pause]You don't realise how drunk you are until you try to stand up and can't stay steady, and stumble back against the tree.",
    "You weren't looking where you were going, anyway. You were looking at the thing that must've been watching you since you got here.",
    "[possum]\"How are you going?\"",
];

const answerLines = [
    "\"I'm alright,\" you say.",
];

const dontAnswerLines = [
    "[possum]\"Not very talkative, are you? That's alright.\"",
];

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

const scene5Lines = [
    "Your bedsheets aren't put on right. Your pillowcase was starting to tinge yellow, so you took it off.",
    "It's gonna take a while for you to get to sleep, regardless. There are tablets you can take, but you tried one not long ago and it didn't do what it was meant to -- you were still awake except you couldn't move.",
    "It'd be too expensive to get the type of thing you need. You'll look up what else you can do to...",
    "Fuck.",
    "You don't have your phone on you.",
    "Where'd you have it last? In the...",
    "In Carlton Gardens.[pause]",
];

const showerLines = [
    "It's been ages since you had a shower. That only occurs to you 'cause mould's started growing in the corners and in the grit.",
    "The water keeps coming out cold. You ease each limb under so they at least get wet.",
    "For a moment, there's another naked body in the bathroom with you. When you cringe away from it, it does the same. Turns out it's yours -- in the mirror.",
    "You wrap yourself in a towel and stand at the sink for a while, staring down the drain.",
];

const watchLines = [
    "You've seen every episode of Married at First Sight there is. You count how many there are and realise how many hours that adds up to.",
    "It'd be too difficult to get into anything you haven't already seen, so you put on the most recent season.",
    "You forgot how actually romantic some of the couples are.",
];

const bedLines = [
    "Thankfully, you're finally drunk enough to feel like you can get to sleep.",
];

const nextMorningLines = [
    "You wake up. There's nothing to do.",
    "...",
    "[pause]It's dark again. As much as you'd rather not, you do need your phone.",
    "You can't afford a new one. They told you not to come into work anymore. It might still be in Carlton Gardens, at that tree you were at.",
    "It's worth checking. What else are you gonna do?",
];

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
    "It would've been weird going to the Gardens without more wine. A goon bag, this time, since it's cheaper -- tucked under your arm so cars driving past can't read the packaging as well.",
    "Once you're in the brush, shadowed, you gulp some of it. Tastes like off fruit.",
    "In the same tree as when you saw him last, the possum waits for you.",
    "He mustn't be that concerned with anyone else seeing. Not that there's anyone else here.",
    "He's got something... yeah, in his hand, he's got your phone.",
    "[possum]\"You dropped this,\" he tells you.",
    "\"Shit. I fully thought I wasn't gonna find it.\"",
    "...",
    "\"Can I have it back?\"",
    "The possum chuckles. [possum]\"Of course you can.\"",
    "\"Okay, cool.\"",
    "...",
    "[possum]\"Come closer.\"",
    "He's holding it with the screen towards him. Did he see you putting your password in?",
    "When you look back at him, you notice... his face...",
    "It looks so much like yours.",
    "[pause]You turn around and go back the way you came. Or maybe not the exact way, but surely out of Carlton Gardens.",
    "You still can't see where the grass ends, but you keep going.",
    "[possum]\"Hold on, where are you going?\""
];

const reconsiderLines = [
    "Wait... well... you do need your phone. You go up to the possum.",
];

const ignoreHimLines = [
    "You press on. Everything's sort of tipping over. Makes the lamps look like they're writing in the darkness, trying to tell you something.",
    "[possum]\"Don't you want your phone back?\"",
];

const goUpToHimLines = [
    "You go up to the possum.",
];

const scene21Lines = [
    "[pause]...",
    "[possum]\"Before I return this to you, you must know...\"",
    "[possum]\"Everything will be alright. I understand that you aren't doing well, but you don't have to feel like that.\"",
    "...",
    "[possum]\"You are so beautiful. It's not your fault that there are too many people who can't see that. It's only you now -- you and me. You are so, so beautiful. You don't have to listen to anyone else. You are so beautiful and perfect.\"",
];

const scene22Lines = [
    "[pause]You're on the train.",
    "[pause]You don't remember getting on.",
    "...",
    "That possum man's alright, isn't he?",
    "He came on pretty strong at first, but at least he wants to be around you.",
    "[pause]Is that...?",
    "You thought you might've seen something out the window.",
    "The trip home always goes faster after you've had a few.",

];

const scene23Lines = [
    "Your house seems bigger than usual. Are they gonna up the rent for that?",
    "Hahahahahahahahahahahahahahaha.",
    "Whatever.",
];

const checkPhoneLines = [
    "As soon as you open Instagram, there it is:",
    "He's with another guy. You don't blame him -- he's pretty hot.",
    "Hahahahahahahahahahahahahahahahahahahahahahahahahahahaha.",
];

const drinkLines = [
    "The fridge is basically empty. You go through all the cupboards and drawers.",
    "[pause]...",
];

const roomLines = [
    "[pause][possum]\"Hello again.\"",
    "[pause][possum]\"You have such a lovely room. And your bed looks so comfortable.\"",
    "[pause][possum]\"I really think you need me here tonight.\"",
];

const letHimInLines = [
    "...",
];
/* =========================
   STATE
========================= */

let finalRoomChoiceActive = false;
let possumRoomChoiceActive = false;

let checkedPhone = false;
let lookedForDrink = false;

let endChoiceActive = false;
let ignoreLoopActive = false;

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

function typeLine(text) {

    clearTimeout(typingTimeout);

let isPossumDialogue = text.includes("[possum]");

text = text.replace("[possum]", "");

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

function startNextScene() {

    currentScene = 2;

    currentLine = 0;

    dialogue.textContent = "";

    typeLine(nextSceneLines[currentLine]);
}

function startNextScenePart() {

    currentScene = 6;

    currentLine = 0;

    typeLine(scene4Lines[currentLine]);
}

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

function showEndChoices() {

    endChoiceActive = true;

    leftChoice.textContent = "reconsider";
    rightChoice.textContent = "ignore him";

    leftChoice.classList.add("show");
    rightChoice.classList.add("show");

    upChoice.classList.remove("show");
}

function showIgnoreLoopChoices() {

    ignoreLoopActive = true;

    leftChoice.textContent = "go another way";
    rightChoice.textContent = "go up to him";

    leftChoice.classList.add("show");
    rightChoice.classList.add("show");

    upChoice.classList.remove("show");
}

function hideEndChoices() {

    leftChoice.classList.remove("show");
    rightChoice.classList.remove("show");
    upChoice.classList.remove("show");
}

function showFinalRoomChoices() {

    finalRoomChoiceActive = true;

    leftChoice.textContent = "check your phone";
    rightChoice.textContent = "look for more to drink!";
    upChoice.textContent = "go to your room";

    if (!checkedPhone) {
        leftChoice.classList.add("show");
    }

    if (!lookedForDrink) {
        rightChoice.classList.add("show");
    }

    upChoice.classList.add("show");
}


function hideFinalRoomChoices() {

    leftChoice.classList.remove("show");
    rightChoice.classList.remove("show");
    upChoice.classList.remove("show");
}

function showPossumRoomChoices() {

    possumRoomChoiceActive = true;

    leftChoice.textContent = "ignore him";
    rightChoice.textContent = "let him in";

    leftChoice.classList.add("show");
    rightChoice.classList.add("show");

    upChoice.classList.remove("show");
}

function hidePossumRoomChoices() {

    leftChoice.classList.remove("show");
    rightChoice.classList.remove("show");
    upChoice.classList.remove("show");
}

leftChoice.addEventListener("click", () => {

if (possumRoomChoiceActive) {

    possumRoomChoiceActive = false;

    hidePossumRoomChoices();

    currentScene = 26;
    currentLine = 0;

    typeLine(roomLines[currentLine]);

    return;
}

if (finalRoomChoiceActive) {

    checkedPhone = true;

    hideFinalRoomChoices();

    currentScene = 24;
    currentLine = 0;

    typeLine(checkPhoneLines[currentLine]);

    return;
}
    
    if (ignoreLoopActive) {

        hideEndChoices();

        currentScene = 19;
        currentLine = 0;

        typeLine(ignoreHimLines[currentLine]);

        return;
    }


    if (endChoiceActive) {

        endChoiceActive = false;

        hideEndChoices();

        currentScene = 18;
        currentLine = 0;

        typeLine(reconsiderLines[currentLine]);

        return;
    }

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

    currentScene = 15;
    currentLine = 0;

    typeLine(leftChoiceLines[currentLine]);
});

rightChoice.addEventListener("click", () => {

if (possumRoomChoiceActive) {

    possumRoomChoiceActive = false;

    hidePossumRoomChoices();

    currentScene = 27;
    currentLine = 0;

    typeLine(letHimInLines[currentLine]);

    return;
}

if (finalRoomChoiceActive) {

    lookedForDrink = true;

    hideFinalRoomChoices();

    currentScene = 25;
    currentLine = 0;

    typeLine(drinkLines[currentLine]);

    return;
}

    if (ignoreLoopActive) {

        ignoreLoopActive = false;

        hideEndChoices();

        currentScene = 20;
        currentLine = 0;

        typeLine(goUpToHimLines[currentLine]);

        return;
    }

    if (endChoiceActive) {

        endChoiceActive = false;

        hideEndChoices();

        currentScene = 19;
        currentLine = 0;

        typeLine(ignoreHimLines[currentLine]);

        return;
    }

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

    currentScene = 16;
    currentLine = 0;

    typeLine(rightChoiceLines[currentLine]);
});

upChoice.addEventListener("click", () => {

if (finalRoomChoiceActive) {

    finalRoomChoiceActive = false;

    hideFinalRoomChoices();

    currentScene = 26;
    currentLine = 0;

    typeLine(roomLines[currentLine]);

    return;
}
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

answerChoice.addEventListener("click", () => {

    hideDialogueChoices();

    currentScene = 4;

    currentLine = 0;

    typeLine(answerLines[currentLine]);
});

dontAnswerChoice.addEventListener("click", () => {

    hideDialogueChoices();

    currentScene = 5;

    currentLine = 0;

    typeLine(dontAnswerLines[currentLine]);
});

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

        else if (currentScene === 18) {
            fullText = reconsiderLines[currentLine];
        }

        else if (currentScene === 19) {
            fullText = ignoreHimLines[currentLine];
        }

        else if (currentScene === 20) {
            fullText = goUpToHimLines[currentLine];
        }

        else if (currentScene === 21) {
            fullText = scene21Lines[currentLine];
        }

        else if (currentScene === 22) {
            fullText = scene22Lines[currentLine];
        }

        else if (currentScene === 23) {
            fullText = scene23Lines[currentLine];
        }

        else if (currentScene === 24) {
    fullText = checkPhoneLines[currentLine];
}

else if (currentScene === 25) {
    fullText = drinkLines[currentLine];
}

else if (currentScene === 26) {
    fullText = roomLines[currentLine];
}

else if (currentScene === 27) {
    fullText = letHimInLines[currentLine];
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

else if (currentScene === 17) {

    currentLine++;

    if (currentLine < yourNextSceneLines.length) {

        typeLine(yourNextSceneLines[currentLine]);

    } else {

        showEndChoices();
    }
}

else if (currentScene === 18) {

    currentLine++;

    if (currentLine < reconsiderLines.length) {

        typeLine(reconsiderLines[currentLine]);

    } else {

        startScene(21, scene21Lines);
        
    }
}

else if (currentScene === 19) {

    currentLine++;

    if (currentLine < ignoreHimLines.length) {

        typeLine(ignoreHimLines[currentLine]);

    } else {

        showIgnoreLoopChoices();
    }
}

else if (currentScene === 20) {

    currentLine++;

    if (currentLine < goUpToHimLines.length) {

        typeLine(goUpToHimLines[currentLine]);

    } else {

        startScene(21, scene21Lines);
        
    }
}

else if (currentScene === 21) {

    currentLine++;

    if (currentLine < scene21Lines.length) {

        typeLine(scene21Lines[currentLine]);

    } else {

        startScene(22, scene22Lines);
    }
}

/* =========================
   SCENE 22
========================= */

else if (currentScene === 22) {

    currentLine++;

    if (currentLine < scene22Lines.length) {

        typeLine(scene22Lines[currentLine]);

    } else {

        startScene(23, scene23Lines);
    }
}

/* =========================
   SCENE 23
========================= */

else if (currentScene === 23) {

    currentLine++;

    if (currentLine < scene23Lines.length) {

        typeLine(scene23Lines[currentLine]);

    } else {

        showFinalRoomChoices();
    }
}

/* =========================
   CHECK PHONE
========================= */

else if (currentScene === 24) {

    currentLine++;

    if (currentLine < checkPhoneLines.length) {

        typeLine(checkPhoneLines[currentLine]);

    } else {

        showFinalRoomChoices();
    }
}

/* =========================
   LOOK FOR DRINK
========================= */

else if (currentScene === 25) {

    currentLine++;

    if (currentLine < drinkLines.length) {

        typeLine(drinkLines[currentLine]);

    } else {

        showFinalRoomChoices();
    }
}

/* =========================
   GO TO YOUR ROOM
========================= */

else if (currentScene === 26) {

    currentLine++;

    if (currentLine < roomLines.length) {

        typeLine(roomLines[currentLine]);

    } else {

        showPossumRoomChoices();
    }
}

else if (currentScene === 27) {

    currentLine++;

    if (currentLine < letHimInLines.length) {

        typeLine(letHimInLines[currentLine]);
    }
}

});