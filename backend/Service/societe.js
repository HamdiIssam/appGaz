const db = require("../models");
 
//create Societe
const createSocieteService = (data) => {
  return db.societe.create(data);
};

// login OneSociete
const getOneSocieteService = (email, password) => {
  return db.societe.findOne({ where: { email: email, password: password } })
};

// getAll Societe
const getAllSocieteService = () => {
    return db.societe.findAll();
  };
  
  // get Societe ById
  const getSocieteByIdService = (id) => {
    return db.societe.findByPk(id);
  };
  
  // Update Societe
  const updateSocieteByIDService = (data, id) => {
    return db.societe.update(data, { where: { id: id } });
  };


module.exports = {
    createSocieteService,
    getOneSocieteService,
    getAllSocieteService,
    getSocieteByIdService,
    updateSocieteByIDService,
    
  
  };