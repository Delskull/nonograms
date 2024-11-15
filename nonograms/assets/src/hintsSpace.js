export const hintsSpace = (col, row) => {
  const gameContainer = document.querySelector(".crossword");

  const hintsContainer = document.createElement("div");
  hintsContainer.classList.add("hints_container-space");

  for (let i = 0; i < col; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("crossword_hints-space");

    for (let j = 0; j < row; j++) {
      const div = document.createElement("div");
      div.classList.add("hints_space");
      div.id = `hints-${i}-${j + 1}`;
      rowDiv.append(div);
    }

    hintsContainer.append(rowDiv);
  }

  gameContainer.append(hintsContainer);
};
