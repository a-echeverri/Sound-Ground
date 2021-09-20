const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Song, Album } = require('../../db/models');
const { restoreUser } = '../../utils/auth'
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// const validateSong = [
// 	check('title')
// 		.exists({ checkFalsy: true })
// 		.withMessage('Please provide a title.'),
// 	check('title')
// 		.isLength({ max: 50 })
// 		.withMessage('Song title must be shorter than 50 characters.'),
// 	check('url')
// 		.exists({ checkFalsy: true })
// 		.withMessage('Please provide a URL to the song.'),
// 	handleValidationErrors,
// ];

// get all songs in the database
router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({include: User, Album})
    // console.log(songs);
    res.json(songs);
}));

// get specific song
router.get('/:id', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id, {include: User, Album})
    console.log(song);
    res.json(song);
}));

// create new song
router.post('/', asyncHandler(async (req, res) => {
    const { userId, title, album, url } = req.body
    const song = await Song.create({ userId, title, album, url});
    res.json(song)
}));

// update a song
router.put('/:id', asyncHandler(async (req, res) => {
  const song = await Song.findByPk(req.params.id);
  const { userId, title, album, url } = req.body;
  const updatedSong = await song.update({ userId, title, album, url});
  res.json(updatedSong)
}));

// delete specific song
router.delete('/:id', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id)
    await song.destroy();
    res.json(song);
}));



module.exports = router;