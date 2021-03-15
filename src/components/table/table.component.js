import { GetUsersSevice } from "../../core/index";
import { table, tablePage, createButton } from "./table.template";
import TableItem from "../tableItem/tableItem.component";
import { chunkArray } from "../../utils/utils";

export default class Table {
  sort = "";

  tableView = null;

  constructor(app, searchWrapper) {
    this.app = document.querySelector(app);
    this.searchWrapper = document.querySelector(searchWrapper);
  }

  viewTable(sort) {
    switch (sort) {
      case "asc":
        this.tableView = this.users
          .sort((a, b) => {
            return a.login.localeCompare(b.login);
          })
          .map((item) => {
            return new TableItem(item.login, item.avatar).createItem();
          });
        break;
      case "desc":
        this.tableView = this.users
          .sort((a, b) => {
            return b.login.localeCompare(a.login);
          })
          .map((item) => {
            return new TableItem(item.login, item.avatar).createItem();
          });
        break;

      default:
        this.tableView = this.users.map((item) => {
          return new TableItem(item.login, item.avatar).createItem();
        });
        break;
    }

    // create users pages
    const pages = chunkArray(this.tableView, 5).map((page, index) => {
      if (index === 0) {
        return tablePage(page.join(""), index + 1, "active ");
      }
      return tablePage(page.join(""), index + 1);
    });

    // create pagination buttons
    const buttons = pages.map((page, index) => {
      return createButton(index + 1);
    });

    this.app.innerHTML = table(pages.join(""), buttons.join(""));
  }

  init() {
    GetUsersSevice.getUsers().then((data) => this.viewData(data));
  }

  viewData(data) {
    this.users = data;
    this.viewTable(this.sort); // get this.users from closure
  }
}
