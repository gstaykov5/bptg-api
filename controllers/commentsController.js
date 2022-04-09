const router = require('express').Router();
const commentsService = require('../services/commentsService');

router.post('/comment', async (req, res) => {
    const newComment = req.body;

    try {
        const comment = await commentsService.newComment(newComment);

        res.status(200).json({
            comment: comment,
        })
    } catch (error) {
        res.json({
            error: error,
            message: error.message
        })
    }
})

router.get('/comment', async (req, res) => {
    try {
        const getAllComments = await commentsService.getAll();

        res.status(200).json({
            comment: getAllComments,
        })
    } catch (error) {
        res.json({
            error: error,
            message: error.message
        })
    }
})

router.delete('/comment/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const comment = await commentsService.deleteComment(id);

        res.status(200).json({
            comment: comment,
        })
    } catch (error) {
        res.json({
            error: error,
            message: error.message
        })
    }
})

module.exports = router;
