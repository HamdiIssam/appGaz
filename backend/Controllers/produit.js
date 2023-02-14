
const {
    createProduitService,
    getAllProduitService,
    getProduitByIdService,
    updateProduitByIDService,
    deleteProduitService,
  } = require("../Service/produit"); 
const { StatusCodes } = require("http-status-codes");
// const produit = require("../models/produitModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, "C:/Users/Issam Hamd/Desktop/app/frontend/src/assets");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
//  create Produit
const createProduitController = async (req, res) => {
  console.log("eeeeeeeeeee",req.file);
  if (!req.file) {
    const error = new Error("No image provided");

    error.statusCode = 422;

    throw error;
  }
    const produit = await createProduitService({ 
     type:req.body.type,
      prixUnit:req.body.prixUnit,
      unite:req.body.unite,
      societeId:req.body.societeId,
      photo: 'assets/imageProduit/'+req.file.filename,
    });

    res.status(StatusCodes.CREATED).send(produit);
  };
  
  // getAll Produit
  const getProduitController = async (req, res) => {
    const produit = await getAllProduitService();
    res.status(StatusCodes.CREATED).send(produit);
  };
  
  // getById Produit
  const getProduitByIdController = async (req, res) => {
    const id = req.params.id;
    const produit = await getProduitByIdService(id);
    res.status(StatusCodes.CREATED).send(produit);
  };

    // update Produit
    const updateProduitByIdController = async (req, res) => {
      const id = req.params.id;
      const produit = await updateProduitByIDService(req.body,id);
      res.status(StatusCodes.CREATED).send({msg:"update produit"});
    };
    
    // delete Produit
    const deleteProduitByIdController = async (req, res) => {
      const id = req.params.id;
      const produit = await deleteProduitService(id);
      res.status(StatusCodes.CREATED).send({msg:"delete"});
    };
  
  module.exports = {
    createProduitController,
    getProduitController,
    getProduitByIdController,
    updateProduitByIdController,
    deleteProduitByIdController,
  };
