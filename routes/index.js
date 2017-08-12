var express = require('express');
var router = express.Router();

var db = require('../controllers/queries');

router.get('/api/clients', db.getAllClients);
/*
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Reims App' });
});

module.exports = router;
