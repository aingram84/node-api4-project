const express = require('express');

const User = require('./model');

const expressRouter = express.Router();

expressRouter.get('/', (req, res) => {
    User.find()
        .then(found => {
            res.json(found)
        }).catch(
            err => {
                res.status(500).json({
                    message: "The user's information could not be retrieved",
                    error: err.message
                })
            }
        )
})

expressRouter.post('/api/register', (req, res) => {
    const user = req.body;
    if (!user.username || !user.password) {
        res.status(400).json({
            message: "Please provide username and password for the user"
        })
    } else {
      User.insert(user)
        .then(createdUser => {
            res.status(201).json(createdUser)
        })
        .catch(err => {
            res.status(500).json({
                message: 'error creating user',
                err: err.message,
                stack: err.stack,
            })
        })
    }
})

expressRouter.post('/api/login', (req, res) => {
    const user = req.body;
    if (!user.username || !user.password) {
        res.status(400).json({
            message: "Please provide username and password for the user"
        })
    } else {
      res.json({
          message: "Welcome!"
      })
        .catch(err => {
            res.status(500).json({
                message: 'error login user',
                err: err.message,
                stack: err.stack,
            })
        })
    }
})

module.exports = expressRouter;