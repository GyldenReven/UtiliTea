const morseArray = {
    A: [0, 1],
    B: [1, 0, 0, 0],
    C: [1, 0, 1, 0],
    D: [1, 0, 0],
    E: [0],
    F: [0, 0, 1, 0],
    G: [1, 1, 0],
    H: [0, 0, 0, 0],
    I: [0, 0],
    J: [0, 1, 1, 1],
    K: [1, 0, 1],
    L: [0, 1, 0, 0],
    M: [1, 1],
    N: [1, 0],
    O: [1, 1, 1],
    P: [0, 1, 1, 0],
    Q: [1, 1, 0, 1],
    R: [0, 1, 0],
    S: [0, 0, 0],
    T: [1],
    U: [0, 0, 1],
    V: [0, 0, 0, 1],
    W: [0, 1, 1],
    X: [1, 0, 0, 1],
    Y: [1, 0, 1, 1],
    Z: [1, 1, 0, 0],
    0: [1, 1, 1, 1, 1],
    1: [0, 1, 1, 1, 1],
    2: [0, 0, 1, 1, 1],
    3: [0, 0, 0, 1, 1],
    4: [0, 0, 0, 0, 1],
    5: [0, 0, 0, 0, 0],
    6: [1, 0, 0, 0, 0],
    7: [1, 1, 0, 0, 0],
    8: [1, 1, 1, 0, 0],
    9: [1, 1, 1, 1, 0],
    ".": [0, 1, 0, 1, 0, 1],
    ",": [1, 1, 0, 0, 1, 1],
    "?": [0, 0, 1, 1, 0, 0],
    "'": [0, 1, 1, 1, 1, 0],
    "!": [1, 0, 1, 0, 1, 1],
    "/": [1, 0, 0, 1, 0],
    "(": [1, 0, 1, 1, 0],
    ")": [1, 0, 1, 1, 0, 1],
    "&": [0, 1, 0, 0, 0],
    ":": [1, 1, 1, 0, 0, 0],
    ";": [1, 0, 1, 0, 1, 0],
    "=": [1, 0, 0, 0, 1],
    "+": [0, 1, 0, 1, 0],
    "-": [1, 0, 0, 0, 0, 1],
    _: [0, 0, 1, 1, 0, 1],
    '"': [0, 1, 0, 0, 1, 0],
    $: [0, 0, 0, 1, 0, 0],
    "@": [0, 1, 1, 0, 1, 0],
    " ": [4],
};

function morseToText(morseCode, charArray) {
    return morseCode
        .split(charArray[2])
        .map((morseChar) => {
            let listChar = morseChar
                .split("")
                .map((char) => charArray.indexOf(char));
            return Object.keys(morseArray).find(
                (key) =>
                    JSON.stringify(morseArray[key]) === JSON.stringify(listChar)
            );
        })
        .join('');
}

function textToMorse(text, charArray) {
    return text
        .split("")
        .map((char) =>
            morseArray[char.toUpperCase()].map((n) => charArray[n]).join("")
        )
        .join(charArray[2]);
}

const inputText = document.getElementById("inputText");
const inputMorse = document.getElementById("inputMorse");

const inputPoint = document.getElementById("inputPoint");
const inputBar = document.getElementById("inputBar");
const inputSpace = document.getElementById("inputSpace");
const inputSlash = document.getElementById("inputSlash");

console.log(inputText);
console.log(inputMorse);

inputText.addEventListener("input", () => {
    const text = inputText.value;
    const charArray = [
        inputPoint.value,
        inputBar.value,
        inputSpace.value,
        inputSlash.value,
    ];
    const morseCode = textToMorse(text, charArray);
    console.log(morseCode);
    inputMorse.textContent = morseCode;
});

inputMorse.addEventListener("input", () => {
    const morseCode = inputMorse.value;
    const charArray = [
        inputPoint.value,
        inputBar.value,
        inputSpace.value,
        inputSlash.value,
    ];
    const text = morseToText(morseCode, charArray);
    console.log(text);
    inputText.textContent = text;
});
