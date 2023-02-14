const db = require("../models");



// create produit

const createProduitService = (data) => {
  return db.produit.create(data);
};

// getAll produit
const getAllProduitService = () => {
  return db.produit.findAll();
};
// get produit ById
const getProduitByIdService = (id) => {
  return db.produit.findByPk(id);
};
// Update produit
const updateProduitByIDService = (data, id) => {
  return db.produit.update(data, { where: { id: id } });
};


// delete produit 
const deleteProduitService = (id) => {
  return db.produit.destroy({ where: { id: id } });
};
module.exports = {
    createProduitService,
    getAllProduitService,
    getProduitByIdService,
    updateProduitByIDService,
    deleteProduitService,
};





