const db = require("../models");

//create Facture
const createFactureService = (data) => {
  return db.facture.create(data);
};
// getAll Facture
const getFactureService = () => {
  return db.facture.findAll();
};

// get Facture ById
const getFactureByIdService = (id) => {
  return db.facture.findByPk(id);
};

module.exports = {
  createFactureService,
  getFactureService,
  getFactureByIdService,
};
