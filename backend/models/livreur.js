
module.exports = (sequelize, DataTypes) => {
    const livreur = sequelize.define('livreur', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          nom: {
            type: DataTypes.STRING,
          },
          telephone: {
            type: DataTypes.INTEGER,
            unique:true,
          },
          password: {
            type: DataTypes.STRING,
          },
          // societeId: {
          //   type: DataTypes.INTEGER,
          // },
        });
 
    livreur.associate = function(models) {
      livreur.hasMany(models.commande,{ onDelete:"cascade"});  
    };
    
    livreur.associate = function(models) {
      livreur.belongsTo(models.societe);
    };

    return livreur;
  };

