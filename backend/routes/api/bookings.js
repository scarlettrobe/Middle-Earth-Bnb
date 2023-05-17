const express = require('express');
const router = express.Router();
const { Spot, SpotImage, User, Review, ReviewImage, Booking } = require('../../db/models')
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require('sequelize')

router.get('/current', requireAuth, async (req, res, next) => {
    const { user } = req;
    let bookings = await Booking.findAll({
        attributes: ['id', 'spotId'],
        where: {
            userId: user.id
        },
        include: [
            {
                model: Spot,
                attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price'],
                include: [
                    {
                        model: SpotImage,
                        attributes: ['id', 'url', 'preview']
                    }
                ]
            }
        ]
    })

    let Bookings = []

    if (bookings) { //turn each booking into a json object
        for (let booking of bookings) {
            booking = booking.toJSON()
            Bookings.push(booking)
        }
    }

    for (let booking of Bookings) {
        for (let image of booking.Spot.SpotImages) { //now we want to extract the image that is the preview image
            if (image.preview === true) {
                booking.Spot.previewImage = image.url
                delete booking.Spot.SpotImages
            }
        }
    }



    res.json({ Bookings })
})

//edit a booking

router.put('/:bookingId', requireAuth, async (req, res) => {
    let { user } = req;
    let { startDate, endDate } = req.body;
    let id = req.params.bookingId;
    let booking = await Booking.findByPk(id)


    if (new Date(endDate) <= new Date(startDate)) {
        return res.status(400).json({
            "message": "Bad Request",
            "errors": {
                "endDate": "endDate cannot be on or before startDate"
            }
        });
    }

    if (!booking) {
        return res.status(404).json({
            "message": "Booking couldn't be found"
        })
    }

    let spot = await Spot.findByPk(booking.spotId) //get the spot the booking refers to

    if (booking.endDate < new Date()) {
        return res.status(403).json({
            "message": "Past bookings can't be modified"
        })
    }

    const overlappingBooking = await Booking.findOne({
        where: {
            spotId: spot.id,
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
            ],
            id: {
                [Op.not]: booking.id
            }
        }
    });

    if (overlappingBooking) {
        return res.status(403).json({
            "message": "Sorry, this spot is already booked for the specified dates",
            "errors": {
                "startDate": "Start date conflicts with an existing booking",
                "endDate": "End date conflicts with an existing booking"
            }
        });
    }


    if (user.id === booking.userId) {
        booking.startDate = new Date(startDate),
            booking.endDate = new Date(endDate)

        await booking.save()
        res.json(booking)
    } else {
        res.status(403).json({ message: "You are forbidden from changing this booking" })
    }



})

router.delete('/:bookingId', requireAuth, async (req, res) => {
    let { user } = req;
    let id = req.params.bookingId;
    let booking = await Booking.findByPk(id)

    if (!booking) {
        return res.status(404).json({
            "message": "Booking couldn't be found"
        })
    }

    if (booking.startDate <= new Date()) {
        return res.status(403).json({
            "message": "Bookings that have been started can't be deleted"
        })
    }

    let spot = await Spot.findByPk(booking.spotId)


    if (user.id === booking.userId || user.id === spot.ownerId) {
        await booking.destroy()
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
