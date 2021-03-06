import { GetUsersSevice } from "../../core/index";
import { table, tablePage, createButton } from "./table.template";
import TableItem from "../tableItem/tableItem.component";
import { chunkArray } from "../../utils/utils";

export default class Table {
  constructor() {
    this.app = document.getElementById("app");
  }

  viewTable() {
    // create all users list
    const tableView = this.users.map((item) => {
      return new TableItem(item.login, item.avatar).createItem();
    });

    // create users pages
    const pages = chunkArray(tableView, 5).map((page, index) => {
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
    this.viewTable(); // get this.users from closure
  }
}
