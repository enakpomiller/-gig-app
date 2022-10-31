const { SequelizeScopeError } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/database');



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


// creating model with the nameGigs

const Gig = db.define('gigs',{

   title:{
    type:Sequelize.STRING
   },
   technologies:{
    type:Sequelize.STRING
   },
   description:{
    type:Sequelize.STRING
   },
   budget:{
    type:Sequelize.STRING
   },
   contact_email:{
    type:Sequelize.STRING
  },


})



// export the module
module.exports = Gig;
