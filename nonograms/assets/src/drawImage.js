export const drawImage = () => {
  const container = document.querySelector(".crossword_square");

  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("cell_square")) {
      const targetId = event.target.getAttribute("data-target");
      const hintsSpace = document.getElementById(targetId);
      hintsSpace.classList.toggle("black");
    }
    const btn = document.querySelector(".menu__clearBtn");
    btn.addEventListener("click", () => {
      const hints = document.querySelectorAll(".hints_space");
      hints.forEach((el) => {
        el.classList.remove("black");
      });
    });
  });
};
