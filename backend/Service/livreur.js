const db = require("../models");

// create livreur

const createLivreurService = (data) => {
  return db.livreur.create(data);
};

// login OneLivrueur
const getOneLivreurService = (telephone, password) => {
  return db.livreur.findOne({ where: { telephone: telephone, password: password } })
};

// getAll Livreur
const getAllLivreurervice = () => {
  return db.livreur.findAll();
};
// get Livreur ById
const getLivreurByIdService = (id) => {
  return db.livreur.findByPk(id);

};

// Update Livreur
const updateLivreurByIDService = (data, id) => {
  return db.livreur.update(data, { where: { id: id } });
};


// delete Livreur 
const deleteLivreurService = (id) => {
  return db.livreur.destroy({ where: { id: id } });
};


const getLivreurTelephoneService = (telephone) => {
  return db.livreur.findOne({ where: { telephone: telephone } })
};


module.exports = {
  createLivreurService,
  getOneLivreurService,
  getAllLivreurervice,
  getLivreurByIdService,
  updateLivreurByIDService,
  deleteLivreurService,
  getLivreurTelephoneService,
};
