const {
    createSocieteController,
    getOneSocieteController,
    getSocieteController,
    getSocieteByIdController,
    updateSocieteByIdController,
    } = require("../controllers/societe");
    
  const societeRouter = require("express").Router();
  societeRouter.route("/add").post(createSocieteController);
  societeRouter.route("/").post(getOneSocieteController);
  societeRouter.route("/").get(getSocieteController);
  societeRouter.route("/:id").get(getSocieteByIdController);
  societeRouter.route("/:id").patch(updateSocieteByIdController);

  
  module.exports = societeRouter;