export const hints = {
  hintsToCrossword1: function () {
    const leftHints = [
      ["", "2"], // Первая строка
      ["2", "1"], // Вторая строка
      ["", "4"], // Третья строка
      ["1", "1"], // Четвертая строка
      ["1", "1"], // Пятая строка
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
    const topHints = ["", "", "", "", "", "4", "2", "3", "3", "1"];
    for (let i = 0; i < 5; i++) {
      const hintElement1 = document.getElementById(`hint-top-${i}-1`);
      const hintElement2 = document.getElementById(`hint-top-${i}-2`);
      if (hintElement1) {
        hintElement1.textContent = topHints[i];
      }
      if (hintElement2) {
        hintElement2.textContent = topHints[i + 5];
      }
    }
  },
  hintsToCrossword2: function () {
    const leftHints = [
      ["", "2"], // Первая строка
      ["2", "1"], // Вторая строка
      ["", "4"], // Третья строка
      ["", "2"], // Четвертая строка
      ["1", "1"], // Пятая строка
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
    const topHints = ["2", "", "1", "1", "", "1", "4", "2", "1", "1"];
    for (let i = 0; i < 5; i++) {
      const hintElement1 = document.getElementById(`hint-top-${i}-1`);
      const hintElement2 = document.getElementById(`hint-top-${i}-2`);
      if (hintElement1) {
        hintElement1.textContent = topHints[i];
      }
      if (hintElement2) {
        hintElement2.textContent = topHints[i + 5];
      }
    }
  },
  hintsToCrossword3: function () {
    const leftHints = [
      ["1", "1"], // Первая строка
      ["", "5"], // Вторая строка
      ["", "5"], // Третья строка
      ["", "3"], // Четвертая строка
      ["", "1"], // Пятая строка
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
    const topHints = ["", "", "", "", "", "2", "4", "4", "4", "2"];
    for (let i = 0; i < 5; i++) {
      const hintElement1 = document.getElementById(`hint-top-${i}-1`);
      const hintElement2 = document.getElementById(`hint-top-${i}-2`);
      if (hintElement1) {
        hintElement1.textContent = topHints[i];
      }
      if (hintElement2) {
        hintElement2.textContent = topHints[i + 5];
      }
    }
  },
  hintsToCrossword4: function () {
    const leftHints = [
      ["", "2"], // Первая строка
      ["1", "2"], // Вторая строка
      ["", "4"], // Третья строка
      ["1", "1"], // Четвертая строка
      ["1", "1"], // Пятая строка
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
    const topHints = ["", "", "", "", "", "2", "3", "1", "5", "2"];
    for (let i = 0; i < 5; i++) {
      const hintElement1 = document.getElementById(`hint-top-${i}-1`);
      const hintElement2 = document.getElementById(`hint-top-${i}-2`);
      if (hintElement1) {
        hintElement1.textContent = topHints[i];
      }
      if (hintElement2) {
        hintElement2.textContent = topHints[i + 5];
      }
    }
  },
  hintsToCrossword5: function () {
    const leftHints = [
      ["", "1"], // Первая строка
      ["2", "2"], // Вторая строка
      ["", "3"], // Третья строка
      ["", "3"], // Четвертая строка
      ["", "1"], // Пятая строка
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
    const topHints = ["", "", "", "", "", "1", "4", "3", "3", "1"];
    for (let i = 0; i < 5; i++) {
      const hintElement1 = document.getElementById(`hint-top-${i}-1`);
      const hintElement2 = document.getElementById(`hint-top-${i}-2`);
      if (hintElement1) {
        hintElement1.textContent = topHints[i];
      }
      if (hintElement2) {
        hintElement2.textContent = topHints[i + 5];
      }
    }
  },
  hintsToCrossword6: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "1",
      "5",
      "6",
      "1",
      "1",
      "6",
      "5",
      "1",
      "",
      "4",
      "1",
      "1",
      "2",
      "5",
      "5",
      "2",
      "1",
      "1",
      "4",
    ];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 4; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 10]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["", "", "", "10"],
      ["1", "2", "2", "1"],
      ["1", "2", "2", "1"],
      ["1", "2", "2", "1"],
      ["", "", "3", "3"],
      ["", "", "", "4"],
      ["", "", "", "2"],
      ["", "", "", "2"],
      ["", "", "", "4"],
      ["", "", "", "6"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
  hintsToCrossword7: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "2",
      "2",
      "",
      "2",
      "2",
      "",
      "",
      "3",
      "4",
      "2",
      "2",
      "1",
      "",
      "1",
      "2",
      "3",
      "2",
      "3",
      "3",
      "5",
      "2",
      "1",
      "3",
      "1",
      "2",
      "5",
      "3",
    ];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 4; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 10]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["", "", "", "3"],
      ["", "", "5", "3"],
      ["", "", "2", "6"],
      ["", "2", "1", "2"],
      ["", "", "", "5"],
      ["", "", "2", "2"],
      ["", "", "1", "1"],
      ["", "", "3", "2"],
      ["", "", "4", "3"],
      ["", "", "5", "4"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
  hintsToCrossword8: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "2",
      "",
      "2",
      "5",
      "",
      "2",
      "1",
      "2",
      "",
      "5",
      "2",
      "6",
      "5",
      "3",
      "3",
      "4",
      "4",
      "5",
      "9",
    ];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 4; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 10]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["", "", "", "3"],
      ["1", "1", "1", "2"],
      ["", "2", "2", "1"],
      ["", "2", "5", "1"],
      ["1", "", "1", "1"],
      ["", "1", "5", "3"],
      ["", "", "3", "4"],
      ["", "", "", "8"],
      ["", "", "", "8"],
      ["", "", "4", "2"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
  hintsToCrossword9: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "1",
      "2",
      "2",
      "1",
      "1",
      "2",
      "2",
      "2",
      "2",
      "",
      "1",
      "1",
      "1",
      "4",
      "6",
      "7",
      "6",
      "4",
      "2",
      "4",
    ];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 4; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 10]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["", "", "", "4"],
      ["", "1", "2", "2"],
      ["", "2", "1", "1"],
      ["1", "1", "1", "1"],
      ["", "", "1", "5"],
      ["", "1", "4", "2"],
      ["", "", "5", "1"],
      ["", "", "5", "1"],
      ["", "", "", "7"],
      ["", "", "", "5"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
  hintsToCrossword10: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "",
      "2",
      "",
      "",
      "",
      "",
      "",
      "",
      "2",
      "1",
      "1",
      "2",
      "",
      "",
      "2",
      "",
      "2",
      "2",
      "4",
      "5",
      "5",
      "2",
      "6",
      "4",
      "5",
      "8",
      "7",
    ];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 4; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 10]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["1", "1", "1", "1"],
      ["", "", "5", "3"],
      ["", "", "1", "1"],
      ["", "", "", "6"],
      ["", "", "", "7"],
      ["", "", "2", "5"],
      ["", "", "", "9"],
      ["", "", "5", "3"],
      ["", "", "4", "2"],
      ["", "", "2", "1"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
  hintsToCrossword11: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "2",
      "",
      "",
      "",
      "",
      "1",
      "1",
      "1",
      "",
      "",
      "",
      "",
      "2",
      "",
      "",
      "2",
      "4",
      "2",
      "1",
      "1",
      "1",
      "2",
      "1",
      "1",
      "1",
      "2",
      "4",
      "2",
      "",
      "5",
      "2",
      "2",
      "3",
      "2",
      "1",
      "1",
      "1",
      "1",
      "1",
      "2",
      "3",
      "2",
      "2",
      "5",
      "3",
      "1",
      "1",
      "2",
      "2",
      "2",
      "1",
      "1",
      "1",
      "2",
      "2",
      "2",
      "1",
      "1",
      "3",
    ];
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 6; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 15]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["", "", "", "", "1", "1"],
      ["", "", "", "3", "5", "3"],
      ["", "", "", "", "4", "4"],
      ["", "", "", "", "1", "1"],
      ["", "", "", "", "1", "1"],
      ["", "", "2", "3", "3", "2"],
      ["", "", "1", "2", "2", "1"],
      ["", "", "1", "1", "1", "1"],
      ["", "", "", "", "1", "1"],
      ["", "", "", "2", "3", "2"],
      ["", "", "", "2", "1", "2"],
      ["", "", "", "", "2", "2"],
      ["", "1", "2", "3", "2", "1"],
      ["", "", "1", "2", "2", "1"],
      ["", "", "", "3", "5", "3"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
  hintsToCrossword12: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "3",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "1",
      "",
      "",
      "",
      "1",
      "",
      "",
      "",
      "",
      "",
      "2",
      "1",
      "",
      "2",
      "1",
      "2",
      "2",
      "1",
      "7",
      "1",
      "3",
      "4",
      "",
      "",
      "4",
      "2",
      "4",
      "1",
      "1",
      "3",
      "1",
      "2",
      "4",
      "1",
      "1",
      "4",
      "2",
      "8",
      "4",
      "2",
      "2",
      "2",
      "6",
      "6",
      "2",
      "2",
      "4",
      "2",
      "1",
      "1",
      "4",
      "4",
      "5",
      "8",
    ];
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 6; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 15]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["", "", "", "", "", "5"],
      ["", "", "", "", "", "5"],
      ["", "", "", "", "", "7"],
      ["", "", "2", "2", "1", "3"],
      ["", "1", "1", "1", "2", "2"],
      ["", "1", "1", "1", "1", "3"],
      ["", "", "1", "2", "2", "5"],
      ["", "", "", "8", "1", "2"],
      ["", "4", "1", "2", "1", "1"],
      ["", "1", "3", "1", "4", "1"],
      ["", "", "", "3", "2", "2"],
      ["", "", "", "", "", "13"],
      ["", "", "2", "1", "2", "4"],
      ["", "", "2", "1", "2", "4"],
      ["", "", "1", "1", "1", "4"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
  hintsToCrossword13: function () {
    const topHints = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "1",
      "2",
      "",
      "",
      "",
      "", // первый ряд
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "2",
      "1",
      "1",
      "1",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "3",
      "1",
      "1",
      "1",
      "1",
      "3",
      "",
      "",
      "",
      "",
      "",
      "2",
      "1",
      "",
      "1",
      "2",
      "1",
      "1",
      "1",
      "2",
      "2",
      "1",
      "",
      "",
      "",
      "2",
      "1",
      "2",
      "2",
      "2",
      "4",
      "6",
      "6",
      "4",
      "2",
      "4",
      "2",
      "2",
      "",
      "11",
      "8",
      "6",
      "1",
      "7",
      "2",
      "2",
      "1",
      "1",
      "1",
      "1",
      "2",
      "2",
      "7",
      "10",
    ];
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 6; j++) {
        // 4 колонки
        const hintElement = document.getElementById(`hint-top-${i}-${j + 1}`);
        if (hintElement) {
          hintElement.textContent = topHints[i + j * 15]; // Определяем индекс
        }
      }
    }
    const leftHints = [
      ["", "", "", "", "", "4"],
      ["", "", "", "", "2", "2"],
      ["", "2", "1", "1", "1", "1"],
      ["", "", "", "", "", "15"],
      ["", "", "", "1", "6", "1"],
      ["", "", "", "", "7", "4"],
      ["", "", "2", "3", "4", "3"],
      ["", "3", "1", "3", "2", "2"],
      ["", "3", "1", "4", "1", "2"],
      ["", "3", "1", "4", "1", "2"],
      ["", "", "3", "1", "6", "2"],
      ["", "", "3", "1", "6", "2"],
      ["", "", "", "6", "4", "3"],
      ["", "", "", "3", "2", "2"],
      ["", "", "", "", "", "6"],
    ];

    for (let row = 0; row < leftHints.length; row++) {
      for (let col = 0; col < leftHints[row].length; col++) {
        const hintElement = document.getElementById(
          `hint-left-${row}-${col + 1}`,
        );
        if (hintElement) {
          hintElement.textContent = leftHints[row][col];
        }
      }
    }
  },
};
