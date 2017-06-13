var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.render('about', { title: 'Express test' });
});
router.get('/test 2', function(req, res, next) {
  res.render('about', { title: 'Express test2' });
});

module.exports = router;
