export const createHeader = () => {
  const mainBlock = document.createElement("header");
  mainBlock.classList.add("header");
  document.body.appendChild(mainBlock);
  return mainBlock;
};
