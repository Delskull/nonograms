export const createMainBlock = (className) => {
  const mainBlock = document.createElement("main");
  mainBlock.classList.add(className);
  document.body.appendChild(mainBlock);
  return mainBlock;
};
