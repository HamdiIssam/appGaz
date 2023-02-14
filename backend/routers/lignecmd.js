const {
  createLignecmdController,
  getLignecmdController,
  getLignecmdByIdController,
  getLigneCmdByCommandeIdController,
} = require("../controllers/lignecmd");
const lignecmdRouter = require("express").Router();

lignecmdRouter.route("/").post(createLignecmdController);
lignecmdRouter.route("/commande/:commandeId").get(getLigneCmdByCommandeIdController);
lignecmdRouter.route("/").get(getLignecmdController);
lignecmdRouter.route("/:id").get(getLignecmdByIdController);

module.exports = lignecmdRouter;
