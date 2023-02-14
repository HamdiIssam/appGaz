const {
  createClientController,
  getOneClientController,
  getAllClientController,
  getClientByIdController,
  updateClientByIdController,
  deleteClientByIdController,
} = require("../Controllers/client");

const clientRouter = require("express").Router();

clientRouter.route("/add").post(createClientController);
clientRouter.route("/").post(getOneClientController);
clientRouter.route("/").get(getAllClientController);
clientRouter.route("/:id").get(getClientByIdController);
clientRouter.route("/:id").patch(updateClientByIdController);
clientRouter.route("/:id").delete(deleteClientByIdController);

module.exports = clientRouter;
