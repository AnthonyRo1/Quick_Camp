const express= require('express');
const asyncHandler = require('express-async-handler');

const {setTokenCookie, requireAuth} = require('../../utils/auth');
const {User} = require('../../db/models');

// /api/users
const router = express.Router();





// sign up user 
router.post('/', asyncHandler( async(req, res) => {
  const {email, username, password} = req.body;

  const user = await User.signup({ email, username, password});

  await setTokenCookie(res, user);

  return res.json({
    user
  })

}))

module.exports = router;