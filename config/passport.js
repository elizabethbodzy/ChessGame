const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../model/User');
const secret = require('./secret');

module.exports = (passport) => {
    const opts = {};

    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = secret.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({ email: jwt_payload.email }, (err, user) => {
            if (err) {
                console.log(err);
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};