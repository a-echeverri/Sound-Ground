const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Song, Album } = require("../../db/models");
const {
  singleMulterUpload,
  singlePublicFileUpload,
  multipleMulterUpload,
  multiplePublicFileUpload,
} = require("../../awsS3");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    // profile image URL needed?
    const profileImageUrl = await singlePublicFileUpload(req.file);
    const user = await User.signup({
      email,
      username,
      password,
      profileImageUrl,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// file upload
router.post(
  "/",
  singleMulterUpload("image"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const profileImageUrl = await singlePublicFileUpload(req.file);
    const user = await User.signup({
      username,
      email,
      password,
      profileImageUrl,
    });

    setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// for multiple files
// router.post(
//   "/",
//   multipleMulterUpload("images"),
//   asyncHandler(async (req, res) => {
//     const images = await multiplePublicFileUpload(req.files);
//     // Do something with the images
//     // images is an array where each element is the url to your bucket.
//   })
// );

router.put(
  "/:id",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const profileImageUrl = await singlePublicFileUpload(req.file);
    await User.update({ profileImageUrl }, { where: { id } });

    res.json({ profileImageUrl });
  })
);

// get all users in database
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await User.findAll({ include: Song, Album });

    res.json(users);
  })
);

// get specific user
router.get( "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.id, {include: Song, Album});
    console.log("entered user route")
    console.log(req.params.id)
    res.json(user);
  })
);

// get all a user's songs
router.get('/', async(req, res) => {
  const songs = await Song.findAll({
    where: {
      userId: req.params.userId,
      albumId: null
    }
  })
  res.json(songs);
})

module.exports = router;
