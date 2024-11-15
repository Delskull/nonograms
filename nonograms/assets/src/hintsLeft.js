export const hintsLeft = (row, col) => {
  const gameContainer = document.querySelector(".crossword");

  const hintsContainer = document.createElement("div");
  hintsContainer.classList.add("hints_container-left");

  for (let i = 0; i < row; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("crossword_hints-left");
    if (i === 4) {
      rowDiv.classList.add("crossword_row__black_left");
    }
    if (i === 9) {
      rowDiv.classList.add("crossword_row__black_left");
    }

    for (let j = 0; j < col; j++) {
      const div = document.createElement("div");
      div.classList.add("hints_square");
      div.id = `hint-left-${i}-${j + 1}`;
      rowDiv.append(div);
    }

    hintsContainer.append(rowDiv);
  }

  gameContainer.append(hintsContainer);
};
