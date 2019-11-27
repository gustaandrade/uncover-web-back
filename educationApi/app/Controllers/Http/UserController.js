"use strict";

const User = use("App/Models/User");

class UserController {
  async register({ request }) {
    const data = request.only([
      "username",
      "email",
      "password",
      "age",
      "phone"
    ]);

    const user = await User.create(data);

    return user;
  }
  async authenticate({ request, auth }) {
    try {
      const { email, password } = request.all();

      const token = await auth.attempt(email, password);

      return token;
    } catch (e) {
      return;
    }
  }
}

module.exports = UserController;
