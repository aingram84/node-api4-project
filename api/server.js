const express = require('express');
const cors = require('cors');


const usersRouter = require('./users/users-router');

const server = express();
server.use(express.json());
server.use(cors());
server.use('/api/users', usersRouter);
server.use('*', (req, res) => {
    console.log("* req res");
    res.status(404).json({
        message: "not found"
    })
})
module.exports = server;