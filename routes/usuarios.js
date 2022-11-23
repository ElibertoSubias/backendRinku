const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('numEmpleado', 'El número empleado no es válido').isNumeric(),
        check('password', 'El password debe sér de almenos 6 caracteres').isLength({ min : 6 }),
    ],
    usuarioController.nuevoUsuario
);

module.exports = router;
