const express = require('express');
const router = express.Router();
const grabarNominasController = require('../controllers/nominasController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/',
    auth,
    grabarNominasController.grabarNominas
);

module.exports = router;
