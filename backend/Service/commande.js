const db = require("../models");

//create Commande
const createCommandeService = (data) => {
  return db.commande.create(data);
};
// get commande By clientID
const getCommandeByclientID = (clientId) => {
  return db.commande.findAll({where: {clientId: clientId}  });
};
// get commande By livreurID
const getCommandeBylivreurID = (livreurId) => {
  return db.commande.findAll({ where: { livreurId: livreurId } });
};
// getAll Commande
const getCommandeService = () => {
  return db.commande.findAll();
};
// get Commande ById
const getCommanderByIdService = (id) => {
  return db.commande.findByPk(id);
};
// Update Livreur
const updateCommandeByIDService = (data, id) => {
  return db.commande.update(data, { where: { id: id } });
};

module.exports = {
  createCommandeService,
  getCommandeService,
  getCommanderByIdService,
  getCommandeByclientID,
  getCommandeBylivreurID,
  updateCommandeByIDService
};
