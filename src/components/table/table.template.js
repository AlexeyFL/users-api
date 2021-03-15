function table(page, pagination) {
  const tableTemplate = `
    <div class="table">
      <div class="table__body">
        ${page}
      </div>
      <div class="table__nav">
        ${pagination || ''}
      </div>
    </div>
  `;
  return tableTemplate;
}

function tablePage(item, count, cls) {
  const template = `
    <div data-count="${count}" class="${cls || ''}table__page">
      ${item}
    </div>
  `;
  return template;
}

function createButton(text) {
  if (text === 1) {
    return `<button data-count="${text}" class="table__button button active">${text}</button>`;
  }
  return `<button data-count="${text}" class="table__button button">${text}</button>`;
}

export { table, tablePage, createButton };
