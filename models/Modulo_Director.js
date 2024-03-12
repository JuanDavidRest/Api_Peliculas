const {Schema, model } = require ("mongoose");

const DirectorPeliculaSchema = Schema ( {

    nombreDirector:{type:String,required:true,unique:true},
    estadoDirector:{type:String,required:true,enum:['Activo','Inactivo']},
    fechaCreacionDirector:{type: Date,default:new Date()},
    fechaActualizacionDirector:{type: Date,default: new Date()}  
});

module.exports =  model ('director', DirectorPeliculaSchema);