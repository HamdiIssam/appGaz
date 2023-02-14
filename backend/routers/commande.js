const {
  createCommandeController,
  getCommandeController,
  getCommandeByIdController,
  getCommandeByClientIdController,
  getCommandeByLivrureIdController,
  updateCommandeByIdController
} = require("../controllers/commande");
const commandeRouter = require("express").Router();

commandeRouter.route("/").post(createCommandeController);
commandeRouter.route("/").get(getCommandeController);
commandeRouter.route("/:id").get(getCommandeByIdController);
commandeRouter.route("/client/:clientId").get(getCommandeByClientIdController);
commandeRouter.route("/livreur/:livreurId").get(getCommandeByLivrureIdController);
commandeRouter.route("/:id").patch(updateCommandeByIdController);

module.exports = commandeRouter;
