import { USERS_URL } from '../constants';

export class GetUsersSevice {
  static async getUsers() {
    const dataUsers = await fetch(USERS_URL).then((response) =>
      response.json()
    );

    return dataUsers.map((user) => {
      return {
        login: user.login,
        avatar: user.avatar_url,
        user_github: user.html_url,
      };
    });
  }

  static async getUser(login) {
    const userLogin = `https://api.github.com/users/${login}`;
    const dataUser = await fetch(userLogin).then((response) => response.json());

    return dataUser;
  }
}
