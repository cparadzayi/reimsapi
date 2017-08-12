var express = require('express');
var router = express.Router();

var db = require('../controllers/queries');

router.get('/api/clients', db.getAllClients);
router.get('/api/clients', db.getOneClient);
router.get('/api/clients', db.changeOneClient);
router.get('/api/clients', db.deleteOneClient);
 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Reims App' });
});

module.exports = router;
