import Service from "../../service/Service.js";
import jwt from "jsonwebtoken";

export default class JwtService extends Service {
    constructor() {
        super();
    }

    async generateToken(data) {
        return jwt.sign(data, process.env.JWT_SECRET);
    }

    async verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}
