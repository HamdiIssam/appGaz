const {
  createFactureController,
  getFactureController,
  getFactureByIdController,
} = require("../controllers/facture");

const factureRouter = require("express").Router();

factureRouter.route("/").post(createFactureController);
factureRouter.route("/").get(getFactureController);
factureRouter.route("/:id").get(getFactureByIdController);

module.exports = factureRouter;
