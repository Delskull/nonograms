export function createLink(className, parent, text, href = "#") {
  const link = document.createElement("a");
  link.classList.add(className);
  parent.appendChild(link);
  link.textContent = text;
  link.href = href;
  return link;
}
