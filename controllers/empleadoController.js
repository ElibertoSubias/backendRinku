const Empleado = require('../models/Empleado');
const { validationResult } = require('express-validator');
const errorLog = require('../util/logger').errorlog;
const successlog = require('../util/logger').successlog;

// Crear un nuevo Empleado
exports.crearEmpleado = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    try {

        const ultimoNumEmpleado = await Empleado.find().sort({ numEmpleado: -1 }).limit(1);

        if (ultimoNumEmpleado && ultimoNumEmpleado.length > 0) {
            req.body.numEmpleado = String(parseInt(ultimoNumEmpleado[0].numEmpleado) + 1);
        } else {
            req.body.numEmpleado = "9000";
        }

        // Crear el empleado
        const empleado = new Empleado(req.body);
        await empleado.save();
        // successlog.info(`Se crea empleado: ${empleado}`);
        res.json({empleado});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear el empleado');
    }

}

// Obtener empleado por numEmpleado
exports.obtenerEmpleado = async (req, res) => {

    try {

        const { numEmpleado } = req.params;
        const empleadoExistente = await Empleado.findOne({numEmpleado: numEmpleado});

        if (!empleadoExistente) {
            return res.status(404).json({msg: 'Empleado no existe'});
        }

        res.json({empleadoExistente});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener el empleado');
    }

}


// Obtener los empleados
exports.obtenerEmpleados = async (req, res) => {

    try {

        const empleados = await Empleado.find({});

        if (!empleados) {
            return res.status(404).json({msg: 'No existen empleados registrados'});
        }

        res.json({empleados});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener el empleado');
    }

}

// Actualizar empleado
exports.actualizarEmpleado = async (req, res) => {
    try {

        const { nombre, apPaterno, apMaterno, rolEmpleado, tipoEmpleado, estado } = req.body;

        // Si el empleado existe o no
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            return res.status(404).json({msg: 'Empleado no encontrado'});
        }

        // Crear un objeto con la nueva informacion
        const nuevoEmpleado = {};

        nuevoEmpleado.nombre = nombre;
        nuevoEmpleado.apPaterno = apPaterno;
        nuevoEmpleado.apMaterno = apMaterno;
        nuevoEmpleado.rolEmpleado = rolEmpleado;
        nuevoEmpleado.tipoEmpleado = tipoEmpleado;
        nuevoEmpleado.estado = estado;

        // Guardar la tara
        empleado = await Empleado.findOneAndUpdate({_id : req.params.id}, nuevoEmpleado, {new : true});

        res.json({empleado});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el empleado: ');
    }
}

// Eliminar Empleado
exports.eliminarEmpleado = async (req, res) => {
    try {

        // Si el Empleado existe o no
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            return res.status(404).json({msg: 'Empleado no encontrada'});
        }

        // Eliminar
        await Empleado.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Empleado eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el empleado');
    }
}
