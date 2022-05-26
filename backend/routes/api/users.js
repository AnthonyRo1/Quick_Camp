// Node Modules 
const express= require('express');
const asyncHandler = require('express-async-handler');
const {check} = require('express-validator');

// Local Modules 
const {setTokenCookie, requireAuth} = require('../../utils/auth');
const {User} = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
// /api/users
const router = express.Router();


const validateSignup = [
  check('email')
    .exists({checkFalsy: true})
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('username')
    .exists({checkFalsy: true})
    .isLength({min: 4})
    .withMessage('Please provide a username with at least 4 characters.'),
  check('password')
  .exists({checkFalsy: true})
  .isLength({min: 6})
  .withMessage('Password must be 6 characters or more'),
  handleValidationErrors
]


// sign up user 
router.post('/', validateSignup, asyncHandler( async(req, res) => {
  const {email, username, password} = req.body;

  const user = await User.signup({ email, username, password});

  await setTokenCookie(res, user);

  return res.json({
    user
  })

}))

module.exports = router;