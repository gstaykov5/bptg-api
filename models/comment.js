const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        require: true
    },
    authorId: {
        type: String,
        require: true,
    },
    placeId: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    }
})

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;