// backend/routes/api/index.js
// Node Modules 
const asyncHandler = require('express-async-handler');


// Local Modules 
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');


const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const campsiteRouter = require('./campsites.js');
const bookingsRouter = require('./bookings.js');
const reviewsRouter = require('./reviews.js');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/campsites', campsiteRouter);

router.use('/bookings', bookingsRouter);

router.use('/reviews', reviewsRouter);













module.exports = router;