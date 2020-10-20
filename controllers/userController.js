'use strict';

require('../models/userModel.js');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('mongoose').model('User');

// Register
const register = (req, res) => {
    const newUser = new User(req.body);

    newUser.password = bcrypt.hashSync(req.body.password, 10);

    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.password = undefined;

            return res.json(user);
        }
    });
};

// Login
const login = (req, res) => {
    User.findOne(
        { email: req.body.email },
        (err, user) => {
            if (err) {
                throw err;
            }

            if (!user || !bcrypt.compare(req.body.password, user.password)) {
                return res.status(401).json({
                    message: 'Authentication failed. Invalid email or password.'
                });
            }

            const token = jwt.sign({
                email: user.email,
                fullName: user.fullName,
                _id: user._id
            }, 'boilerplateToken')
            
            return res.json({ token });
        }
    );
};

// Other middleware
const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!!' });
    }
};

const profile = (req, res, next) => {
    if (req.user) {
        res.send(req.user);

        next();
    }
    else {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
};

module.exports = {
    register,
    login,
    loginRequired,
    profile
};