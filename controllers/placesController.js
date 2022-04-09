const router = require('express').Router();
const bestPlaceService = require('../services/bestPlaceService');

router.post('/place', async (req, res) => {
    const newPlace = req.body;
    try {
        const place = await bestPlaceService.newPost(newPlace);
    
        res.status(200).json({
            place: place,
        });
    } catch (error) {
        console.log(error.message)
        res.json({
            type: error,
            message: error.message
        })
    }
})

router.get('/place', async (req, res) => {
    try {
        const allPlaces = await bestPlaceService.getAll();
        
        res.status(200).json({
            places: allPlaces,
        })
    } catch (error) {
        res.json({
            error: error,
            message: error.message
        })
    }
})

module.exports = router;
