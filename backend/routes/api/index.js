const router = require("express").Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs');
const albumsRouter = require('./albums');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/albums', sessionRouter);


// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;