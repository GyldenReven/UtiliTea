function strNoAccent(a) {
    return a.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function caesarCipher(str, shift) {
    return str
        .split("")
        .map((char) => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt();
                const base = code >= 65 && code <= 90 ? 65 : 97;
                return String.fromCharCode(
                    ((code - base + parseInt(shift)) % 26) + base
                );
            }
            return char;
        })
        .join("");
}

// encryption
inputText.addEventListener("input", () => {
    outputText.value = caesarCipher(strNoAccent(inputText.value), shift.value);
});

shift.addEventListener("input", () => {
    outputText.value = caesarCipher(strNoAccent(inputText.value), shift.value);
});

// decryption
outputText.addEventListener("input", () => {
    inputText.value = caesarCipher(outputText.value, -shift.value);
});

// valeurs par défaut
shift.value = 3;
inputText.value = "Hello world !";
outputText.value = caesarCipher(inputText.value, shift.value);
