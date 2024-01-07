const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    memorialAccount: {
        type: Boolean,
        required: true,
        default: false
    },
    missedPings: {
        type: Number,
        required: true,
        default: 0
    },
    nextPing: {
        type: Date,
        required: true
    },
    pingInterval: {
        type: Number,
        required: true
    },
    googleId: String,
    password: String
});

const User = mongoose.model('user',userSchema);

module.exports = User;