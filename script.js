function login() {
    let user = document.getElementById('username').value;
    if(user) {
        alert("Welcome " + user + " to Blurt Ludo!");
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('roll-dice').style.display = 'block';
        document.getElementById('status').innerText = "Waiting for opponent...";
    } else {
        alert("Please enter your Blurt username");
    }
}

function rollDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('status').innerText = "You rolled a " + diceValue;
}
