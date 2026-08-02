// বোর্ড তৈরি করার ফাংশন
function createBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < 225; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        
        // লুডু কালার প্যাটার্ন (সরলীকৃত)
        let row = Math.floor(i / 15);
        let col = i % 15;
        
        if (row < 6 && col < 6) cell.classList.add('red');
        if (row < 6 && col > 8) cell.classList.add('green');
        if (row > 8 && col < 6) cell.classList.add('blue');
        if (row > 8 && col > 8) cell.classList.add('yellow');
        
        board.appendChild(cell);
    }
}

function loginWithKeychain() {
    const username = document.getElementById('username').value;
    if (!username) return alert("Enter Username");
    
    // ব্লার্ট কিচেইন চেক
    if (window.blurt_keychain) {
        window.blurt_keychain.requestHandshake(() => {
            alert("Connected to Blurt Keychain!");
            document.getElementById('auth-box').style.display = 'none';
            document.getElementById('player-display').innerText = "Player: " + username;
            document.getElementById('roll-btn').disabled = false;
        });
    } else {
        alert("Please install Blurt Keychain Extension. For now, continuing in Demo mode.");
        document.getElementById('auth-box').style.display = 'none';
        document.getElementById('player-display').innerText = "Demo Player: " + username;
        document.getElementById('roll-btn').disabled = false;
    }
}

function rollDice() {
    const diceResult = document.getElementById('dice-result');
    const rollBtn = document.getElementById('roll-btn');
    rollBtn.disabled = true;
    
    let count = 0;
    let interval = setInterval(() => {
        diceResult.innerText = Math.floor(Math.random() * 6) + 1;
        count++;
        if (count > 10) {
            clearInterval(interval);
            rollBtn.disabled = false;
        }
    }, 50);
}

createBoard();
