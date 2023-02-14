module.exports = (sequelize, DataTypes) => {
    const lignecmd = sequelize.define("lignecmd", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          nom_produit: {
            type: DataTypes.STRING,
          },
          prix: {
            type: DataTypes.INTEGER,
          },
          quantite: {
            type: DataTypes.INTEGER,
          },
    });
  
    lignecmd.associate = function(models) {
        lignecmd.belongsTo(models.produit);
        lignecmd.belongsTo(models.commande);}
  
    // lignecmd.associate = function(models) {
    //     lignecmd.belongsTo(models.commande);}
  
    
      
    return lignecmd;
  };
  