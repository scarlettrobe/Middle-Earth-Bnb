const express = require('express');
const router = express.Router();
const { Spot, SpotImage, User, Review, ReviewImage } = require('../../db/models')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
// const { restoreUser } = require('../../utils/auth');
// const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true })
        .isInt({ min: 1, max: 5 })
        .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors,

]

router.get('/current', requireAuth, async (req, res) => {
    const { user } = req;
    let reviews = await Review.findAll({
        where: {
            userId: user.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Spot,
                attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price'],
                include: [
                    {
                        model: SpotImage,
                        attributes: ['id', 'url', 'preview']
                    }
                ]
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            }
        ]
    })

    let Reviews = []

    if (reviews) { //turn each review into a json object
        for (let review of reviews) {
            review = review.toJSON()
            Reviews.push(review)
        }
    }

    for (let review of Reviews) {
        for (let image of review.Spot.SpotImages) { //now we want to extract the image that is the preview image
            if (image.preview === true) {
                review.Spot.previewImage = image.url
                delete review.Spot.SpotImages

            }
        }
    }



    res.json({ Reviews })
})

//add an image to a review based on the reviews id
router.post('/:reviewId/images', requireAuth, async (req, res, next) => {
    let { user } = req;
    let id = req.params.reviewId
    let review = await Review.findByPk(id)
    let { url } = req.body

    if (!review) {
        return res.status(404).json({
            "message": "Review couldn't be found"
        })
    }

    if (user.id !== review.userId) {
        return res.status(404).json({
            "message": "You are not authorized to add an image."
        })
    }

    let reviewImagesExisting = await ReviewImage.findAll({
        where: {
            reviewId: review.id
        }
    })

    if (reviewImagesExisting.length >= 10) {
        return res.status(404).json({
            "message": "Maximum number of images for this resource was reached"
        })
    }

    let newImage = await ReviewImage.create({
        url,
        reviewId: review.id,
    })

    res.json({ id: newImage.id, url: newImage.url })
})

//edit a review
router.put('/:reviewId', requireAuth, validateReview, async (req, res, next) => {
    let { user } = req;
    let id = req.params.reviewId;
    let { review, stars } = req.body
    let reviewFound = await Review.findByPk(id)

    if (!user.id === review.userId) {
        return res.status(401).json({ "message": "You are not authorized." })
    }

    if (!reviewFound) {
        return res.status(404).json({
            "message": "Review couldn't be found"
        })
    }

    reviewFound.review = review
    reviewFound.stars = stars

    await reviewFound.save()
    res.json(reviewFound)

})

router.delete('/:reviewId', requireAuth, async (req, res) => {
    let { user } = req
    let id = req.params.reviewId;
    let review = await Review.findByPk(id)

    if (!review) {
        res.status(404).json({
            "message": "Review couldn't be found"
        })
    }

    if (user.id === review.userId) {
        await review.destroy()
        res.json({
            "message": "Successfully deleted"
        })
    }
    else {
        return res.status(404).json({
            "message": "You are not authorized to delete this booking."
        })
    }
})

module.exports = router;
