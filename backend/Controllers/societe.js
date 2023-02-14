const {
    createSocieteService,
    getOneSocieteService,
    getAllSocieteService,
    getSocieteByIdService,
    updateSocieteByIDService,
}= require("../Service/societe")
const { StatusCodes } = require("http-status-codes");

// create Societe 

const createSocieteController = async (req, res) => {

const [idtest]=await getAllSocieteService()

if (!idtest) 
{
const societe = await createSocieteService({ ...req.body });
res.status(StatusCodes.CREATED).send(societe);
} 
else{
return res.send({msg:"societe exist"})
}
  };


 // login OneSociete
 const getOneSocieteController = async (req, res) => {
  const {email,password} = req.body;
   const societe = await getOneSocieteService(email,password);
    
    if(societe){
      message = "Bienvenu"

    
      }

      else{
          message =  "Verify your Email Ou Password"
      }
      
      res.status(StatusCodes.OK).send(societe);
    };


  
  // getAll Societe
  const getSocieteController = async (req, res) => {
    const aa = await getAllSocieteService();
    res.status(StatusCodes.CREATED).send(aa);
  };
  
  // getById Societe
  const getSocieteByIdController = async (req, res) => {
    const id = req.params.id;
    const aa = await getSocieteByIdService(id);
    res.status(StatusCodes.CREATED).send(aa);
  };


   // update Societe
   const updateSocieteByIdController = async (req, res) => {
    const id = req.params.id;
    const aa = await updateSocieteByIDService(req.body,id);
    res.status(StatusCodes.CREATED).send({msg:"update Societe"});
  };


  module.exports = {
    createSocieteController,
    getOneSocieteController,
    getSocieteController,
    getSocieteByIdController,
    updateSocieteByIdController,
    
  
  };