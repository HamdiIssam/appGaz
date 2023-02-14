const db = require("../models");

//create Lignecmd
const createLignecmdService = (data) => {
  return db.lignecmd.create(data);
};
// getAll Lignecmd
const getAllLignecmdService = () => {
  return db.lignecmd.findAll();
};

// get Lignecmd ById
const getLignecmdByIdService = (id) => {
  return db.lignecmd.findByPk(id);
};

// get lingeCommande By CommandeID
const getLingeCommandeByCommandeId = (commandeId) => {
  return db.lignecmd.findAll({where: {commandeId: commandeId}  });
};

module.exports = {
  createLignecmdService,
  getAllLignecmdService,
  getLignecmdByIdService,
  getLingeCommandeByCommandeId,
};
