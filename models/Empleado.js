const mongoose = require('mongoose');

const EmpleadosSchema = mongoose.Schema({
    numEmpleado: {
        type: String,
        require: false,
        trim: true
    },
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apPaterno: {
        type: String,
        require: true,
        trim: true
    },
    apMaterno: {
        type: String,
        require: true,
        trim: true
    },
    rolEmpleado: {
        type: Number,
        require: true
    },
    tipoEmpleado: {
        type: Number,
        require: true
    },
    password: {
        type: Number,
        require: false
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Empleado', EmpleadosSchema);
