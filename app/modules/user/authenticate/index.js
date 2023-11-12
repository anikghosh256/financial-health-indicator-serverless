"use strict";
import UserController from "../UserController.js";
const userController = new UserController();

export async function login(event, context, callback) {
  const response = await userController.login(event, context, callback);
  return response;
}
