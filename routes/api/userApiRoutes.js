const router = require('express').Router();
const userController = require('../../controller/userController');
const passport = require('passport');

// ROUTE TO AUTH USER
router.get('/currentUser', passport.authenticate('jwt', { session: false }), userController.findUser);

// GET USERS
router.route('/').get(userController.findAll);

// CHECKS TO SEE IF USER IS LOGGED IN UPON INITIAL LOAD IN
isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
        // IF NOT LOGGED IN REDIRECT TO HOME PAGE
    }
    res.redirect('/');
};

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;