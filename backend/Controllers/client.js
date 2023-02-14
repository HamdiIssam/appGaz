
const {
    createClientService,
    getAllClientService,
    getClientByIdService,
    getOneClientService,
    updateClientByIDService,
    deleteClientService,
    getClientTelephoneService,
  } = require("../Service/client");
  const { StatusCodes } = require("http-status-codes");
  const bcrypt = require("bcrypt");
   
  // create Client
  const createClientController = async (req, res) => {
    let telephone =req.body.telephone
    // let password =req.body.password
    //  password = await bcrypt.hash(password,10)

const telephoneTest=await getClientTelephoneService(telephone)

if (!telephoneTest) 
{
  await createClientService({ ...req.body });
  res.status(StatusCodes.CREATED).send({msg:"create"});
  
}
else{
  return res.send({msg:"telephone exist"})
}
    
  };
  
  // getAll Client
  const getAllClientController = async (req, res) => {
    const client = await getAllClientService();
    res.status(StatusCodes.CREATED).send(client);
  };
  // login OneClient
  const getOneClientController = async (req, res) => {
  const {telephone,password} = req.body;
   const client = await getOneClientService(telephone,password);
    // let message=""
    
    if(client){
      message = "Bienvenu"

      // if(await bcrypt.compare(password, client.password)){
      }

      else{
          message =  "Verify your Telephone Ou Password"
      }
    
  
  // else{
  //     message="Verify your telephone"
  // }
  
    res.status(StatusCodes.OK).send(client);
  };
  
  // getById Client
  const getClientByIdController = async (req, res) => {
    const id = req.params.id;
    const client = await getClientByIdService(id);
    res.status(StatusCodes.CREATED).send(client);
  };
  // update Client
  const updateClientByIdController = async (req, res) => {
    const id = req.params.id;
    const client = await updateClientByIDService(req.body,id);
    res.status(StatusCodes.CREATED).send({msg:"update client"});
  };
  
  // delete Client
  const deleteClientByIdController = async (req, res) => {
    const id = req.params.id;
    const client = await deleteClientService(id);
    res.status(StatusCodes.CREATED).send({msg:"delete"});
  };
  
// // login OneClient
// const getOneClientController = async (req, res) => {
//   // const {telephone,password} = req.body;
//   const tel=req.params.tel;
//   const pass=req.params.pass
//    const client = await getOneClientService(tel,pass);
//     // let message=""
    
//     if(client){
//       message = "Bienvenu"

//       // if(await bcrypt.compare(password, client.password)){
//       }

//       else{
//           message =  "Verify your Telephone Ou Password"
//       }
    
  
//   // else{
//   //     message="Verify your telephone"
//   // }
  
//     res.status(StatusCodes.OK).send(client);
//   };




  module.exports = {
    createClientController,
    getOneClientController,
    getAllClientController,
    getClientByIdController,
    updateClientByIdController,
    deleteClientByIdController,
  };

  