const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Song, Comment, Album } = require('../../db/models');

const router = express.Router();

const validateComment = [
	check('body')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a comment body.'),
	handleValidationErrors,
];

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const comments = await Comment.findAll();

		return res.json(comments);
	})
);

router.put(
	'/',
	asyncHandler(async (req, res) => {
		const { body, commentId } = req.body;
		const comment = await Comment.findByPk(commentId);

		comment.body = body;
		await comment.save();

		return res.json(comment);
	})
);

router.post(
	'/',
	validateComment,
	asyncHandler(async (req, res) => {
		const { body, userId, songId } = req.body;
		const comment = await Comment.create({ body, userId, songId });

		return res.json(comment);
	})
);

router.delete(
	'/',
	asyncHandler(async (req, res) => {
		const { commentId } = req.body;
		const comment = await Comment.findByPk(commentId);

		await comment.destroy();

		return res.json(comment);
	})
);
module.exports = router;