import './styles/styles.scss';
import Table from './components/table/table.component';
import Popup from './components/popup/popup.component';

const popup = new Popup('body');

const table = new Table('.app__body', '.table__header');
table.init();

function search() {
  const searchInput = document.querySelector('.search__input');

  searchInput.addEventListener('input', (e) => {
    document.querySelectorAll('.item').forEach((elem, index) => {
      if (
        elem.querySelector('.item__login').textContent.indexOf(e.target.value) <
        0
      ) {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'flex';
      }
    });
  });
}

function sortByLogin() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('asc')) {
      table.viewTable((table.sort = 'asc'));
    }
    if (e.target.classList.contains('desc')) {
      table.viewTable((table.sort = 'desc'));
    }
  });
}
sortByLogin();

function pagination() {
  document.addEventListener('click', (e) => {
    const pages = document.querySelectorAll('.table__page');
    const btns = document.querySelectorAll('.table__button');
    if (e.target.classList.contains('table__button')) {
      const btn = e.target;

      btns.forEach((btnRemoveCls) => {
        btnRemoveCls.classList.remove('active');
      });

      btn.classList.add('active');

      pages.forEach((pageRemove) => {
        pageRemove.classList.remove('active');
      });
      pages.forEach((page) => {
        if (page.dataset.count === btn.dataset.count) {
          page.classList.add('active');
        }
      });
    }
  });
}

pagination();
search();
