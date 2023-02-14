module.exports = (sequelize, DataTypes) => {
    const societe = sequelize.define('societe', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          email: {
            type: DataTypes.STRING,
            unique:true,
          },
          password: {
            type: DataTypes.STRING,
          },
      
          telephone: {
            type: DataTypes.INTEGER,
            unique:true,
          },
      
          fax: {
            type: DataTypes.INTEGER,
          },
      
          logo: {
            type: DataTypes.STRING,
          },
          adresse: {
            type: DataTypes.STRING,
          },
      
          nom_employeur: {
            type: DataTypes.STRING,
          },
      
          prenom_employeur: {
            type: DataTypes.STRING,
          },
      
          temps_ouverture: {
            type: DataTypes.STRING,
          },
      
          temps_fermeture: {
            type: DataTypes.STRING,
          },
      
          nom_societe: {
            type: DataTypes.STRING,
          },
      
          jour_travail: {
            type: DataTypes.STRING,
          },

          matricule_fiscale: {
            type: DataTypes.STRING,
          },
      
        
    });


       societe.associate = function(models) {
      societe.hasMany(models.client,{ onDelete:"cascade"});
      societe.hasMany(models.commande,{ onDelete:"cascade"});
      societe.hasMany(models.livreur,{ onDelete:"cascade"});
     societe.hasMany(models.facture,{ onDelete:"cascade"});
      societe.hasMany(models.produit,{ onDelete:"cascade"});
    };

    //    societe.associate = function(models) {
    // };

    //    societe.associate = function(models) {
    // };

    // //    societe.associate = function(models) {
    // // };

    //    societe.associate = function(models) {
    // };
    
    return societe;
  };