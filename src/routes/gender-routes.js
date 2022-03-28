import * as GenderController from "../controllers/gender-controllers.js";
import { validateRequest } from "../middleware/auth.js";

export default {
  Create: {
    method: "POST",
    url: "/genders",
    preHandler: [validateRequest],
    handler: GenderController.create,
  },
  Delete: {
    method: "DELETE",
    url: "/genders/:id",
    preHandler: [validateRequest],
    handler: GenderController.remove,
  },
  GetAll: {
    method: "GET",
    url: "/genders",
    handler: GenderController.getGender,
  },
  GetByID: {
    method: "GET",
    url: "/genders/:id",
    handler: GenderController.getGenderById,
  },
  UpdateMovie: {
    method: "PATCH",
    url: "/genders/:id",
    preHandler: [validateRequest],
    handler: GenderController.update,
  },
};
