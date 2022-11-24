const Nominas = require('../models/Nominas');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.grabarNominas = async (req, res) => {

    // Mostrar mensajes de error de express-validator
    const nominas = req.body;
    if(!Array.isArray(nominas) || nominas.length == 0) {
        return res.status(400).json({errores: "Ninguna nomina para grabar"});
    }

    nominas.forEach(async element => {
        // revisar si hay errores
        if (!element.numEmpleado) {
            return res.status(400).json({errores: "No existe el número empleado"})
        }

        delete element._id;
        // Crear un nuevo usuario
        nomina = await new Nominas(element);

        try {

            await nomina.save();

        } catch (error) {

            console.log(error);

        }
    });

    res.json({msg : 'Nominas grabadas correctamente'});

}
