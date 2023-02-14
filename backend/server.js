const express =require('express');
const db = require('./models');
var path = require('path');
const bodyParser = require("body-parser"); 


const clientRouter = require('./routers/client'); 

const commandeRouter = require("./routers/commande");

const factureRouter = require("./routers/facture");

const lignecmdRouter = require("./routers/lignecmd");

const livreurRouter = require("./routers/livreur");

const produitRouter = require("./routers/produit");

const societeRouter = require("./routers/societe");



const cors =require('cors');

const app = express();
app.use(cors())

app.use(express.json());




app.use('/api/client',clientRouter);
app.use("/api/commande", commandeRouter);
app.use("/api/facture", factureRouter);
app.use("/api/lignecmd", lignecmdRouter);
app.use("/api/livreur", livreurRouter);
app.use("/api/produit", produitRouter);
app.use("/api/societe", societeRouter);

// server
db.sequelize.sync().then(()=>{
    app.listen(4000,()=>{console.log("connected");})
})