function convertBase(value, fromBase, toBase) {
    // Convert the input value to decimal (base 10)
    const decimalValue = parseInt(value, fromBase);
    if (isNaN(decimalValue)) {
        return "NaN";
    }

    // Convert the decimal value to the target base
    return decimalValue.toString(toBase);
}

function updateOutput(inputName) {
    let input = document.getElementById(inputName).value;
    if (input != "") {
        const base1 = parseInt(document.getElementById("base1").value);
        const base2 = parseInt(document.getElementById("base2").value);
        const base3 = parseInt(document.getElementById("base3").value);

        let output1 = "";
        let output2 = "";
        let output3 = "";
        if (inputName === "input1") {
            output1 = input;
            output2 = convertBase(input, base1, base2);
            output3 = convertBase(input, base1, base3);
        } else if (inputName === "input2") {
            output1 = convertBase(input, base2, base1);
            output2 = input;
            output3 = convertBase(input, base2, base3);
        } else if (inputName === "input3") {
            output1 = convertBase(input, base3, base1);
            output2 = convertBase(input, base3, base2);
            output3 = input;
        }

        document.getElementById("input1").value = output1;
        document.getElementById("input2").value = output2;
        document.getElementById("input3").value = output3;
    }
}

document.querySelectorAll("textarea").forEach((element) => {
    element.addEventListener("input", () => updateOutput(element.id));
});
