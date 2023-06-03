// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");
const spotRouter = require('./spots.js')
const reviewRouter = require('./reviews.js')
const bookingRouter = require('./bookings.js')
const spotImageRouter = require('./spot-images.js')
const reviewImageRouter = require('./review-images.js')


router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotRouter) 

router.use('/reviews', reviewRouter) 

router.use('/bookings', bookingRouter)

router.use('/spot-images', spotImageRouter)

router.use('/review-images', reviewImageRouter)


module.exports = router;
