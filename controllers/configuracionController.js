const Configuracion = require('../models/Configuracion');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.nuevaConfiguracion = async (req, res) => {

    // Mostrar mensajes de error de express-validator
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    // Verificar si ya existe la configuracion
    const {id} = req.body;

    let existeConfiguracion = await Configuracion.findOne({id});

    if(existeConfiguracion) {
        return res.status(400).json({msg : 'ID de configuración ya registrado'})
    }

    try {

        // Crear un nueva configuración
        const configuracion = new Configuracion(req.body);
        await configuracion.save();

        res.json({msg : 'Configuración creada correctamente'});

    } catch (error) {

        console.log(error);

    }

}

// Obtener empleado por numEmpleado
exports.obtenerConfiguracion = async (req, res) => {

    try {

        const { id } = req.params;

        const configuracion = await Configuracion.findOne({id: id});

        if (!configuracion) {
            return res.status(404).json({msg: 'Configuraición no existe'});
        }

        res.json({configuracion});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener la configuración');
    }

}
