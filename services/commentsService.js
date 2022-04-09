const CommentsModel = require('../models/comment');

exports.newComment = comment => CommentsModel.create(comment);

exports.getAll = () => CommentsModel.find();

exports.deleteComment = id => CommentsModel.findByIdAndDelete(id);