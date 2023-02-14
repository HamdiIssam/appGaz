const db = require("../models");
 
//create Cleint 
const createClientService = (data) => {
  return db.client.create(data);
};
// login OneClient
const getOneClientService = (telephone, password) => {
  return db.client.findOne({ where: { telephone: telephone, password: password } })
};

// getAll Client
const getAllClientService = () => {
  return db.client.findAll();
};

// get Client ById
const getClientByIdService = (id) => {
  return db.client.findByPk(id);
};

// Update Client
const updateClientByIDService = (data, id) => {
  return db.client.update(data, { where: { id: id } });
};


// delete Client 
const deleteClientService = (id) => {
  return db.client.destroy({ where: { id: id } });
};

const getClientTelephoneService = (telephone) => {
  return db.client.findOne({ where: { telephone: telephone } })
};

module.exports = {
  createClientService,
  getAllClientService,
  getClientByIdService,
  getOneClientService,
  updateClientByIDService,
  deleteClientService,
  getClientTelephoneService,
};
