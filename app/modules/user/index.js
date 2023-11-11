"use strict";
import UserController from "./UserController.js";
const userController = new UserController();
export async function home(event, context, callback) {
  const response = await userController.getUser(event, context, callback);
  return response;
}
