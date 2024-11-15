export const createSquare = (row, col) => {
  const squares = [];
  const gameContainer = document.querySelector(".crossword_square");
  gameContainer.innerHTML = "";

  for (let i = 0; i < row; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("crossword_row");
    if (i === 4) {
      rowDiv.classList.add("crossword_row__black");
    }
    if (i === 9) {
      rowDiv.classList.add("crossword_row__black");
    }

    for (let j = 0; j < col; j++) {
      const div = document.createElement("div");
      div.classList.add("cell_square");
      div.id = `cell-${i}-${j + 1}`;
      div.dataset.col = i;
      div.dataset.row = j;
      div.dataset.target = `hints-${i}-${j + 1}`;
      squares.push(div);
      rowDiv.append(div);
    }

    gameContainer.append(rowDiv);
  }
  return squares;
};
