const express = require('express');
const router = express.Router();
const empleadoseleccionado = require('../controllers/empleadoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// crear un empleado
// api/empleados
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del empleado es obligatorio').not().isEmpty(),
        check('apPaterno', 'El apellido paterno del empleado es obligatorio').not().isEmpty(),
        check('apMaterno', 'El apellido materno del empleado es obligatorio').not().isEmpty(),
        check('rolEmpleado', 'El rol empleado es obligatorio').isNumeric(),
        check('tipoEmpleado', 'El tipo empleado es obligatorio').isNumeric()
    ],
    empleadoseleccionado.crearEmpleado
);

// Obtener todos los empleados
router.get('/',
    auth,
    empleadoseleccionado.obtenerEmpleados
);

// Obtener empleados por id
router.get('/:numEmpleado',
    auth,
    empleadoseleccionado.obtenerEmpleado
);

// Actualizar empleado
router.put('/:id',
    auth,
    empleadoseleccionado.actualizarEmpleado
);

// Eliminar empleado
router.delete('/:id',
    auth,
    empleadoseleccionado.eliminarEmpleado
);

module.exports = router;
