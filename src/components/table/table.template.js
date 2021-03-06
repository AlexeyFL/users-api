function table(page, pagination) {
  const tableTemplate = `
    <div class="table">
      ${page}
    </div>
    <div class="table__nav">
      ${pagination || ""}
    </div>
  `;
  return tableTemplate;
}

function tablePage(item, count, cls) {
  const template = `
    <div data-count="${count}" class="${cls || ""}table__page">
      ${item}
    </div>
  `;
  return template;
}

function createButton(text) {
  return `<button data-count="${text}" class="table__button button">${text}</button>`;
}

export { table, tablePage, createButton };
