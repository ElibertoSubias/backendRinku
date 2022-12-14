const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variable.env'});

module.exports = (req, res, next) => {

    // Leer el token del header
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({msg: 'No hay Token, permiso no válido'});
    }

    // Validar el token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.empleado = cifrado;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no válido'});
    }

}
