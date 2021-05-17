module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tbl_users", {
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      // timestamps: false,
    },
    
    
    {

      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,
    
    
    });
  
    return Tutorial;
  };
  