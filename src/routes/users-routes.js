import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.index,
  },

  getUsersById: {
    method: "GET",
    url: "/users/:id",
    handler: UserController.GetByID,
  },

  updateUsers: {
    method: "PUT",
    url: "/users/:id",
    handler: UserController.update,
  },

  deleteUsers: {
    method: "DELETE",
    url: "/users/:id",
    handler: UserController.remove,
  },

  updateUsersAtributes: {
    method: "PATCH",
    url: "/users/:id",
    handler: UserController.updateAtributes,
  },
};
