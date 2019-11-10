require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../model/User');
const bcrypt = require('bcrypt-nodejs');

// PASSPORT SESSION SETUP
passport.serializeUser((user, done) => {
    console.log(user);
    done(null, { _id: user.id });
});

// USED TO DESERIALIZE THE USER
passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, 'userName', (err, user) => {
        console.log(user);
        done(null, user);
    })
});

// PASSPORT CONFIGURATION FOR LOCAL SIGN UP
passport.use('local-signup', new LocalStrategy({
    userNameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},

    (req, email, password, done) => {
        process.nextTick(() => {
            User.find({
                email: email
            })
                .then((user) => {
                    if (user.length > 0) {
                        console.log('signupMessage', 'That email is already taken.');
                        return done(null, false, { message: 'That email is already taken.' });
                    } else {
                        const userPassword = generateHash(req.body.password);
                        const newUser = {
                            userName: req.body.userName,
                            email: req.body.email,
                            password: userPassword,
                            authMethod: 'local'
                        }

                        User.create(newUser)
                            .then((dbUser, created) => {
                                if (!dbUser) {
                                    return done(null, false);
                                } else {
                                    return done(null, dbUser);
                                }
                            });
                    }
                });
        })
    }));

// PASSPORT CONFIGURATION FOR LOCAL SIGN IN
passport.use('local-signin', new LocalStrategy({
    userNameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},

    (req, email, password, done) => {
        const isValidPassword = (userpass, password) => {
            return bcrypt.compareSync(password, userpass);
        }

        User.find({
            email: email
        })
            .then((user) => {
                if (user[0].length <= 0) {
                    return done(null, false, { message: 'Email does not exist.' });
                }

                if (!isValidPassword(user[0].password, password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                return done(null, user);
            })
            .catch((err) => {
                console.log(err);
                return done(null, false, { message: 'Something went wrong with your Sign In' });
            });
    }));

// GENERATE HASH FOR PASSWORD
generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};