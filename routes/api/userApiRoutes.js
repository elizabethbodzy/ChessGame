const router = require('express').Router();
const userController = require('../../controller/userController');
const passport = require('passport');

// ROUTE TO AUTH USER
router.get('/currentUser', passport.authenticate('jwt', { session: false }), userController.findUser);

// GET USERS
router.route('/').get(userController.findAll);

module.exports = router;