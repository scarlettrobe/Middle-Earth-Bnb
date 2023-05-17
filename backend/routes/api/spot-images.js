const express = require('express');
const router = express.Router();
const { Spot, SpotImage, User, Review, ReviewImage, Booking } = require('../../db/models')
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require('sequelize')

router.delete('/:imageId', requireAuth, async (req, res, next) => {
    let id = req.params.imageId;
    let image = await SpotImage.findByPk(id)

    const { user } = req

    if (!image) {
        return res.status(404).json({
            "message": "Spot Image couldn't be found"
        })
    }

    let spot = await Spot.findByPk(image.spotId)

    if (user.id !== spot.ownerId) {
        return res.status(404).json({
            "message": "You are not authorized to delete this image."
        })
    }

    await image.destroy()
    res.json({
        "message": "Successfully deleted"
    })
})

module.exports = router;
