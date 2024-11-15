export function modalWrapper(className) {
  const modalWindow = document.createElement("div");
  modalWindow.classList.add(className);
  modalWindow.classList.add("visibility");
  document.body.appendChild(modalWindow);
  return modalWindow;
}
