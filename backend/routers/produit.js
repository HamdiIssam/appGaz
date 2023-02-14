const {
  createProduitController,
  getProduitController,
  getProduitByIdController,
  updateProduitByIdController,
  deleteProduitByIdController,
  } = require("../controllers/produit");
  
//!configuration multer
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("req.file");
    cb(null, 'C:/Users/Issam Hamdi/Desktop/appGaz/frontend/src/assets/imageProduit/');
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});


const produitRouter = require("express").Router();
produitRouter.route("/").post(upload.single("photo"),createProduitController);
produitRouter.route("/").get(getProduitController);
produitRouter.route("/:id").get(getProduitByIdController);
produitRouter.route("/:id").patch(updateProduitByIdController);
produitRouter.route("/:id").delete(deleteProduitByIdController);

module.exports = produitRouter;
