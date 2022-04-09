const router = require('express').Router();

const usersController = require('../controllers/usersController');
const placesController = require('../controllers/placesController');
const commentsController = require('../controllers/commentsController');

router.use('/users', usersController);
router.use('/bestPlaces', placesController);
router.use('/placesComments', commentsController);

module.exports = router;