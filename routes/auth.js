const express = require('express');
const router = require('express').Router();
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../model/User');

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        const currentUser = req.session.passport.user;
        console.log(currentUser);

        User.findOne({ _id: currentUser })
            .then(dbUser => {
                const user = {
                    logginIn: true,
                    userName: dbUser.userName,
                    email: dbUser.email
                }
                console.log(user);
                res.json(user);
            });
    } else {
        const user = {
            logginIn: false,
            userName: '',
            email: ''
        }
        res.json(user);
    }
});

// LOCAL AUTH SIGN UP
router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
            console.log(err);
            return next(err);
        }

        if (!user) {
            console.log('Not a User');
            return res.send('Please re-enter your email and password');
        }

        req.login(user, (err) => {
            if (err) {
                console.log('auth error');
                return next(err);
            }

            res.cookie('userName', req.user.userName);
            res.cookie('email', req.body.email);
            res.cookie('user_id', req.user.id);
            console.log('confirm');
            return res.redirect('/');
        })
    })(req, res, next);
});

// LOCAL AUTH SIGN IN
router.post('/signin', (req, res, next) => {
    passport.authenticate('local-signin', (err, user, info) => {
        if (err) {
            console.log(err);
            return next(err);
        }

        if (!user) {
            console.log('not a user');
            req.flash('notify', 'This is a text notification.');
            return res.send('Please re-enter your email and password');
        }

        req.login(user, (err) => {
            if (err) {
                return next(err);
            }

            res.cookie('userName', user[0].userName);
            res.cookie('email', user[0].email);
            res.cookie('user_id', user[0]._id);
            var userI = { username: user[0].userName, email: user[0].email };
            return res.json(userI);
        })
    })(req, res, next);
});

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err)
        }

        res.clearCookie('user_id');
        res.clearCookie('userName');
        res.clearCookie('email');
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

module.exports = router;