const {
  createCommandeService,
  getCommandeService,
  getCommanderByIdService,
  getCommandeByclientID,
  getCommandeBylivreurID,
  updateCommandeByIDService
} = require("../Service/commande");
const { StatusCodes } = require("http-status-codes");

// create Commande

const createCommandeController = async (req, res) => {
  const date_achat =req.body.date_achat;
  const date_livraison =req .body.date_livraison
  
const a=new Date ()
a.setUTCHours(0,0,0,0)

const b=new Date(date_achat)
b.getUTCHours(0,0,0,0)

const c= new Date(date_livraison)
c.getUTCHours(0,0,0,0)

 if (a.getTime() <= b.getTime()){


  if (c.getTime()>=b.getTime()) {
    
    const da= await createCommandeService({...req.body })
     res.status(StatusCodes.CREATED).send(da);
  } 
  else{
    res.send({msg:"date_livraison "})
  }
 
  }
  
  else{
   res.send({msg:"date_achat "})

 }

 
};

// getAll Commande
const getCommandeController = async (req, res) => {
  const db = await getCommandeService();
  res.status(StatusCodes.CREATED).send(db);
};

// getById Commande
const getCommandeByIdController = async (req, res) => {
  const id = req.params.id;
  const dc = await getCommanderByIdService(id);
  res.status(StatusCodes.CREATED).send(dc);
};

// getCommandeByClientId
const getCommandeByClientIdController = async (req, res) => {
  const id = req.params.clientId;
  const dc = await getCommandeByclientID(id);
  res.status(StatusCodes.CREATED).send(dc);
};
// getCommandeByLivrureId
const getCommandeByLivrureIdController = async (req, res) => {
  const id = req.params.livreurId;
  const dc = await getCommandeBylivreurID(id);
  res.status(StatusCodes.CREATED).send(dc);
};

   // update Commande
   const updateCommandeByIdController = async (req, res) => {
    const id = req.params.id;
    const aa = await updateCommandeByIDService(req.body,id);
    res.status(StatusCodes.CREATED).send({msg:"update Commande"});
  };

module.exports = {
  createCommandeController,
  getCommandeController,
  getCommandeByIdController,
  getCommandeByClientIdController,
  getCommandeByLivrureIdController,
  updateCommandeByIdController
};
