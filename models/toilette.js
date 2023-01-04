const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const Toilette= sequelize.define('Toilette', {
     adresse : {
      type: DataTypes.STRING,
    },
    postion: {
        type:DataTypes.GEOMETRY,
    },

    arrondissment : {
     type:DataTypes.STRING,
    },
    horaire: {
    type:DataTypes.STRING,
    },
    
  
    });

    return Toilette 
}
