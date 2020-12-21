var express = require('express');
var router = express.Router();
/* new */
const crypto = require('crypto');
const connection = require('../db');
const authCheck = require('../authCheck');

/* GET users listing. */
/* new */
router.get('/create', authCheck, function(req, res, next){
  res.render('todo/create', {error: ''});
});

router.get('/update', authCheck, function(req, res, next){
  res.render('todo/update', {error: ''});
});

router.get('/top', authCheck, function(req, res, next){
    res.render('todo/top', {error: ''});
  });

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/:userId', function(req, res, next) {
//   //res.send('respond with a resource');
//   res.send(req.params.userId);
// });

// /* new */
// router.post('/create', authCheck, async function(req, res, next){
//   const newUser = {
//     username: req.body.username,
//     password: crypto.createHash('sha256').update(req.body.password).digest('hex'),
//   };
//   console.log(newUser);
//   (await connection)
//   .getRepository('users_test')
//   .save(newUser)
//   .then((savedUser) => {
//     console.log(savedUser);
//     res.redirect('/');
//   })
//   .catch(error => {
//     console.log(error)
//     res.render('users/create', { error });
//   });
// })

// router.post('/top', authCheck, async function(req, res, next){
//   const deleteUser = {
//     username: req.body.username,
//     password: crypto.createHash('sha256').update(req.body.password).digest('hex'),
//   };
//   console.log(deleteUser);
//   (await connection)
//   .getRepository('users_test')
//   .delete({username: deleteUser.username, password: deleteUser.password})
//   .then((savedUser) => {
//     console.log(savedUser);
//     req.logout();
//     res.redirect('/login');
//   })
//   .catch(error => {
//     console.log(error)
//     res.render('users/delete', { error });
//   });
// })

// router.post('/update', authCheck, async function(req, res, next){
//   const updateUser = {
//     username: req.body.username,
//     password: crypto.createHash('sha256').update(req.body.password).digest('hex'),
//   };
//   console.log(updateUser);
//   (await connection)
//   .getRepository('users_test')
//   .update({username: updateUser.username}, {password: updateUser.password})
//   .then((savedUser) => {
//     console.log(savedUser);
//     req.logout();
//     res.redirect('/login');
//   })
//   .catch(error => {
//     console.log(error)
//     res.render('users/update', { error });
//   });
// })

module.exports = router;
