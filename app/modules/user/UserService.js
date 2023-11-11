import Service from "../../service/Service.js";

export default class UserService extends Service {
  constructor() {
    super();
  }

  async getUser(id) {
    return this.client.user.findUnique({
      where: {
        id,
      },
    });
  }
}
