const express = require('express');
const estateController = require('../controllers/estateController');

const router = express.Router();

router.get('/', estateController.getEstates);

module.exports = router;
