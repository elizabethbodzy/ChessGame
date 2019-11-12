const mongoose = require('mongoose');
const db = require('../model/User');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chess_game');

const userSeed = [
    {
        userName: 'feeter',
        email: 'feeter@feeter.com',
        password: 'password'
    }
]

db.remove({})
    .then(() => {
        db.collection.insertMany(userSeed)
    })
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });