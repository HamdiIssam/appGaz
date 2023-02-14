const {
    createLignecmdService,
    getAllLignecmdService,
    getLignecmdByIdService,
    getLingeCommandeByCommandeId,
  } = require("../Service/lignecmd"); 
const { StatusCodes } = require("http-status-codes");
// const lignecmd = require("../models/lignecmdModel");

//  create Lignecmd
const createLignecmdController = async (req, res) => {
    const da = await createLignecmdService({ ...req.body });
    res.status(StatusCodes.CREATED).send({msg:"create"});
  };
  
  // getAll Lignecmd
  const getLignecmdController = async (req, res) => {
    const db = await getAllLignecmdService();
    res.status(StatusCodes.CREATED).send(db);
  };
  
  // getById Lignecmd
  const getLignecmdByIdController = async (req, res) => {
    const id = req.params.id;
    const dc = await getLignecmdByIdService(id);
    res.status(StatusCodes.CREATED).send(dc);
  };
  //getLigneCmdByCommandeId
  const getLigneCmdByCommandeIdController = async (req, res) => {
    const id = req.params.commandeId;
    const dc = await getLingeCommandeByCommandeId(id);
    res.status(StatusCodes.CREATED).send(dc);
  }

  module.exports = {
    createLignecmdController,
    getLignecmdController,
    getLignecmdByIdController,
    getLigneCmdByCommandeIdController,
  };
