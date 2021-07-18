module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      nomePrimeiro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nomeSegundo: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false,
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false,
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
      cidade: {
        type: DataTypes.STRING,
        
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      deslocamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
    });

    /*
    Users.associate = (models) => {
      Users.hasOne(models.Profissionais, {
          foreignkey: {
              allowNull: false
          },
      });
    };*/
    
    return Users;
};