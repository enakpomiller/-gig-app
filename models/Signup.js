const { SequelizeScopeError } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/database');

// creating model with the nameGigs
const Signup = db.define('signups',{

  names:{
   type:Sequelize.STRING
  },
  email:{
    type:Sequelize.STRING
  },
  phone:{
     type:Sequelize.STRING
  },
  gender:{
   type:Sequelize.STRING
  },
  address:{
    type:Sequelize.STRING
  },
  format:{
     type:Sequelize.STRING
  },
})




// export the module
module.exports = Signup;
