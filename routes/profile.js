var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
const context = {
  title: 'Profile',
  name: 'adriana',
  age: '14',
  position: 'student',
  hobbies: ['baloncesto','surfing','skateboarding','arte'],
}
   res.render('profile',context);
});

module.exports = router;
