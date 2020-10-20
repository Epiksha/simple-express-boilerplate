const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },

    password: {
        type: String
    },

    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;