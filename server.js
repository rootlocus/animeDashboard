const express = require('express');
const hbs = require('hbs');

var app = express();

// add middleware here
app.use(express.static(__dirname +'/public'));
// add hbs middleware
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

//routes

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page'
  });
});

// Run server on port
app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});
