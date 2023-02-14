module.exports = (sequelize, DataTypes) => {
  const commande = sequelize.define("commande", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date_achat: {
      type: DataTypes.DATE,
    },
    date_livraison: {
      type: DataTypes.DATE,
    },
    adresse: {
      type: DataTypes.STRING,
    },
    validation: {
      type: DataTypes.BOOLEAN,
    },
    type_payement: {
      type: DataTypes.STRING,
    },
    total: {
      type: DataTypes.INTEGER,
    },
    // societeId: {
    //   type: DataTypes.INTEGER,
    // },
  });
  

    commande.associate = function(models) {
      commande.belongsTo(models.client);
      commande.belongsTo(models.livreur);
      commande.belongsTo(models.societe);
    };
    
  return commande;
};
