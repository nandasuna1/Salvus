//const Users = require("./Users")
module.exports = (sequelize, DataTypes) => {
    const Profissionais = sequelize.define("Profissionais", {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profissao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      especialidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      localidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    /*
    Profissionais.associate = (models) => {
        Profissionais.belongsTo(models.Users, {
            foreignkey: {
                allowNull: false
            },
        });
    };*/

    return Profissionais;
};