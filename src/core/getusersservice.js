import { USERS_URL } from "../constants";

export class GetUsersSevice {
  static async getUsers() {
    const data = await fetch(USERS_URL).then((response) => response.json());


    return data.map((user) => {
      return {
        login: user.login,
        avatar: user.avatar_url,
      };
    });
  }
}
