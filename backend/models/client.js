
module.exports = (sequelize, DataTypes) => {
    const client = sequelize.define('client', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          nom: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          telephone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true,
          },
          password: {
            type: DataTypes.STRING,
          },
          type: {
            type: DataTypes.STRING,
          },
          // societeId: {
          //   type: DataTypes.INTEGER,
          // },

        });
   
    client.associate = function(models) {
      client.hasMany(models.commande,{ onDelete:"cascade"});
    
    };

    client.associate = function(models) {
      client.belongsTo(models.societe);}

      
    return client;
  };

