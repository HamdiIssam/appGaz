module.exports = (sequelize, DataTypes) => {
    const produit = sequelize.define('produit', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          type: {
            type: DataTypes.STRING,
          },
          prixUnit: {
            type: DataTypes.INTEGER,
          },
          
          unite: {
            type: DataTypes.STRING,
          },
          photo: {
            type: DataTypes.STRING,
          },

        
          // societeId: {
          //   type: DataTypes.INTEGER,
          // },
      
    });

    
    produit.associate = function(models) {
      produit.belongsTo(models.societe);}

    return produit;
  };