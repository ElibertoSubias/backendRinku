const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nominasSchema = new Schema({
    numEmpleado : {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    sueldoBase : {
        type: Number,
        required: false,
        default: 0
    },
    bonoAdicional : {
        type: Number,
        required: false,
        default: 0
    },
    bonoEntregas : {
        type: Number,
        required: false,
        default: 0
    },
    bonoDespensa : {
        type: Number,
        required: false,
        default: 0
    },
    cubrioPuesto : {
        type: Number,
        required: false,
        default: 0
    },
    ISR: {
        type: Number,
        require: false,
        default: 0
    },
    puestoCubierto : {
        type: Number,
        required: false,
        default: 0
    },
    fechaInicio: {
        type: Date,
        default: Date.now()
    },
    fechaFin: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Nominas', nominasSchema);
