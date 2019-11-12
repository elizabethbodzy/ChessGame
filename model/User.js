// REQUIRING MONGOOSE
const mongoose = require('mongoose');

// CREATING A SCHEMA CLASS USING MONGOOSE'S SCHEMA METHOD
var Schema = mongoose.Schema;

// CREATING THE USER SCHEMA WITH OUR SCHEMA CLASS
var userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    }, 

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    authMethod: {
        type: String
    },

    socialID: {
        type: String
    },

    password: {
        type: String,
        required: true,
        unique: true,
        validate: [
            function(input) {
                return input.length >= 6;
            },
            'Password must be at least 6 characters'
        ]
    },

    rating: {
        type: Number,
        default: 500
    },

    image: String,

    savedGames: {
        type: Array
    }
});

// CREATING THE USER MODEL USING THE USERSCHEMA
const User = mongoose.model('User', userSchema);

// EXPORTING THE USER MODEL
module.exports = User;