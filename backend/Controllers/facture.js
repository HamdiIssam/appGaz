const {
    createFactureService,
    getFactureService, 
    getFactureByIdService,
  } = require("../Service/facture"); 
const { StatusCodes } = require("http-status-codes");

// create Facture
const createFactureController = async (req, res) => {
    const da = await createFactureService({ ...req.body });
    res.status(StatusCodes.CREATED).send({msg:"create"});
  };
  
  // getAll Facture
  const getFactureController = async (req, res) => {
    const db = await getFactureService();
    res.status(StatusCodes.CREATED).send(db);
  };
  
  // getById Facture
  const getFactureByIdController = async (req, res) => {
    const id = req.params.id;
    const dc = await getFactureByIdService(id);
    res.status(StatusCodes.CREATED).send(dc);
  };
  
  module.exports = {
    createFactureController,
    getFactureController,
    getFactureByIdController,
  };
 