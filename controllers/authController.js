const Usuario = require('../models/Usuario');
const Empleado = require('../models/Empleado');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variable.env'});
const { validationResult } = require('express-validator');

exports.autenticarEmpleado = async (req, res, next) =>  {
    // Revisar si hay errores
    // Mostrar mensajes de error de express-validator
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    //Buscar el empleado para ver si esta registrado
    const { numEmpleado, password } = req.body;
    const empleado = await Empleado.findOne({ numEmpleado });


    // if(!empleado) {
    //     res.status(401).json({msg : 'El usuario No Existe'});
    //     return next();
    // }

    if (!empleado && numEmpleado != process.env.ADMIN) {
        res.status(401).json({msg: 'Número empleado/Password Incorrecto'})
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const adminPass = await bcrypt.hash(process.env.PASSWORD, salt);

    // Verificar el password y autenticar el usuario
    if (bcrypt.compareSync(password, adminPass)) {

        // Crear JWT
        const token = jwt.sign({
            id: 1,
            nombre: "Admin",
            numEmpleado: process.env.ADMIN
        }, process.env.SECRETA, {
            expiresIn: '8h'
        });

        return res.json({token});

    } else {
        res.status(401).json({msg: 'Número empleado/Password Incorrecto3'})
        return next();
    }

}

exports.empleadoAutenticado = (req, res, next) => {
    res.json({empleado: req.empleado});
}
