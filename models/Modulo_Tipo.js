
const { Schema, model} = require ('mongoose');

const TipoPeliculaSchema = Schema ({

    nombreTipoPelicula: {type:String,required:true},
    estadoTipoPelicula:{type:String,required:true,enum:['Activo','Inactivo']},
    fechaCreacionTipoPelicula:{type:Date,default: new Date()},
    fechaActualizacionTipoPelicula:{type:Date,default: new Date()},
    descripcionTipoPelicula:{type: String,required:true}
});

module.exports = model ('tipo',TipoPeliculaSchema );