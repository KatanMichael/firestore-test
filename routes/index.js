var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


app.get('/addRandomUser', (request, response) =>
{
  var firstName = Math.random()*100;
  var age = Math.random()*100;
  return db.collection('users').add(
    {
      "FirstName" : firstName,
      "Age" : age
    }
  );
});

module.exports = router;
