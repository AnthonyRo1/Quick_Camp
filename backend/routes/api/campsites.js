// Node Modules 
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

// Local Modules 
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Campsite } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
// /api/users
const router = express.Router();


const validateCampsite = [
 
]


router.get('/', asyncHandler( async(req, res) => {
  const campsites = await Campsite.findAll();


  return res.json(campsites);
}));



module.exports = router;