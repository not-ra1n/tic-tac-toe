function gameBoard () {
   
    const game = [
        rowOne = ["", "", ""],
        rowTwo = ["", "", ""],
        rowThree = ["", "", ""]
    ]


    return game;
}

// function createPlayer (playerName, marker) {
//     return {playerName, marker};
// }


// const playerOne = createPlayer("Josh", "X");
// const playerTwo = createPlayer("Scarlet", "O");

// console.log({
//     PlayerName: playerOne.playerName,
//     Marker: playerOne.marker
// });

// console.log({
//     PlayerName: playerTwo.playerName,
//     Marker: playerTwo.marker
// });

console.log(gameBoard())

function gameController (
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {


    const players = [
        {
            name: playerOneName,
            marker: "X"
        },
        {
            name: playerTwoName,
            marker: "O"
        }
    ];


    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] 
        : players[0];
      };

    const getActivePlayer = () => activePlayer;

    let win = 0;

    let tie = 0;

    const getWins = () => win;
    const getTies = () => tie;

// while (win === 0 || tie === 0) {
// }

console.log(`${getActivePlayer().name}'s turn.`);




    const board = gameBoard();

    console.log(board)

    // console.log(playerOne.playerName, "goes first.")
    
    // console.log(playerOne.marker)

    console.log(rowThree[0])


    // rowThree.splice(0, 1, playerOne.marker)

    // rowThree.splice(1, 1, playerOne.marker)

    // rowThree.splice(2, 1, playerTwo.marker)

    // rowOne.splice(0, 1, playerOne.marker)

    // rowOne.splice(1, 1, playerOne.marker)

    // rowOne.splice(2, 1, playerTwo.marker) 

    // rowTwo.splice(0, 1, playerTwo.marker)

    // rowTwo.splice(1, 1, playerTwo.marker)

    // rowTwo.splice(2, 1, playerOne.marker) 


    console.log(rowThree[0])

    console.log(rowTwo)

    console.log(board)

function winTieLogic () {
    if (rowThree[0] === "X" && rowThree[1] === "X" && rowThree[2] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        console.log(win)
        win++;
        console.log(win)
    }
    if (rowTwo[0] === "X" && rowTwo[1] === "X" && rowTwo[2] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        win++;
        console.log(win)
    }
    if (rowOne[0] === "X" && rowOne[1] === "X" && rowOne[2] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        win++;
        console.log(win)
    }
    if (rowOne[0] === "X" && rowTwo[0] === "X" && rowThree[0] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        win++;
        console.log(win)
    }
    if (rowOne[1] === "X" && rowTwo[1] === "X" && rowThree[1] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        win++;
        console.log(win)
    }
    if (rowOne[2] === "X" && rowTwo[2] === "X" && rowThree[2] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        win++;
        console.log(win)
    }
    if (rowOne[0] === "X" && rowTwo[1] === "X" && rowThree[2] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        win++;
        console.log(win)
    }
    if (rowOne[2] === "X" && rowTwo[1] === "X" && rowThree[0] === "X") {
        console.log(`${getActivePlayer().name} wins!`);
        win++;
        console.log(win)
    }



    if (rowThree[0] === "O" && rowThree[1] === "O" && rowThree[2] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        win++;
        console.log(win)
    }
    if (rowTwo[0] === "O" && rowTwo[1] === "O" && rowTwo[2] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        console.log(rowTwo)
        console.log(rowOne)
        console.log(rowThree)
        console.log(rowTwo[0])
        console.log(rowTwo[1])
        console.log(rowTwo[2])
        win++;
        console.log(win)
    }
    if (rowOne[0] === "O" && rowOne[1] === "O" && rowOne[2] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        win++;
        console.log(win)
    }
    if (rowOne[0] === "O" && rowTwo[0] === "O" && rowThree[0] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        win++;
        console.log(win)
    }
    if (rowOne[1] === "O" && rowTwo[1] === "O" && rowThree[1] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        win++;
        console.log(win)
    }
    if (rowOne[2] === "O" && rowTwo[2] === "O" && rowThree[2] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        win++;
        console.log(win)
        console.log(win)
    }
    if (rowOne[0] === "O" && rowTwo[1] === "O" && rowThree[2] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        win++;
        console.log(win)
    }
    if (rowOne[2] === "O" && rowTwo[1] === "O" && rowThree[0] === "O") {
        console.log(`${getActivePlayer().name} wins!`)
        win++;
        console.log(win)
    }

    if (rowOne[0] !== "" && rowOne[1] !== ""
        && rowOne[2] !== "" && rowTwo[0] !== ""
        && rowTwo[1] !== "" && rowTwo[2] !== ""
        && rowThree[0] !== "" && rowThree[1] !== ""
        && rowThree[2] !== "" && win < 1) {
            tie++;
        }
}

    
    return {getActivePlayer, switchPlayerTurn, winTieLogic, getWins, getTies};

}


function displayController () {
    
    let box1 = document.querySelector("#box-1")
    let box2 = document.querySelector("#box-2")
    let box3 = document.querySelector("#box-3")
    let box4 = document.querySelector("#box-4")
    let box5 = document.querySelector("#box-5")
    let box6 = document.querySelector("#box-6")
    let box7 = document.querySelector("#box-7")
    let box8 = document.querySelector("#box-8")
    let box9 = document.querySelector("#box-9")

    let startButton = document.querySelector("#start-button")
    let playerDisplay = document.querySelector("#playerDisplay")

    const board = gameBoard();

    const {getActivePlayer, switchPlayerTurn, winTieLogic, getWins, getTies} = gameController();

    console.log(getWins())

    console.log(getTies())

    console.log(getActivePlayer())

    console.log(winTieLogic)

    console.log(switchPlayerTurn)

    console.log(board);

    console.log(rowOne[0]);

    box1.textContent = rowOne[0] 
    console.log(box1.textContent)
    box2.textContent = rowOne[1] 
    box3.textContent = rowOne[2] 
    box4.textContent = rowTwo[0] 
    box5.textContent = rowTwo[1] 
    box6.textContent = rowTwo[2] 
    box7.textContent = rowThree[0] 
    box8.textContent = rowThree[1] 
    box9.textContent = rowThree[2] 

    let startButtonClicked = 0;

    startButton.addEventListener("click", function() {
        playerDisplayFunction()
        startButtonClicked = 1;
    });

    function playerDisplayFunction () {
        playerDisplay.textContent = (`${getActivePlayer().name}'s turn`)
    }

    box1.addEventListener("click", function() {
        if (box1.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box1.textContent = getActivePlayer().marker;
        rowOne[0] = box1.textContent
        winTieLogic();
        console.log(getWins())
    
        switchPlayerTurn();
        playerDisplayFunction();
        console.log(switchPlayerTurn)
    }
        
        
    });
    box2.addEventListener("click", function() {
        if (box2.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box2.textContent = getActivePlayer().marker;
        rowOne[1] = box2.textContent
        winTieLogic();
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });
    box3.addEventListener("click", function() {
        if (box3.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box3.textContent = getActivePlayer().marker;
        rowOne[2] = box3.textContent
        winTieLogic();
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });
    box4.addEventListener("click", function() {
        if (box4.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box4.textContent = getActivePlayer().marker;
        rowTwo[0] = box4.textContent
        winTieLogic();
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });
    box5.addEventListener("click", function() {
        if (box5.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box5.textContent = getActivePlayer().marker;
        rowTwo[1] = box5.textContent
        winTieLogic();
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });
    box6.addEventListener("click", function() {
        if (box6.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box6.textContent = getActivePlayer().marker;
        rowTwo[2] = box6.textContent
        winTieLogic();
        console.log(rowTwo[0])
        console.log(rowTwo[1])
        console.log(rowTwo[2])
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });
    box7.addEventListener("click", function() {
        if (box7.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box7.textContent = getActivePlayer().marker;
        rowThree[0] = box7.textContent
        winTieLogic();
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });
    box8.addEventListener("click", function() {
        if (box8.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box8.textContent = getActivePlayer().marker;
        rowThree[1] = box8.textContent
        winTieLogic();
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });
    box9.addEventListener("click", function() {
        if (box9.textContent === "" && getWins() === 0 && getTies() === 0
        && startButtonClicked !== 0) {
        box9.textContent = getActivePlayer().marker;
        rowThree[2] = box9.textContent
        winTieLogic();
        console.log(getWins())
        switchPlayerTurn();
        playerDisplayFunction();

    }
        
        
    });

}

displayController();

gameController();


