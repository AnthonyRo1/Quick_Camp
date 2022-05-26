const express = require('express');
const asyncHandler = require('express-async-handler');

const {setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');


// /api/session
const router = express.Router();



// create a session upon user sign-up / login 
router.post('/', asyncHandler(async (req, res, next) => {
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


router.get('/', restoreUser, (req, res) => {
  const {user} = req;
  if (user) {
    return res.json({
      user: user.toSafeObject()
    });
  } else return res.json({});
})



module.exports = router;
