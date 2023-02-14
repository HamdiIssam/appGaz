module.exports = (sequelize, DataTypes) => {
    const facture = sequelize.define("facture", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          montant: {
            type: DataTypes.STRING,
          },
          tva: {
            type: DataTypes.STRING,
          },
          num_facture: {
            type: DataTypes.INTEGER,
          },
          // societeId: {
          //   type: DataTypes.INTEGER,
          // },
    });
  
      facture.associate = function(models) {
        facture.belongsTo(models.commande);
        facture.belongsTo(models.societe);
      };

      // facture.associate = function(models) {
      // };
  
    
      
    return facture;
  };
  