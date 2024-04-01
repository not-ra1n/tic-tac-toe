function gameBoard () {
   
    const game = [
        rowOne = [0, 0, 0],
        rowTwo = [0, 0, 0],
        rowThree = [0, 0, 0]
    ]


    return game;
}

function createPlayer (playerName, marker) {
    return {playerName, marker};
}


const playerOne = createPlayer("Josh", "X");
const playerTwo = createPlayer("Scarlet", "O");

console.log({
    PlayerName: playerOne.playerName,
    Marker: playerOne.marker
});

console.log({
    PlayerName: playerTwo.playerName,
    Marker: playerTwo.marker
});

console.log(gameBoard())

function gameController () {

    let win = 0;

    const game = gameBoard();

    console.log(game)

    console.log(playerOne.playerName, "goes first.")
    
    console.log(playerOne.marker)

    console.log(rowThree[0])


    rowThree.splice(0, 1, playerOne.marker)

    rowThree.splice(1, 1, playerOne.marker)

    rowThree.splice(2, 1, playerTwo.marker)

    rowOne.splice(0, 1, playerOne.marker)

    rowOne.splice(1, 1, playerOne.marker)

    rowOne.splice(2, 1, playerTwo.marker) 

    rowTwo.splice(0, 1, playerTwo.marker)

    rowTwo.splice(1, 1, playerTwo.marker)

    rowTwo.splice(2, 1, playerOne.marker) 


    console.log(rowThree[0])

    console.log(rowTwo)

    console.log(game)

    if (rowThree[0] == "X" && rowThree[1] == "X" && rowThree[2] == "X") {
        console.log(playerOne.playerName, "Wins!");
        console.log(win)
        win++;
        console.log(win)
    }
    if (rowTwo[0] == "X" && rowTwo[1] == "X" && rowTwo[2] == "X") {
        console.log(playerOne.playerName, "Wins!");
        win++;
    }
    if (rowOne[0] == "X" && rowOne[1] == "X" && rowOne[2] == "X") {
        console.log(playerOne.playerName, "Wins!");
        win++;
    }
    if (rowOne[0] == "X" && rowTwo[0] == "X" && rowThree[0] == "X") {
        console.log(playerOne.playerName, "Wins!");
        win++;
    }
    if (rowOne[1] == "X" && rowTwo[1] == "X" && rowThree[1] == "X") {
        console.log(playerOne.playerName, "Wins!");
        win++;
    }
    if (rowOne[2] == "X" && rowTwo[2] == "X" && rowThree[2] == "X") {
        console.log(playerOne.playerName, "Wins!");
        win++;
    }
    if (rowOne[0] == "X" && rowTwo[1] == "X" && rowThree[2] == "X") {
        console.log(playerOne.playerName, "Wins!");
        win++;
    }
    if (rowOne[2] == "X" && rowTwo[1] == "X" && rowThree[0] == "X") {
        console.log(playerOne.playerName, "Wins!");
        win++;
    }



    if (rowThree[0] == "O" && rowThree[1] == "O" && rowThree[2] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
    }
    if (rowTwo[0] == "O" && rowTwo[1] == "O" && rowTwo[2] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
    }
    if (rowOne[0] == "O" && rowOne[1] == "O" && rowOne[2] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
    }
    if (rowOne[0] == "O" && rowTwo[0] == "O" && rowThree[0] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
    }
    if (rowOne[1] == "O" && rowTwo[1] == "O" && rowThree[1] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
    }
    if (rowOne[2] == "O" && rowTwo[2] == "O" && rowThree[2] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
        console.log(win)
    }
    if (rowOne[0] == "O" && rowTwo[1] == "O" && rowThree[2] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
    }
    if (rowOne[2] == "O" && rowTwo[1] == "O" && rowThree[0] == "O") {
        console.log(playerTwo.playerName, "Wins!")
        win++
    }

    if (rowOne[0] != 0 && rowOne[1] != 0
        && rowOne[2] != 0 && rowTwo[0] != 0
        && rowTwo[1] != 0 && rowTwo[2] != 0
        && rowThree[0] != 0 && rowThree[1] != 0
        && rowThree[2] != 0 && win < 1) {
            console.log("It's a tie! Play again!")
        }

}


function displayController () {
    
}


gameController();

