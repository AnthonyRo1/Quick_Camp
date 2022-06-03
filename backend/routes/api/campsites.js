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


router.post('/', asyncHandler( async(req, res) => {
  const campsite = await Campsite.create(req.body);
  return res.json(campsite);
}))

router.put('/:id', asyncHandler( async(req, res) => {
  const id = Number(req.params['id'])
  console.log(id);
  const campsite = await Campsite.findByPk(id)

  await campsite.update(req.body);  

  return res.json(campsite);
}))



module.exports = router;