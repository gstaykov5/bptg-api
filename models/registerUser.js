const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    password: {
        type: String,
        required: true,
        validate: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        maxlength: 40
    },
    confirmPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    registrationDate: {
        type: String,
        required: true
    },
    lastModifieDate: {
        type: String,
        required: true
    },
    acceptTerms: {
        type: Boolean,
        required: true
    },
    favorites: [
        String
    ],
    country: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false
    },
})

const RegisterUser = mongoose.model('RegisterUser', UserSchema);

module.exports = RegisterUser;