const pieces = {
  paw: {
    name: "white-pawn",
    pattern: (positionY, positionX) => [[positionY + 1, positionX]],
    color: "white",
    colorId: 1,
  },
  knw: {
    name: "white-knight",
    pattern: (positionY, positionX) => [
      [positionY + 1, positionX + 2],
      [positionY + 1, positionX - 2],
      [positionY - 1, positionX + 2],
      [positionY - 1, positionX - 2],
      [positionY + 2, positionX + 1],
      [positionY - 2, positionX + 1],
      [positionY + 2, positionX - 1],
      [positionY - 2, positionX - 1],
    ],
    color: "white",
    colorId: 1,
  },
  biw: {
    name: "white-bishop",
    pattern: (positionY, positionX) => [
      [
        [0, positionX - positionY + 0],
        [1, positionX - positionY + 1],
        [2, positionX - positionY + 2],
        [3, positionX - positionY + 3],
        [4, positionX - positionY + 4],
        [5, positionX - positionY + 5],
        [6, positionX - positionY + 6],
        [7, positionX - positionY + 7],
      ],
      [
        [positionX + positionY - 7, 7],
        [positionX + positionY - 6, 6],
        [positionX + positionY - 5, 5],
        [positionX + positionY - 4, 4],
        [positionX + positionY - 3, 3],
        [positionX + positionY - 2, 2],
        [positionX + positionY - 1, 1],
        [positionX + positionY - 0, 0],
      ],
    ],
    color: "white",
    colorId: 1,
  },
  row: {
    name: "white-rooks",
    pattern: (positionY, positionX) => [
      [
        [positionY, 0],
        [positionY, 1],
        [positionY, 2],
        [positionY, 3],
        [positionY, 4],
        [positionY, 5],
        [positionY, 6],
        [positionY, 7],
      ],
      [
        [0, positionX],
        [1, positionX],
        [2, positionX],
        [3, positionX],
        [4, positionX],
        [5, positionX],
        [6, positionX],
        [7, positionX],
      ],
    ],
    color: "white",
    colorId: 1,
  },
  quw: {
    name: "white-queen",
    pattern: (positionY, positionX) => [
      [
        [0, positionX - positionY + 0],
        [1, positionX - positionY + 1],
        [2, positionX - positionY + 2],
        [3, positionX - positionY + 3],
        [4, positionX - positionY + 4],
        [5, positionX - positionY + 5],
        [6, positionX - positionY + 6],
        [7, positionX - positionY + 7],
      ],
      [
        [positionX + positionY - 7, 7],
        [positionX + positionY - 6, 6],
        [positionX + positionY - 5, 5],
        [positionX + positionY - 4, 4],
        [positionX + positionY - 3, 3],
        [positionX + positionY - 2, 2],
        [positionX + positionY - 1, 1],
        [positionX + positionY - 0, 0],
      ],
      [
        [positionY, 0],
        [positionY, 1],
        [positionY, 2],
        [positionY, 3],
        [positionY, 4],
        [positionY, 5],
        [positionY, 6],
        [positionY, 7],
      ],
      [
        [0, positionX],
        [1, positionX],
        [2, positionX],
        [3, positionX],
        [4, positionX],
        [5, positionX],
        [6, positionX],
        [7, positionX],
      ],
    ],
    color: "white",
    colorId: 1,
  },
  kiw: {
    name: "white-king",
    pattern: (positionY, positionX) => [
      [positionY + 1, positionX],
      [positionY - 1, positionX],
      [positionY, positionX + 1],
      [positionY, positionX - 1],
      [positionY + 1, positionX + 1],
      [positionY - 1, positionX - 1],
      [positionY, -1, positionX + 1],
      [positionY, +1, positionX - 1],
    ],
    color: "white",
    colorId: 1,
  },

  pab: { name: "black-pawn", pattern: (positionY, positionX) => [[positionY - 1, positionX]], color: "black", colorId: -1 },
  knb: {
    name: "black-knight",
    pattern: (positionY, positionX) => [
      [positionY + 1, positionX + 2],
      [positionY + 1, positionX - 2],
      [positionY - 1, positionX + 2],
      [positionY - 1, positionX - 2],
      [positionY + 2, positionX + 1],
      [positionY - 2, positionX + 1],
      [positionY + 2, positionX - 1],
      [positionY - 2, positionX - 1],
    ],
    color: "black",
    colorId: -1,
  },
  bib: {
    name: "black-bishop",
    pattern: (positionY, positionX) => [
      [
        [0, positionX - positionY + 0],
        [1, positionX - positionY + 1],
        [2, positionX - positionY + 2],
        [3, positionX - positionY + 3],
        [4, positionX - positionY + 4],
        [5, positionX - positionY + 5],
        [6, positionX - positionY + 6],
        [7, positionX - positionY + 7],
      ],
      [
        [positionX + positionY - 7, 7],
        [positionX + positionY - 6, 6],
        [positionX + positionY - 5, 5],
        [positionX + positionY - 4, 4],
        [positionX + positionY - 3, 3],
        [positionX + positionY - 2, 2],
        [positionX + positionY - 1, 1],
        [positionX + positionY - 0, 0],
      ],
    ],
    color: "black",
    colorId: -1,
  },
  rob: {
    name: "black-rooks",
    pattern: (positionY, positionX) => [
      [
        [positionY, 0],
        [positionY, 1],
        [positionY, 2],
        [positionY, 3],
        [positionY, 4],
        [positionY, 5],
        [positionY, 6],
        [positionY, 7],
      ],
      [
        [0, positionX],
        [1, positionX],
        [2, positionX],
        [3, positionX],
        [4, positionX],
        [5, positionX],
        [6, positionX],
        [7, positionX],
      ],
    ],
    color: "black",
    colorId: -1,
  },
  qub: {
    name: "black-queen",
    pattern: (positionY, positionX) => [
      [
        [0, positionX - positionY + 0],
        [1, positionX - positionY + 1],
        [2, positionX - positionY + 2],
        [3, positionX - positionY + 3],
        [4, positionX - positionY + 4],
        [5, positionX - positionY + 5],
        [6, positionX - positionY + 6],
        [7, positionX - positionY + 7],
      ],
      [
        [positionX + positionY - 7, 7],
        [positionX + positionY - 6, 6],
        [positionX + positionY - 5, 5],
        [positionX + positionY - 4, 4],
        [positionX + positionY - 3, 3],
        [positionX + positionY - 2, 2],
        [positionX + positionY - 1, 1],
        [positionX + positionY - 0, 0],
      ],
      [
        [positionY, 0],
        [positionY, 1],
        [positionY, 2],
        [positionY, 3],
        [positionY, 4],
        [positionY, 5],
        [positionY, 6],
        [positionY, 7],
      ],
      [
        [0, positionX],
        [1, positionX],
        [2, positionX],
        [3, positionX],
        [4, positionX],
        [5, positionX],
        [6, positionX],
        [7, positionX],
      ],
    ],
    color: "black",
    colorId: -1,
  },
  kib: {
    name: "black-king",
    pattern: (positionY, positionX) => [
      [positionY + 1, positionX],
      [positionY - 1, positionX],
      [positionY, positionX + 1],
      [positionY, positionX - 1],
      [positionY + 1, positionX + 1],
      [positionY - 1, positionX - 1],
      [positionY - 1, positionX + 1],
      [positionY + 1, positionX - 1],
    ],
    color: "black",
    colorId: -1,
  },
};

class Game {
  constructor() {
    this.currentPlayer = 1;
    this.currentSelection;
    this.currentLocation;
    this.validMovesArray;
    this.boardState = [
      [["row"], ["knw"], ["biw"], ["quw"], ["kiw"], ["biw"], ["knw"], ["row"]],
      [["paw"], ["paw"], ["paw"], ["paw"], ["paw"], ["paw"], ["paw"], ["paw"]],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [["pab"], ["pab"], ["pab"], ["pab"], ["pab"], ["pab"], ["pab"], ["pab"]],
      [["rob"], ["knb"], ["bib"], ["qub"], ["kib"], ["bib"], ["knb"], ["rob"]],
    ];
  }
}

const game = new Game();
const boardHTML = document.querySelectorAll(".field");

// render board state
const renderer = () => {
  for (rows in game.boardState) {
    for (columns in game.boardState[rows]) {
      const index = rows * 8 + columns * 1;
      boardHTML[index].textContent = game.boardState[rows][columns];
    }
  }
};

// where the action happens
for (field of boardHTML) {
  field.addEventListener("click", (event) => {
    let piece = event.currentTarget.textContent;
    const positionX = parseInt(event.currentTarget.dataset.row);
    const positionY = parseInt(event.currentTarget.dataset.column);

    if (piece && pieces[piece].colorId === game.currentPlayer) {
      game.currentSelection = event.currentTarget.textContent;
      game.currentLocation = [positionY, positionX];
      game.validMovesArray = validMoves(positionY, positionX);
    } else {
      if (game.currentSelection && game.validMovesArray.some((x) => JSON.stringify(x) === JSON.stringify([positionY, positionX]))) {
        game.boardState[positionY][positionX] = [game.currentSelection];
        game.boardState[game.currentLocation[0]][game.currentLocation[1]] = [];
        renderer();
        game.currentSelection = null;
        game.currentPlayer = game.currentPlayer * -1;
        document.querySelector("#gameStats").innerHTML = game.currentPlayer === 1 ? "WHITE" : "BLACK";
      } else {
        console.log("invalid move");
      }
    }
  });
}

renderer();

// construction an array of valid moves
const validMoves = (positionY, positionX) => {
  let result = pieces[game.currentSelection].pattern(positionY, positionX);

  if (result[0][0].length > 1) {
    result = validMovesHelper(result);
  }

  return result;
};

const validMovesHelper = (result) => {
  result = result.map((y) => y.filter((x) => x[0] < 8 && x[0] >= 0 && x[1] < 8 && x[1] >= 0));
  let temp = [[], [], [], []];
  let check = [[], [], [], []];
  result.map((y, i) => {
    y.map((x, j) => {
      if (!check[i].includes(3)) {
        if (game.boardState[x[0]][x[1]][0] === game.currentSelection) {
          check[i].push(2);
        } else if (game.boardState[x[0]][x[1]][0]) {
          if (!check[i].includes(2)) {
            check[i] = [];
            temp[i] = [];
            temp[i].push(result[i][j]);
            check[i].push(1);
          } else {
            temp[i].push(result[i][j]);
            check[i].push(3);
          }
        } else {
          temp[i].push(result[i][j]);
          check[i].push(0);
        }
      }
    });
  });
  return [...temp[0], ...temp[1], ...temp[2], ...temp[3]];
};
