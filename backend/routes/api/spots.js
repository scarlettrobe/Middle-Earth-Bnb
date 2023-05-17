const express = require('express');
const router = express.Router();
const { Spot, SpotImage, User, Review, ReviewImage, Booking } = require('../../db/models')
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require('sequelize');


//this wil check if your post a spot/create a spot is valid
const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State ks required.'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required.'),
    check('lat')
        .isFloat({ min: -90, max: 90 })
        .withMessage('Latitude is not valid.'),
    check('lng')
        .isFloat({ min: -180, max: 180 })
        .withMessage('Longitude is not valid.'),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name.')
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Description is required.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price per day is required.'),
    handleValidationErrors,
];


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

const validateDate = [ //not advisable for checking endate is before or on startDate
    check('startDate')
        .exists({ checkFalsy: true })
        .withMessage('Start date must exist'),
    check('endDate')
        .exists({ checkFalsy: true })
        .withMessage('End date must exist'),
    handleValidationErrors
]

const validateQuery = [
    check('page')
        .optional()
        .isInt({ min: 1 })
        .withMessage("Page must be greater than or equal to 1"),
    check('size')
        .optional()
        .isInt({ min: 1 })
        .withMessage("Size must be greater than or equal to 1"),
    check('minLat')
        .optional()
        .isFloat({ min: -90, max: 90 })
        .withMessage('Latitude is not valid.'),
    check('maxLat')
        .optional()
        .isFloat({ min: -90, max: 90 })
        .withMessage('Latitude is not valid.'),
    check('minLng')
        .optional()
        .isFloat({ min: -180, max: 180 })
        .withMessage('Longitude is not valid.'),
    check('maxLng')
        .optional()
        .isFloat({ min: -180, max: 180 })
        .withMessage('Longitude is not valid.'),
    check('minPrice')
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Minimum price must be greater than or equal to 0"),
    check('maxPrice')
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Maximum price must be greater than or equal to 0"),
    handleValidationErrors

]
//get all spots and add the preview image + add pagination and search options

router.get('/', validateQuery, async (req, res, next) => {
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query
    const where = {};
    let pagination = {};

    if (!page || page > 10) page = 1;
    if (!size || size > 20) size = 20;

    pagination.limit = size;
    pagination.offset = size * (page - 1)

    if (minLat && !isNaN(minLat)) {
        where.lat = { [Op.gt]: parseFloat(minLat) } //all should be greater than  where: {lat: {[Op.gt]: minLat} }
    }

    if (maxLat && !isNaN(maxLat)) {
        where.lat = { [Op.lt]: parseFloat(maxLat) }
    }
    if (minLng && !isNaN(minLng)) {
        where.lng = { [Op.gt]: parseFloat(minLng) }
    }

    if (maxLng && !isNaN(maxLng)) {
        where.lng = { [Op.lt]: parseFloat(maxLng) }
    }

    if (minPrice && !isNaN(minPrice) && minPrice >= 0) {
        where.price = { [Op.gt]: parseFloat(minPrice) }
    }

    if (maxPrice && !isNaN(maxPrice) && maxPrice >= 0) {
        where.price = { [Op.lt]: parseFloat(maxPrice) }
    }

    let Spots = await Spot.findAll({
        raw: true,
        where,
        ...pagination
    })

    for (let i = 0; i < Spots.length; i++) {
        let previewUrl = await SpotImage.findOne({
            attributes: ['url'],
            where: {
                spotId: Spots[i].id,
                preview: true
            }
        })
        if (previewUrl) { // added an if statement to check if previewUrl is truthy
            Spots[i].previewImage = previewUrl.url;
        }
    }


    for (let i = 0; i < Spots.length; i++) { //for each spot get all the stars for that spot
        let sum = 0; //eventually you want to add to this sum

        let allRatings = await Review.findAll({ //here you get all the stars
            attributes: ['stars'],
            where: {
                spotId: Spots[i].id
            }
        })

        let reviewNum = allRatings.length

        if (reviewNum > 0) {
            for (let j = 0; j < allRatings.length; j++) {
                sum += allRatings[j].stars
            }
            Spots[i].avgRating = (sum / reviewNum).toFixed(2) //prevent from getting long decimals
        }
    }

    res.json({ Spots, page, size })
})


//get all the spots that belong to current logged in user
router.get('/current', requireAuth, async (req, res, next) => {

    const { user } = req;

    let Spots = await Spot.findAll({
        where: {
            ownerId: user.id
        },
        raw: true
    })

    for (let i = 0; i < Spots.length; i++) {
        let previewUrl = await SpotImage.findOne({
            attributes: ['url'],
            where: {
                spotId: Spots[i].id,
                preview: true
            }
        })
        if (previewUrl) {
            Spots[i].previewImage = previewUrl.url;

        }
    }

    for (let i = 0; i < Spots.length; i++) { //for each spot get all the stars for that spot
        let sum = 0; //eventually you want to add to this sum

        let allRatings = await Review.findAll({ //here you get all the stars
            attributes: ['stars'],
            where: {
                spotId: Spots[i].id
            }
        })

        let reviewNum = allRatings.length

        if (reviewNum > 0) {
            for (let j = 0; j < allRatings.length; j++) {
                sum += allRatings[j].stars
            }
            Spots[i].avgRating = (sum / reviewNum)
        }

    }
    res.json({ Spots })
})


//get details of a spot from an id

router.get('/:spotId', async (req, res, next) => {
    let spotId = req.params.spotId;

    let spotsById = await Spot.findOne({
        where: {
            id: spotId
        },
        include: [
            { model: SpotImage, attributes: ['id', 'url', 'preview'] },
            { model: User, as: 'Owner', attributes: ['id', 'firstName', 'lastName'] },
        ]
    })

    if (spotsById) {
        //here we add the two new properties

        spotsById = spotsById.toJSON()
        let sum = 0; //eventually you want to add to this sum

        let allRatings = await Review.findAll({ //here you get all the stars for each review for the spot with given id
            attributes: ['stars'],
            where: {
                spotId: spotsById.id
            },
            raw: true
        })

        let reviewNum = allRatings.length

        for (let j = 0; j < allRatings.length; j++) {
            sum += allRatings[j].stars
        }

        spotsById.numReviews = reviewNum
        spotsById.avgStarRating = (sum / reviewNum)


        res.json(spotsById)
    } else {
        res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

})


//create a spot
router.post('/', requireAuth, validateSpot, async (req, res, next) => {
    // try {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.create({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
        ownerId: req.user.id,
    });

    res.status(201).json(spot);
}
);

//add an image to a spot based on the spots id

router.post('/:spotId/images', requireAuth, async (req, res, next) => {
    let { url, preview } = req.body;
    let id = req.params.spotId;

    let spot = await Spot.findByPk(id);

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        });
    }

    let newImg = await SpotImage.create({
        spotId: spot.id,
        url,
        preview
    });

    res.status(200).json(newImg);
});

//edit a spot
router.put('/:spotId', requireAuth, validateSpot, async (req, res, next) => {
    let { address, city, state, country, lat, lng, name, description, price } = req.body;
    const { user } = req
    let id = req.params.spotId;
    let spotToEdit = await Spot.findByPk(id)

    if (!spotToEdit) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        });
    }

    if (spotToEdit.ownerId !== user.id) {
        return res.status(401).json({
            "message": "You are not authorized to edit this spot"
        });
    }
    spotToEdit.address = address
    spotToEdit.city = city
    spotToEdit.state = state
    spotToEdit.country = country
    spotToEdit.lat = lat
    spotToEdit.lng = lng
    spotToEdit.name = name
    spotToEdit.description = description
    spotToEdit.price = price

    await spotToEdit.save()
    res.json(spotToEdit)
})

router.delete(':spotId', requireAuth, async (req, res) => {
    const { user } = req
    const id = req.params.spotId
    let spot = await Spot.findByPk(id)

    if (!spotToEdit) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        });
    }

    if (spotToEdit.ownerId !== user.id) {
        return res.status(401).json({
            "message": "You are not authorized to edit this spot"
        });
    }

    await spot.destroy()
    res.json({
        "message": "Successfully deleted"
    })
})

//get reviews by spot id

router.get('/:spotId/reviews', async (req, res, next) => {
    let id = req.params.spotId;
    let spot = await Spot.findByPk(id)

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    let Reviews = await Review.findAll({
        where: {
            spotId: spot.id
        },
        include: [
            { model: User, attributes: ['id', 'firstName', 'lastName'] },
            { model: ReviewImage, attributes: ['id', 'url'] }

        ]
    })

    res.json({ Reviews })

})

//create a review for a spot
router.post('/:spotId/reviews', requireAuth, validateReview, async (req, res, next) => {
    let id = req.params.spotId;
    let { user } = req
    let { review, stars } = req.body
    let spot = await Spot.findByPk(id)

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    let reviewExists = await Review.findOne({
        where: {
            userId: user.id,
            spotId: spot.id
        }
    })




    if (reviewExists) {
        return res.status(404).json({
            "message": "User already has a review for this spot"
        })
    }

    let newReview = await Review.create({
        review,
        stars,
        userId: user.id,
        spotId: spot.id
    })

    res.json(newReview)
})

//get all bookings for a spot based on the spots id
router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
    let id = req.params.spotId;
    let { user } = req
    let spot = await Spot.findByPk(id)

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }


    if (user.id === spot.ownerId) { //if you are the owner do this

        let allBookings = await Booking.findAll({
            where: { //if you are the owner you want to get everyone that is booking with the spot id provided
                spotId: spot.id
            },
            include: { model: User, attributes: ['id', 'firstName', 'lastName'] }
        })

        if (allBookings.length <= 0) { //if no bookings exist throw an error
            return res.status(404).json({
                "message": "Booking couldn't be found"
            })
        }

        res.json({ allBookings })

    } else { //if you don't own the spot then you want to get the bookings for yourself for that spot
        let Bookings = await Booking.findAll({
            where: {
                userId: user.id,
                spotId: spot.id
            },
            attributes: ['spotId', 'startDate', 'endDate']
        })

        if (Bookings.length <= 0) { //if no bookings exist throw an error
            return res.status(404).json({
                "message": "Booking couldn't be found"
            })
        }

        res.json({ Bookings })
    }
})

//post edit a booking for a spot id

router.post('/:spotId/bookings', requireAuth, validateDate, async (req, res, next) => {
    const { user } = req;
    let id = req.params.spotId;
    let spot = await Spot.findByPk(id);
    let { startDate, endDate } = req.body;

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    //look for the bookings that have either the same start date or have

    const overlappingBooking = await Booking.findOne({
        where: {
            spotId: id,
            [Op.or]: [
                {
                    startDate: {
                        [Op.between]: [startDate, endDate]
                    }
                },
                {
                    endDate: {
                        [Op.between]: [startDate, endDate]
                    }
                }
            ]
        }
    });

    if (new Date(endDate) <= new Date(startDate)) {
        return res.status(400).json({
            "message": "Bad Request",
            "errors": {
                "endDate": "endDate cannot be on or before startDate"
            }
        });
    }

    if (overlappingBooking) {
        return res.status(403).json({
            "message": "Sorry, this spot is already booked for the specified dates",
            "errors": {
                "startDate": "Start date conflicts with an existing booking",
                "endDate": "End date conflicts with an existing booking"
            }
        });
    }

    if (user.id != spot.ownerId) {
        let newBooking = await Booking.create({
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            userId: user.id,
            spotId: spot.id
        })

        res.json(newBooking) //here we send all the boookings for this spot

    } else {
        res.status(403).json({ message: "You can't book your own place" })
    }
})

//delete a booking
router.delete('/:spotId', requireAuth, async (req, res) => {
    let { user } = req;
    let id = req.params.spotId;
    let spot = await Spot.findByPk(id)

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    if (user.id === spot.ownerId) {
        await spot.destroy()
        res.json({
            "message": "Successfully deleted"
        })
    } else {
        return res.status(404).json({
            "message": "You are not authorized to delete this booking."

        })
    }
})

module.exports = router;
