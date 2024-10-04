const Sequelize = require("sequelize");
const sequelize = require("../dbconnection").sequelize;
module.exports = {
  userModel: require("./user")(Sequelize, sequelize, Sequelize.DataTypes)
};
module.exports = {
    userModel: require("./userFamily")(Sequelize, sequelize, Sequelize.DataTypes)
  };
  module.exports = {
    userModel: require("./userImages")(Sequelize, sequelize, Sequelize.DataTypes)
  };
  
  
