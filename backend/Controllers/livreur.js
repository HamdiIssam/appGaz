const {
    createLivreurService,
    getOneLivreurService,
  getAllLivreurervice,
  getLivreurByIdService,
  updateLivreurByIDService,
  deleteLivreurService,
  getLivreurTelephoneService,
}= require("../Service/livreur")
const { StatusCodes } = require("http-status-codes");

// create Livreur 
const createLivreurController = async (req, res) => {
  const telephone =req.body.telephone
console.log(req.body.telephone);
const telephonetest=await getLivreurTelephoneService(telephone)

if (!telephonetest) 
{
const livreur = await createLivreurService({ ...req.body });
res.status(StatusCodes.CREATED).send(livreur);

} 
else{
return res.send({msg:"telephone exist"})
}
  };
  
// login OneLivreur
const getOneLivreurController = async (req, res) => {
  const {telephone,password} = req.body;
   const livreur = await getOneLivreurService(telephone,password);
   
    
    if(livreur){
      message = "Bienvenu"
    }

      else{
          message =  "Verify your Telephone Ou Password"
      }

      res.status(StatusCodes.OK).send(livreur);
    };

  // getAll Livreur
  const getLivreurController = async (req, res) => {
    const aa = await getAllLivreurervice();
    res.status(StatusCodes.CREATED).send(aa);
  };
  
  // getById Livreur
  const getLivreurByIdController = async (req, res) => {
    const id = req.params.id;
    const aa = await getLivreurByIdService(id);
    res.status(StatusCodes.CREATED).send(aa);
  };


   // update Livreur
   const updateLivreurByIdController = async (req, res) => {
    const id = req.params.id;
    const aa = await updateLivreurByIDService(req.body,id);
    res.status(StatusCodes.CREATED).send({msg:"update Livreur"});
  };
  
  // delete Livreur
  const deleteLivreurByIdController = async (req, res) => {
    const id = req.params.id;
    const aa = await deleteLivreurService(id);
    res.status(StatusCodes.CREATED).send({msg:"delete"});
  };

  
  module.exports = {
    createLivreurController,
    getOneLivreurController,
    getLivreurController,
    getLivreurByIdController,
    updateLivreurByIdController,
    deleteLivreurByIdController,


  };