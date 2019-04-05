var express = require('express');
var router = express.Router();

// we import our album controller
var albums = require('../controllers/albums.controller');

router.get('/_id', albums.findOne);

router.get('/', albums.findAll);

/* CREATE  one album */
router.put('/', albums.create);

module.exports = router;
