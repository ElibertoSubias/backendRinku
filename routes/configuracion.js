const express = require('express');
const router = express.Router();
const configuracionController = require('../controllers/configuracionController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

router.post('/',
    auth,
    [
        check('id', 'ID obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        check('valor', 'El valor es obligatorio').isNumeric(),
    ],
    configuracionController.nuevaConfiguracion
);

// Obtener configuracion por id
router.get('/:id',
    auth,
    configuracionController.obtenerConfiguracion
);

module.exports = router;
