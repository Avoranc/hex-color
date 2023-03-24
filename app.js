const text = document.querySelector(".text");
const block = document.querySelector(".block");
const btn = document.querySelector(".btn");
const HEX = "0123456789ABCDEF";

const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + HEX[Math.floor(Math.random() * 16)];
  }
  return color;
};

btn.addEventListener("click", () => {
  const currentColor = randomColor();
  block.style.backgroundColor = currentColor;
  text.textContent = currentColor;
});
