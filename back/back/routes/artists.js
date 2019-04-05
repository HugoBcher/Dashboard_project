var express = require('express');
var router = express.Router();

// we import our artists controller
var artists = require('../controllers/artists.controller');


/* GET one artists */
//router.get('/:_id', artists.findOne);



router.get('/', artists.findAll);

/* CREATE  one artists */
router.put('/', artists.create);

module.exports = router;
