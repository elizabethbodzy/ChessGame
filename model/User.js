// REQUIRING MONGOOSE
var mongoose = require('mongoose');

// CREATING A SCHEMA CLASS USING MONGOOSE'S SCHEMA METHOD
var Schema = mongoose.Schema;

// CREATING THE USER SCHEMA WITH OUR SCHEMA CLASS
var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 

    email: {
        type: String,
        required: true,
        unique: true
    },

    rating: {
        type: Number,
        default: 500
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    image: String,

    savedGames: {
        type: Array
    }
});

// CREATING THE USER MODEL USING THE USERSCHEMA
var User = mongoose.model('User', userSchema);

// EXPORTING THE USER MODEL
module.exports = User;