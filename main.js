let link = document.querySelector(".link");
document.querySelector("#hamburger-menu").onclick = () => {
  link.classList.toggle("active");
};

const menu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !link.contains(e.target)) {
    link.classList.remove("active");
  }
});