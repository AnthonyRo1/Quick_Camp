const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

// Local Modules 
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Booking } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const bookings = await Booking.findAll();

  return res.json(bookings);
}))

module.exports = router;



router.post('/', asyncHandler( async(req, res) => {
  const booking = await Booking.create(req.body);
  return res.json(booking);
}))


router.put('/:id', asyncHandler( async(req, res) => {
  const id = Number(req.params['id']);

  const booking = await Booking.findByPk(id);
  await booking.update(req.body);
  return res.json(booking);
}));


router.delete('/:id', asyncHandler(async (req, res) => {
  const id = Number(req.params['id']);
  const booking = await Booking.findByPk(id);
  await booking.destroy();

  return res.json({id});
}))