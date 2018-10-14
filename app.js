const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const socketIo = require('socket.io');


require('dotenv').config();

var app = express();

// Socket.io
var io = socketIo();
app.io = io;

app.use(cors());

app.use(logger('dev'));

app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}));

app.use(bodyParser.text({ limit: '50mb' }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use('/api', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index.route'));

let connectionString = 'mongodb://' + process.env.DATABASE_USERNAME + ':' + process.env.DATABASE_PASSWORD + '@' + process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT + '/' + process.env.DATABASE_NAME;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
}, function(error) {
    if (error) {
        console.log('Error connecting to mongodb:', error);
        process.exit();
    }

    io.on('connection', function(client) {
        console.log('Nouveau client connecté');
    });

    app.use('/api', require('./routes/api.route')(io));

    console.log('Successful connection to the database');
});

console.log('The server is running');


module.exports = app;
