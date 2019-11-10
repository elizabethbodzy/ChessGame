require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const PORT = process.env.PORT || 3001;
const app = express();

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// SENDING EVERY OTHER REQUEST TO THE REACT APP AND DEFINE ANY API ROUTES BEFORE THIS RUNS
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// CONNECT TO THE MONGO DATABASE
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chess_game', { useNewParser: true }, function (err) {
    console.log('connected to mongo database');
});

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 2592000000,
        httpOnly: false
    }
}));

// INIT PASSPORT AUTH
app.use(passport.initialize());
app.use(passport.session());

// ENABLE CORS SO BROWSERS DO NOT BLOCK REQUESTS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
