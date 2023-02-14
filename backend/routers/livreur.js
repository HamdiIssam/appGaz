const {
  createLivreurController,
  getOneLivreurController,
  getLivreurController,
  getLivreurByIdController,
  updateLivreurByIdController,
  deleteLivreurByIdController,
} = require("../controllers/livreur");

const livreurRouter = require("express").Router();

livreurRouter.route("/add").post(createLivreurController);
livreurRouter.route("/").post(getOneLivreurController);
livreurRouter.route("/").get(getLivreurController);
livreurRouter.route("/:id").get(getLivreurByIdController);
livreurRouter.route("/:id").patch(  updateLivreurByIdController,);
livreurRouter.route("/:id").delete(deleteLivreurByIdController);

module.exports = livreurRouter;
