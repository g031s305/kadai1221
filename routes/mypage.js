var express = require('express');
var router = express.Router();
const authCheck = require('../authCheck')

/* GET home page. */
router.get('/', authCheck, function(req, res, next){
  res.render('mypage', {user: req.user });
});

module.exports = router;