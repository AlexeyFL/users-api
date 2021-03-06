import "./styles/styles.scss";
import Table from "./components/table/table.component";

const table = new Table();
table.init();

function pagination() {
  document.addEventListener("click", (e) => {
    const pages = document.querySelectorAll(".table__page");
    const btns = document.querySelectorAll(".table__button");
    if (e.target.classList.contains("table__button")) {
      const btn = e.target;

      btns.forEach((btnRemoveCls) => {
        btnRemoveCls.classList.remove("active");
      });

      btn.classList.add("active");

      pages.forEach((pageRemove) => {
        pageRemove.classList.remove("active");
      });
      pages.forEach((page) => {
        if (page.dataset.count === btn.dataset.count) {
          page.classList.add("active");
        }
      });
    }
  });
}

pagination();
