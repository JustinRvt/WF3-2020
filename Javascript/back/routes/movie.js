const express = require('express');
const router = express.Router();

const movieCtrl = require('../controllers/movie');

router.get('/', movieCtrl.getAllMovies);
router.get('/:id', movieCtrl.getOneMovie);
router.post('/order', movieCtrl.orderMovies);

module.exports = router;