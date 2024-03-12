
const {Schema, model} = require ('mongoose');

const ProductoraPeliculaSchema = Schema ({

    nombreProductora:{type:String,required:true,unique:true},
    estadoProductora:{type:String,required:true,enum:['Activo','Inactivo']},
    fechaCreacionProductora:{type:Date,default: new Date()},
    fechaActualizacionProductora:{type:Date,default: new Date()},
    esloganProductora:{type:String,required:true},
    descriptionProductora:{type:String,required:true}
});

module.exports = model ('productora',ProductoraPeliculaSchema);