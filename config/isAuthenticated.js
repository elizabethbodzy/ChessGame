// THIS WILL RESTRICT THE ROUTES THAT REQUIRE SIGN IN AND REDIRECT THE USER TO THE SIGN IN PAGE IF NOT SIGNED IN WHEN THE USER INITIALLY VISITS THE SITE
module.exports = (req, res, next) => {
    if (req.user) {
        return next();
    }

    return res.redirect('/');
}