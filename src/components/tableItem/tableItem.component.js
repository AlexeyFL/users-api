export default class TableItem {
  constructor(login, avatar) {
    this.login = login;
    this.avatarSrc = avatar;
  }

  createItem() {
    const item = `
      <div class="item">
        <span class="item__part item__login">Login: ${this.login}</span>
        <span class="item__part item__img">
          <img src="${this.avatarSrc}" alt="${this.login}"/>
        </span>
      </div>
    `;
    return item;
  }
}
