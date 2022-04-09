const BestPlaceModel = require('../models/bestPlace');

exports.newPost = newPlace => BestPlaceModel.create(newPlace);

exports.getAll = () => BestPlaceModel.find();