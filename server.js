const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const parser = require('body-parser');
var blogarrayTitle = ["Coronavirus: Testing rolled out for frontline NHS staff",
"‘My dream home hangs in the balance’"
];
var sliceddesc = ["Workers with symptoms and those who live with people who have symptoms will be checked . ", "The UK housing market has almost ground to a halt after people were "];
var blogsarraysdesc = [
"Workers with symptoms and those who live with people who have symptoms will be checked - starting with hundreds of critical care doctors and nurses. Tests for A&E staff, paramedics and GPs are expected to follow, and later social care staff will be tested.The number of people who have died with the virus in the UK rose by 181 to 759 on Friday, with 14,543 confirmed cases.Until now, only patients in hospital with flu-like symptoms were being routinely tested but this had led to concerns that without testing, many health and care workers would not know whether they were safe to return to work.",
"The UK housing market has almost ground to a halt after people were advised to stay at home to limit the spread of coronavirus.The advice from the government is to postpone a move if at all possible.However, some people are so close to moving they would still like to go ahead with it.Rachel Pattinson, 32, and her husband Paul, 37, were due to exchange and complete their purchase of a house in County Durham on Tuesday 24 March.But the night before they were due to move, Prime Minister Boris Johnson announced wide-ranging restrictions on movement."
];
var blogdate = ["3/28/2020", "2/21/2020"
];


app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  var x ="";
  for (var i = 0; i < blogarrayTitle.length; i++) {

    x[i];
  }

  res.render('pages/index', {title:blogarrayTitle, desc: sliceddesc, date: blogdate, but: x[i] });
});

app.get('/post', function(req, res){
  res.render('pages/pageview', {title:blogarrayTitle, desc: blogsarraysdesc, date: blogdate });
});


app.get('/add', function(req, res){
  res.render('pages/add');
})


app.post('/add', function(req, res){
  var TITLE = req.body.title;
  var DESCRIPTION = req.body.descr;
  var DATE = req.body.date;
  var sliceddata = DESCRIPTION.slice(0, 100);
  blogarrayTitle.push(TITLE);
  blogsarraysdesc.push(DESCRIPTION);
  blogdate.push(DATE);


  sliceddesc.push(sliceddata);
  res.redirect('/');


})


app.listen(port, function(req, res){
  console.log("server is up and running on port " + port);
})
