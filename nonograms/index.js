import { createMainBlock } from "./assets/src/createMainBlock.js";
import { createHeader } from "./assets/src/createHeader.js";
import { addText } from "./assets/src/addText.js";
import { createContainer } from "./assets/src/createContainer.js";
import { createSquare } from "./assets/src/createSquare.js";
import { crosswordDb } from "./assets/src/crosswordDb.js";
import { hintsTop } from "./assets/src/hintsTop.js";
import { hintsLeft } from "./assets/src/hintsLeft.js";
import { hintsSpace } from "./assets/src/hintsSpace.js";
import { drawImage } from "./assets/src/drawImage.js";
import { checkVictory } from "./assets/src/checkVictory.js";
import { gameProcess } from "./assets/src/gameProcess.js";
import { createButton } from "./assets/src/createButton.js";
import { clearDom } from "./assets/src/clearDom.js";
import { modalWrapper } from "./assets/src/modalWrapper.js";
import { createLink } from "./assets/src/createLink.js";
import { hints } from "./assets/src/hintsDb.js";

export const size = 5;
export const col = 5;
// создаём страницу кроссворд 5х5

const drawHtmlCrosswordMini = (className, crosswordKey) => {
  const header = createHeader();
  addText(header, "Нонограммы");
  const mainBlock = createMainBlock("mainBlock");
  const crossword = createContainer("crossword", mainBlock);
  const crosswordSquare = createContainer("crossword_square", crossword);
  const menu = createContainer("menu", mainBlock);
  const clearBtn = createButton("menu__clearBtn", menu);
  const backBtn = createButton("menu__backBtn", menu);
  const answerBtn = createButton("menu__answerBtn", menu);
  backBtn.classList.add("startWindow_button");
  clearBtn.classList.add("startWindow_button");
  answerBtn.classList.add("startWindow_button");
  addText(clearBtn, "очистить");
  addText(backBtn, "на главную");
  addText(answerBtn, "решение");

  createSquare();
  crosswordSquare.classList.add(className);

  hintsTop(5, 2);
  hintsLeft(5, 2);
  hintsSpace(5, 5);
  if (crosswordSquare.classList.contains("crossword1")) {
    hints.hintsToCrossword1();
  }
  if (crosswordSquare.classList.contains("crossword2")) {
    hints.hintsToCrossword2();
  }
  if (crosswordSquare.classList.contains("crossword3")) {
    hints.hintsToCrossword3();
  }
  if (crosswordSquare.classList.contains("crossword4")) {
    hints.hintsToCrossword4();
  }
  if (crosswordSquare.classList.contains("crossword5")) {
    hints.hintsToCrossword5();
  }
  gameProcess(crosswordKey, 5, 5);
  drawImage();
  returnStartWindow();
};

const startWindow = () => {
  const header = createHeader();
  addText(header, "Нонограммы");
  const modalMini = modalWrapper("modal__wrapper_mini");
  const modalMedium = modalWrapper("modal__wrapper_medium");
  const modalMax = modalWrapper("modal__wrapper_max");
  const modalWindowMini = createContainer("modalWindow__mini", modalMini);
  const modalWindowMedium = createContainer("modalWindow__medium", modalMedium);
  const modalWindowMax = createContainer("modalWindow__max", modalMax);
  // дивы в мини блоке
  const blockImg = createContainer("modal__img", modalWindowMini);
  const blockBtn = createContainer("modal__btn", modalWindowMini);
  const prevButton = createButton("prev__button", blockBtn);

  addText(prevButton, "назад");
  createLink("camel", blockImg, "Верблюд");
  createLink("stroller", blockImg, "Коляска");
  createLink("heart", blockImg, "Сердце");
  createLink("dog", blockImg, "Собака");
  createLink("rooster", blockImg, "Петух");
  //дивы в медиуме
  const blockImgMedium = createContainer("modal__img", modalWindowMedium);
  const blockBtnMedium = createContainer("modal__btn", modalWindowMedium);
  const prevButtonMedium = createButton("prev__button", blockBtnMedium);
  addText(prevButtonMedium, "назад");
  createLink("cup", blockImgMedium, "Кубок");
  createLink("turnip", blockImgMedium, "Репка");
  createLink("cat", blockImgMedium, "Кошка");
  createLink("bomb", blockImgMedium, "Бомба");
  createLink("deer", blockImgMedium, "Лось");
  //дивы в максе
  const blockImgMax = createContainer("modal__img", modalWindowMax);
  const blockBtnMax = createContainer("modal__btn", modalWindowMax);
  const prevButtonMax = createButton("prev__button", blockBtnMax);
  addText(prevButtonMax, "назад");
  createLink("bear", blockImgMax, "Панда");
  createLink("operator", blockImgMax, "Оператор");
  createLink("photo", blockImgMax, "Фотокамера");

  const mainBlock = createMainBlock("startWindow");
  const text = createContainer("startWindow_text", mainBlock);
  addText(text, "Выберите размер кроссворда");
  const buttonContainer = createContainer("startWindow_buttons", mainBlock);
  for (let i = 0; i < 3; i++) {
    const button = createButton(`startWindow_button${i}`, buttonContainer);
    button.classList.add("startWindow_button");
    if (i === 0) {
      addText(button, "5x5");
    }
    if (i === 1) {
      addText(button, "10x10");
    }
    if (i === 2) {
      addText(button, "15x15");
    }
  }

  //слушатели
  const windowListener = document.querySelector(".startWindow");
  windowListener.addEventListener("click", (event) => {
    if (event.target.classList.contains("startWindow_button0")) {
      showModalMini();
    }
    if (event.target.classList.contains("startWindow_button1")) {
      showModalMedium();
    }
    if (event.target.classList.contains("startWindow_button2")) {
      showModalMax();
    }
  });
};

startWindow();

const showModalMini = () => {
  const modalMini = document.querySelector(".modal__wrapper_mini ");
  modalMini.classList.remove("visibility");
  modalMini.addEventListener("click", (event) => {
    if (event.target.classList.contains("prev__button")) {
      modalMini.classList.add("visibility");
    }
    if (event.target.classList.contains("camel")) {
      clearDom();
      drawHtmlCrosswordMini("crossword1", "crossword1");
    }
    if (event.target.classList.contains("stroller")) {
      clearDom();
      drawHtmlCrosswordMini("crossword2", "crossword2");
    }
    if (event.target.classList.contains("heart")) {
      clearDom();
      drawHtmlCrosswordMini("crossword3", "crossword3");
    }
    if (event.target.classList.contains("dog")) {
      clearDom();
      drawHtmlCrosswordMini("crossword4", "crossword4");
    }
    if (event.target.classList.contains("rooster")) {
      clearDom();
      drawHtmlCrosswordMini("crossword5", "crossword5");
    }
  });
};

const returnStartWindow = () => {
  const btn = document.querySelector(".menu__backBtn");
  btn.addEventListener("click", () => {
    if (btn) {
      clearDom();
      startWindow();
    }
  });
};

const showModalMedium = () => {
  const modalMedium = document.querySelector(".modal__wrapper_medium");
  modalMedium.classList.remove("visibility");
  modalMedium.addEventListener("click", (event) => {
    if (event.target.classList.contains("prev__button")) {
      modalMedium.classList.add("visibility");
    }
    if (event.target.classList.contains("cup")) {
      clearDom();
      drawHtmlCrosswordMedium("crossword6", "crossword6");
    }
    if (event.target.classList.contains("turnip")) {
      clearDom();
      drawHtmlCrosswordMedium("crossword7", "crossword7");
    }
    if (event.target.classList.contains("cat")) {
      clearDom();
      drawHtmlCrosswordMedium("crossword8", "crossword8");
    }
    if (event.target.classList.contains("bomb")) {
      clearDom();
      drawHtmlCrosswordMedium("crossword9", "crossword9");
    }
    if (event.target.classList.contains("deer")) {
      clearDom();
      drawHtmlCrosswordMedium("crossword10", "crossword10");
    }
  });
};
const drawHtmlCrosswordMedium = (className, crosswordKey) => {
  const header = createHeader();
  addText(header, "Нонограммы");
  const mainBlock = createMainBlock("mainBlock");
  const crossword = createContainer("crossword", mainBlock);
  const crosswordSquare = createContainer("crossword_square", crossword);
  const menu = createContainer("menu", mainBlock);
  const clearBtn = createButton("menu__clearBtn", menu);
  const backBtn = createButton("menu__backBtn", menu);
  const answerBtn = createButton("menu__answerBtn", menu);
  backBtn.classList.add("startWindow_button");
  clearBtn.classList.add("startWindow_button");
  answerBtn.classList.add("startWindow_button");
  addText(clearBtn, "очистить");
  addText(backBtn, "на главную");
  addText(answerBtn, "решение");

  createSquare();
  hintsTop(10, 4);
  hintsLeft(10, 4);
  hintsSpace(10, 10);
  crosswordSquare.classList.add(className);
  if (crosswordSquare.classList.contains("crossword6")) {
    hints.hintsToCrossword6();
  }
  if (crosswordSquare.classList.contains("crossword7")) {
    hints.hintsToCrossword7();
  }
  if (crosswordSquare.classList.contains("crossword8")) {
    hints.hintsToCrossword8();
  }
  if (crosswordSquare.classList.contains("crossword9")) {
    hints.hintsToCrossword9();
  }
  if (crosswordSquare.classList.contains("crossword10")) {
    hints.hintsToCrossword10();
  }
  if (crosswordSquare.classList.contains("crossword11")) {
    hints.hintsToCrossword11();
  }
  gameProcess(crosswordKey, 10, 10);
  drawImage();
  returnStartWindow();
};

const showModalMax = () => {
  const modalMax = document.querySelector(".modal__wrapper_max");
  modalMax.classList.remove("visibility");
  modalMax.addEventListener("click", (event) => {
    if (event.target.classList.contains("prev__button")) {
      modalMax.classList.add("visibility");
    }
    if (event.target.classList.contains("bear")) {
      clearDom();
      drawHtmlCrosswordMax("crossword11", "crossword11");
    }
    if (event.target.classList.contains("operator")) {
      clearDom();
      drawHtmlCrosswordMax("crossword12", "crossword12");
    }
    if (event.target.classList.contains("photo")) {
      clearDom();
      drawHtmlCrosswordMax("crossword13", "crossword13");
    }
  });
};

const drawHtmlCrosswordMax = (className, crosswordKey) => {
  const header = createHeader();
  addText(header, "Нонограммы");
  const mainBlock = createMainBlock("mainBlock");
  const crossword = createContainer("crossword", mainBlock);
  const crosswordSquare = createContainer("crossword_square", crossword);
  const menu = createContainer("menu", mainBlock);
  const clearBtn = createButton("menu__clearBtn", menu);
  const backBtn = createButton("menu__backBtn", menu);
  const answerBtn = createButton("menu__answerBtn", menu);
  backBtn.classList.add("startWindow_button");
  clearBtn.classList.add("startWindow_button");
  answerBtn.classList.add("startWindow_button");
  addText(clearBtn, "очистить");
  addText(backBtn, "на главную");
  addText(answerBtn, "решение");
  crosswordSquare.classList.add(className);
  createSquare();
  hintsTop(15, 6);
  hintsLeft(15, 6);
  hintsSpace(15, 15);
  if (crosswordSquare.classList.contains("crossword11")) {
    hints.hintsToCrossword11();
  }
  if (crosswordSquare.classList.contains("crossword12")) {
    hints.hintsToCrossword12();
  }
  if (crosswordSquare.classList.contains("crossword13")) {
    hints.hintsToCrossword13();
  }

  gameProcess(crosswordKey, 15, 15);
  drawImage();
  returnStartWindow();
};
