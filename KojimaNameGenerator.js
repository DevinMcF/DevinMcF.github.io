// Random Number Generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Find if they have more than one name

function getMultiname() {
    var btn = document.getElementById("continue");
    var text = document.getElementById("jstext");
    var body = document.getElementById("body");
    btn.innerText = "Roll the Dice!";
    text.innerHTML =
        "<b>Section 1: Determining How Many Names You Have.</b><br>" +
        "Kojima often creates characters that have many alternate names,<br>" +
        "so we must first figure out how many names you will have.";
    text.style.color = "black";
    body.style.background = "none";
    btn.setAttribute("onClick", "rollMultiname()")
}

function rollMultiname() {
    var btn = document.getElementById("continue");
    var text = document.getElementById("jstext");
    var body = document.getElementById("body");
    var first_d6 = getRndInteger(1, 6);
    if (first_d6 < 6){
        const multiname = false;
        text.innerHTML =
            "You rolled a<br>" +
            "<b>" + first_d6 + "</b><br>" +
            "That means you only have one name.";
    } else {
        const multiname = true;
        text.innerHTML =
            "You rolled a<br>" +
            "<b>" + first_d6 + "</b><br>" +
            "That means you have many names you go by!";
    }
    btn.innerText = "Continue"
    btn.setAttribute("onClick", "getPersonalInfo()")
}

function getPersonalInfo(){
    var btn = document.getElementById("continue");
    var text = document.getElementById("jstext");
    var body = document.getElementById("body");
    text.innerHTML =
        "<b>Section 2: Personal Information</b><br>" +
    "Kojima’s characters have names that are directly related to their own character traits.<br>" +
    "This information will make sure your name fits your personality.<br>"
}
