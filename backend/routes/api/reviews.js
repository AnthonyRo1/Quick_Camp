const express = require('express');
const asyncHandler = require('express-async-handler');
const {Review} = require('../../db/models')


const router = express.Router();



router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll();

  return res.json(reviews);
}))


router.post('/', asyncHandler(async (req, res) => {
  const review = await Review.create(req.body);
  return res.json(review);
}))


router.put('/:id', asyncHandler(async (req, res) => {
  const id = Number(req.params['id']);
  console.log(id);
  const review = await Campsite.findByPk(id);

  await review.update(req.body);

  return res.json(review)
}))


router.delete('/:id', asyncHandler(async(req, res) => {
  const id = Number(req.params['id']);

  const review = await Review.findByPk(id);
  await review.destroy();

  return res.json({id});
}))



module.exports = router;