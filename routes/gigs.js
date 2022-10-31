const express = require('express');
const router =  express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const Signup = require('../models/Signup');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


    router.get('/', async(req, res)=>{
        Gig.findAll()
            .then(gigs =>{
        res.render('gigs',{gigs});
        console.log(gigs);
        })
        .catch(err => console.log(err)) // return promises
    });


    router.post('/signup', async(req, res) =>{
      const {names,email,phone,gender,address,format}=req.body;
      let errors =[];
      if(!names){
       errors.push({mgs_err:' please enter your names'})
      }else if(!email){
       errors.push({msg_err:' please fill your email'});
      }else if(!phone){
       errors.push({msg_err:' enter your phone number'});
      }else if(!gender){
       errors.push({msg_err:' select gender'});
      }else if(!address){
       errors.push({msg_err:' enter your address'});
      }else if(!format){
       errors.push({msg_err:' choose a date please '});
      }

      if(errors.length > 0){
        Signup.create({
          names:names,
          email:email,
          phone:phone,
          gender:gender,
          address:address,
          format:format,
         })
         .then(res.render('signup'))
         .catch(err=>console.log(err));

      }
      // console.log(req.body);
       Signup.create({
        names:names,
        email:email,
        phone:phone,
        gender:gender,
        address:address,
        format:format,
       })
       .then(res.render('signup'))
       .catch(err=>console.log(err));
    })
    router.get('/signup',(req,res)=>{res.render('signup')});




    // display add gig form
    router.get('/add',(req,res)=>{res.render('add')});
    // adding gig list
    router.post('/add',(req,res)=>{
    // use destructuring to pull out the variables
    let {title, technologies, budget, description, contact_email } = req.body;
    let errors = []; // initializing error arrays

    // validating our feilds
    if(!title){
       errors.push({text:' please fill the title feild'});
    }
    if(!technologies){
      errors.push({text:' please fill the technologies feild'});
    }
    if(!budget){
      errors.push({text:' please fill in your budget'});
    }
    if(!description){
      errors.push({text:' please fill description'});
    }
    if(!contact_email){
      errors.push({text:' please fill in your email'});
    }
    // checking for errors
    if(errors.length > 0){
       res.render('add',{
        errors,
        title,
        technologies,
        budget,
        description,
        contact_email
      });
    }else{
     // insert into table with the model name GIG
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    }) // this will return a promis
    .then(gig =>res.redirect('/gigs'))
    .catch(err=>console.log(err));
    }

});


// search for gigs
router.get('/search',(req,res)=>{
   let {term} = req.query;
   term = term.toLowerCase();

   Gig.findAll({ where: {technologies: { [Op.like] : '%' + term + '%' }} })
    .then(gigs=>res.render('gigs',{gigs}))
    .catch(err=>console.log(err));


});





// export the modules
module.exports = router;
