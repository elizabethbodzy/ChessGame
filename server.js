const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// ADD API AND VIEW ROUTES
app.use(routes);

// SENDING EVERY OTHER REQUEST TO THE REACT APP AND DEFINE ANY API ROUTES BEFORE THIS RUNS
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// CONNECT TO THE MONGO DATABASE
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chess_game' , { useNewParser: true }, function(err) {
    console.log('connected to mongo database');
  }); 

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
