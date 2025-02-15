function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert("Invalid Expression");
    }
}

function sqrt() {
    document.getElementById('display').value = Math.sqrt(eval(document.getElementById('display').value));
}

function cbrt() {
    document.getElementById('display').value = Math.cbrt(eval(document.getElementById('display').value));
}

function power(exp) {
    document.getElementById('display').value = Math.pow(eval(document.getElementById('display').value), exp);
}

function powerY() {
    document.getElementById('display').value += "**";
}

function factorial() {
    let num = eval(document.getElementById('display').value);
    let fact = 1;
    for (let i = 2; i <= num; i++) fact *= i;
    document.getElementById('display').value = fact;
}

function randomNumber() {
    document.getElementById('display').value = Math.random();
}