const mongoose = require('mongoose');

const BestPlace = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: false  
    },
    authorId: {
        type: String,
        required: true  
    },
    images: [
        {
            image : {
                type: String,
                required: true,
            }
        }
    ]
    
});

// userSchema.static.login

const Place = mongoose.model('BestPlaces', BestPlace);

module.exports = Place