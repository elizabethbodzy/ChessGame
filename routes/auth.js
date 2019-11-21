const express = require('express');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const passport = require('passport');
const secret = require('../config/secret');
const User = require('../model/User');

// VALIDATING PASSWORD
const isValidPassword = (typedPassword, password) => {
    return bcrypt.compareSync(typedPassword, password);
};

// SIGN UP ROUTE
router.post('/signup', (req, res, next) => {
    console.log(req.body);
    User.find({ email: req.body.email })
        .then(user => {
            if (user.length > 0) {
                return res.status(409).json({ error: 'An account with that email already exists.' });
            }
            
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: err });
                    } else {
                        let newUser = {
                            userName: req.body.userName,
                            email: req.body.email,
                            password: hash
                        }
                        User.create(newUser)
                            .then(result => {
                                console.log(result);
                                res.status(201).json({ message: 'Sign up successful!' })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json(
                                    {
                                        message: 'Unable to create user!',
                                        error: err
                                    });
                            });
                    }
                })
        })
        .catch(err => console.log(err));
});

// SIGN IN ROUTE
router.post('/signin', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.json({ error: 'Please enter a valid email or password.'});
            } else {
                if (isValidPassword(req.body.password, user.password)) {
                    let token = jwt.sign(user.toJSON(), secret.secret);
                    res.json(
                        { 
                            success: true, 
                            user: user,
                            token: 'JWT ' + token 
                        })
                } else {
                    return res.json({ error: 'Please enter a vaild email or password.'});
                }
            }
        })
        .catch(err => console.log(err));
});

router.get('/signout');

module.exports = router;