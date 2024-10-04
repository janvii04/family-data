module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "userImage",
      {
        ...require("./cors")(Sequelize, DataTypes),
        
        
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: user,
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete:"CASCADE"
        },
        userImage: {
          type: DataTypes.BLOB,
          references: {
            model: user,
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete:"CASCADE"
        },
      },
  
      {
        tableName: "userImage",
      }
    );
  };
  