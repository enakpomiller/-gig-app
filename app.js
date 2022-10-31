const express = require('express');
const exphbs = require('express-handlebars');
const bodyPaser = require('body-parser');
const mysql = require('mysql');
const path = require('path');


const app  = express();
// creating middleware for handlebars
   app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}));
   app.set('view engine','handlebars');

// body parser
app.use(bodyPaser.urlencoded({ extended : false}));
// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// index routing
app.get('/', (req, res)=> res.render('index',{ layout:'landing'}));
// users header routing
app.get('/', (req, res)=> res.render({ defaultLayout:'users_header'}));


// gig routes
app.use('/gigs',require('./routes/gigs'));
const PORT = process.env.PORT || 4000;


//linking to our database connection
const db = require('./config/database');
//test db connection
db.authenticate()
.then(()=>console.log('database connected successfully'))
.catch(err=>console.log('cannot connect to database'))



app.listen(PORT, console.log(`app running at port ${PORT}`));
