import { crosswordDb } from "./crosswordDb.js";

export const checkVictory = (activeCrossword, crosswordKey) => {
  if (!crosswordDb || !crosswordDb[crosswordKey]) {
    console.error("crosswordDb или crosswordDb.crossword1 не определены");
    return;
  }

  const isEqual = (arr1, arr2) => {
    if (!arr1 || !arr2) return false; // Проверка на наличие массивов
    return (
      arr1.length === arr2.length &&
      arr1.every(
        (row, index) =>
          row.length === arr2[index].length &&
          row.every((val, i) => val === arr2[index][i]),
      )
    );
  };
  if (isEqual(crosswordDb[crosswordKey], activeCrossword)) {
    alert(`Победа! Вы завершили кроссворд: ${crosswordKey}`);
  }
};
