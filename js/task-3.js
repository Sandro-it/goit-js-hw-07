const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const name = input.value.trim() || "Anonymous";
  output.textContent = name;
});

const elements = document.querySelectorAll("#name-input");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.display = "inline-flex";
  elements[i].style.padding = "24px";
  elements[i].style.flexDirection = "column";
  elements[i].style.alignItems = "flex-start";
  elements[i].style.gap = "16px";
  elements[i].style.borderRadius = "8px";
  elements[i].style.background = "#FFF";
  elements[i].style.width = "360px";
  elements[i].style.height = "40px";
}
