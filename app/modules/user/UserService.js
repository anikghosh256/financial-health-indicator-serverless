import Service from "../../service/Service.js";
import JwtService from "./JwtService.js";
import bcrypt from "bcrypt";

export default class UserService extends Service {
  constructor() {
    super();
    this.JwtService = new JwtService();
  }

  async getUser(id) {
    return this.client.user.findUnique({
      where: {
        id,
      },
    });
  }

  async login(email, password) {
    const userData = await this.client.user.findUnique({
      where: {
        email
      },
    });

    // Compare password
    const isPasswordValid = await this.comparePassword(password, userData.password);
    if (!userData || !isPasswordValid) return null;

    const user = {
      id: userData.id,
      email: userData.email,
      name: userData.name,
    }
    const token = await this.JwtService.generateToken(user);
    return {
      ...user,
      token,
    }
  }

  async createUser({ email, password, name }) {
    return this.client.user.create({
      data: {
        email,
        password: await this.getHash(password),
        name,
      },
    });
  }

  /**
   * Encrypt password
   * @param {string} password
   * @returns {string} encrypted password
   */
  async getHash(password) {
    let hash = await bcrypt.hash(password, 10);
    return hash;
  }

  /**
   * Compare password
   * @param {string} password
   * @param {string} hash
   * @returns {boolean} true if password is valid
   */
  async comparePassword(password, hash) {
    let isPasswordValid = await bcrypt.compare(password, hash);
    return isPasswordValid;
  }


}
