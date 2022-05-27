// backend/routes/api/index.js
// Node Modules 
const asyncHandler = require('express-async-handler');


// Local Modules 
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');


const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');



router.use('/session', sessionRouter);

router.use('/users', usersRouter);













module.exports = router;