const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is the root!'));

router.get('/albums', controllers.getAllAlbums)
router.get('/songs', controllers.getAllSongs)
router.get('/albums/:id', controllers.getAlbumById)
router.get('/songs/:id', controllers.getSongById)

module.exports = router;