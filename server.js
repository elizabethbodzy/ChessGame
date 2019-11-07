const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
// var socket = require("socket.io");
var http = require('http').Server(app);

const io = require('socket.io')(http);

var db = require('./model');

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

// var syncOptions = { force: false};

// if (process.env.NODE_ENV === "test") {
//     syncOptions.force = true;
// }

// SENDING EVERY OTHER REQUEST TO THE REACT APP AND DEFINE ANY API ROUTES BEFORE THIS RUNS
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// CONNECT TO THE MONGO DATABASE
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chess_game', { useNewParser: true }, function (err) {
    console.log('connected to mongo database');
});



io.on("connection", function (socket) {
    console.log("Made socket connection", socket.id);

    socket.on("chat", function (data) {
        io.sockets.emit("chat", data);
    });

    socket.on("typing", function (data) {
        socket.broadcast.emit("typing", data);
    });
});

io.listen(8000);

// START THE SERVER
// db.sequelize.sync(syncOptions).then(function () {
app.listen(PORT, () => {
    console.log(`==> 🌎  API Server now listening on PORT ${PORT}! `,

    );
});




