const BestPlaceModel = require('../models/bestPlace');

exports.newPost = newPlace => BestPlaceModel.create(newPlace);

exports.getAll = () => BestPlaceModel.find();

exports.editPlace = (id, editedPost) => BestPlaceModel.findByIdAndUpdate(id, editedPost);
;
exports.deletePlace = (id) => BestPlaceModel.findByIdAndDelete(id);