// Node Modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const {check} = require('express-validator');


// Local Modules 
const {setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');


// /api/session
const router = express.Router();

const validateLogin = [
  check('credential')
  .exists({checkFalsy: true})
  .notEmpty()
  .withMessage('Please provide a valid email or username'),
  check('password')
  .exists({checkFalsy: true} )
  .withMessage('Please provide password'),
  handleValidationErrors
]

// create a session upon user sign-up / login 



router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params['id'];
  const user = await User.getCurrentUserById(id);

  return res.json(user);
}))



router.post('/', validateLogin, asyncHandler(async (req, res, next) => {
  const {credential, password} = req.body;

  const user = await User.login({credential, password});

  if (!user) {
    const err = new Error('Login Failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['The provided credentials were invalid'];
    return next(err)
  }
  // if user logs in successfully 
  await setTokenCookie(res, user);

  return res.json({
    user
  });
}));





// delete token 
router.delete('/', (_req, res) => {
  res.clearCookie('token');
  return res.json({message: 'success'});
});




// restore user 
router.get('/', restoreUser, (req, res) => {
  const {user} = req;
  if (user) {
    return res.json({
      user: user.toSafeObject()
    });
  } else return res.json({});
})



module.exports = router;
