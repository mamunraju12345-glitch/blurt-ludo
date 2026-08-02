const board = document.getElementById('board');
const diceDisplay = document.getElementById('dice-result');

// বোর্ড এবং গুটি তৈরি
function initGame() {
    board.innerHTML = "";
    for (let i = 0; i < 225; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = 'cell-' + i;
        
        let row = Math.floor(i / 15);
        let col = i % 15;
        
        // কালার সেট করা
        if (row < 6 && col < 6) cell.classList.add('red');
        else if (row < 6 && col > 8) cell.classList.add('green');
        else if (row > 8 && col < 6) cell.classList.add('blue');
        else if (row > 8 && col > 8) cell.classList.add('yellow');
        
        board.appendChild(cell);
    }
    placeTokens();
}

// গুটিগুলো সঠিক ঘরে বসানো
function placeTokens() {
    const startPositions = {
        'red': [17, 20, 62, 65],
        'green': [26, 29, 71, 74],
        'blue': [152, 155, 197, 200],
        'yellow': [161, 164, 206, 209]
    };

    Object.keys(startPositions).forEach(color => {
        startPositions[color].forEach(pos => {
            const token = document.createElement('div');
            token.classList.add('token', 'token-' + color);
            document.getElementById('cell-' + pos).appendChild(token);
        });
    });
}

function rollDice() {
    let val = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-result').innerText = val;
    // এখানে গুটি মুভ করার লজিক আসবে পরের ধাপে
}

initGame();
