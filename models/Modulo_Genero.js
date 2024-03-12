
const { Schema, model } = require ('mongoose');

const GeneroPeliculaSchema = Schema ({

    nombreGenero:{type:String,required:true,unique:true},
    estadoGenero:{type:String,enum:['Activo','Inactivo'],required:true},
    fechaCreacionGenero:{type:Date,default: new Date()},
    fechaActualizacionGenero:{type: Date,default: new Date()},
    descripcionGenero:{type:String,required:true}
});

module.exports =  model ('genero', GeneroPeliculaSchema);