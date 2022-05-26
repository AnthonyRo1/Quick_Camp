// backend/routes/api/index.js
// Node Modules 
const asyncHandler = require('express-async-handler');

// Local Modules 
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');


const router = require('express').Router();


router.post('/test', (req, res) => {
  res.json({ requestBody: req.body});
});











module.exports = router;