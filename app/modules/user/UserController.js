import UserService from './UserService.js';
import Controller from '../../controller/Controller.js';

export default class User extends Controller {
  constructor() {
    super();
    this.userService = new UserService();
  }

  async getUser(event, context, callback) {
    try {
      const { id } = event.queryStringParameters;
      const users = await this.userService.getUser(parseInt(id));
      return this.success(users, 200);
    } catch (error) {
      return this.error(error);
    }
  }


  async login(event, context, callback) {
    try {
      const { email, password } = this.parseData(event.body);
      const user = await this.userService.login(email, password);
      return this.success({}, 200);
    } catch (error) {
      return this.error(error);
    }
  }

}
