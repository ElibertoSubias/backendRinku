const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configuracionSchema = new Schema({
    id : {
        type: Number,
        required: true,
        unique: true
    },
    descripcion : {
        type: String,
        required: true,
        trim: true
    },
    valor : {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Configuracion', configuracionSchema);
