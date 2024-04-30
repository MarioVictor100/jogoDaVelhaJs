const board = ['', '', '', '', '', '', '', '', '',];

let currentPlayer = "X";


const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6], // diagonais
];

function checkWinner() {
    for (let i = 0; i < winningCombination.length; i++) {
        const [a, b, c] = winningCombination[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            return board[a];
        }
    }

    return null;
}

function handleClick(idx) {
    if (board[idx] !== "") return;

    board[idx] = currentPlayer;

    document.getElementById(`cell-${idx}`).innerHTML = currentPlayer;

    const winner = checkWinner();

    // if (winner === "X") {
    //     alert("Ganhador X");
    // } else if (winner === "O") {
    //     alert("Ganhador O")
    // }

    // console.info("ganhador: ", winner);

    if (winner) {
        document.getElementById("status").innerText = `Jogador ${winner} venceu!!!`;
        gameActive = false;
    } else if (!board.includes("")) {
        document.getElementById("status").innerText = `Empate!!!`;
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        document.getElementById("status").innerText = `Jogador ${currentPlayer} é a sua vez!`;
        gameActive = false;
    }


}

function reiniciar() {
    location.reload();
}
