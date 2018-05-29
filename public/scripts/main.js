"use strict";

window.addEventListener("load", e => {
  let toggle = false;
  document.addEventListener("click", e => {
    const target = e.target;

    if (target.classList.contains("focus")) {
      changeFocus(e, toggle);
      toggle = !toggle;
    }

    if (target.classList.contains("left")) {
      console.log("left");
    }
  });
});

function changeFocus(e, toggle) {
  const columns = document.querySelectorAll(".column");
  columns.forEach(column => {
    column.style.maxHeight = toggle ? "100vh" : "3rem";
    column.style.backgroundColor = toggle ? "" : "whitesmoke";
    column.firstElementChild.style.color = toggle ? "" : "black";
  });
  const showcase = document.querySelector(".showcase");
  showcase.style.display = toggle ? "none" : "grid";
  showcase.style.maxHeight = toggle ? "0" : "100%";
}
