require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');

// var db = require('./model');

const PORT = process.env.PORT || 3001;
// const router = require('./router');
<<<<<<< HEAD
=======
// hello
>>>>>>> master
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// app.use(router);
app.use(cors());


// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// PASSPORT CONFIG
require("./config/passport")(passport)


// SENDING EVERY OTHER REQUEST TO THE REACT APP AND DEFINE ANY API ROUTES BEFORE THIS RUNS
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// CONNECT TO THE MONGO DATABASE
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chess_game', { useNewParser: true }, function (err) {
    console.log('connected to mongo database');
});



io.on("connection", (socket) => {
    // console.log('We have a new connection!!');
    socket.on('join', ({name, room}, callback) => {
        // console.log(name, room);

        const { error, user } = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});
       

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

        callback();

    })

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message});

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.`})
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

        }
    })

});


// START THE SERVER
// db.sequelize.sync(syncOptions).then(function () {
app.listen(PORT, () => {
    console.log(`==> 🌎  API Server now listening on PORT ${PORT}! `,

    );
});




