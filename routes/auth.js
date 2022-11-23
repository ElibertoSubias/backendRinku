const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/',
    [
        check('numEmpleado', 'Agrega un número empleado válido').isNumeric(),
        check('password', 'El password no debe ir vacio').not().isEmpty()
    ],
    authController.autenticarEmpleado
);

router.get('/',
    auth,
    authController.empleadoAutenticado
);

module.exports = router;
