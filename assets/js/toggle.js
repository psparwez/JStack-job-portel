const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

if (bar) {
  bar.addEventListener("click", () => {
    menu.classList.toggle("active");
    bar.classList.toggle("bx-x");

    menu.addEventListener("click", () => {
      menu.classList.remove("active");
      bar.classList.remove("bx-x");
    });
  });
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  header.classList.toggle("sticky", scrollTop > 0);
});
