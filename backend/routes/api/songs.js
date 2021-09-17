const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { User, Song} = require('../../db/models');

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
    const songs = await Song.findAll({
      include: User
    });
  
    res.json(songs);
  }),
);

// get specific song
router.get('/:id', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id)
 
    res.json(song)
}));

// POST new song
router.post('/', asyncHandler(async (req, res) => {
    const song = await Song.create(req.body);
    res.json(song)
}));

// DELETE song by id
router.delete('/:id', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id)
    await song.destroy();
    res.json(song);
}));

  
// //get a specific song in the database
// router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
//   const specificSong = await Song.findByPk(req.params.id, {
//       include: User
//     });
  
//     if (specificSong) {
//       return res.json({
//         specificSong
//       })
//     } else {
//       next(new Error("Song not found"));
//     }; 
// }));