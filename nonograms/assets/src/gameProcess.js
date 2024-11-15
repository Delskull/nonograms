import { createSquare } from "./createSquare.js";
import { checkVictory } from "./checkVictory.js";
import { crosswordDb } from "./crosswordDb.js";
import { size, col } from "../../index.js";

export const gameProcess = (crosswordKey, size, col) => {
  let activeCrossword = Array.from({ length: size }, () => Array(size).fill(0));
  const squares = createSquare(size, col);

  const clearCrossword = () => {
    const clearBtn = document.querySelector(".menu__clearBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", (event) => {
        activeCrossword = Array.from({ length: size }, () =>
          Array(size).fill(0),
        );
        squares.forEach((square) => {
          square.classList.remove("black");
          square.style.backgroundImage = "";
        });
      });
    }
  };

  const showAnswer = () => {
    const btn = document.querySelector(".menu__answerBtn");
    btn.addEventListener("click", () => {
      if (btn) {
        const crossword = crosswordDb[crosswordKey];

        for (let row = 0; row < crossword.length; row++) {
          for (let col = 0; col < crossword[row].length; col++) {
            if (crossword[row][col] === 1) {
              activeCrossword[row][col] = 1;
              const square = squares[row + col * size];
              square.classList.add("black");
            }
          }
        }
      }
    });
  };

  squares.forEach((square) => {
    square.addEventListener("click", function () {
      const row = parseInt(square.dataset.row);
      const column = parseInt(square.dataset.col);
      if (activeCrossword[row][column] === 0) {
        activeCrossword[row][column] = 1;
        square.classList.add("black");
      } else {
        activeCrossword[row][column] = 0;
        square.classList.remove("black");
      }
      setTimeout(() => {
        checkVictory(activeCrossword, crosswordKey);
      }, 100);
    });

    square.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      if (!square.style.backgroundImage) {
        square.style.backgroundImage = "url('assets/img/cutout2b.gif')";
        square.style.backgroundSize = "cover";
      } else {
        square.style.backgroundImage = "";
        square.style.backgroundSize = "";
      }
    });
  });
  showAnswer();
  clearCrossword();
};
