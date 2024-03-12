
const { Schema, model} = require ('mongoose');

const MediaPeliculaSchema = Schema ({

    serialPelicula:{type:String,required:true},
    tituloPelicula:{type:String,required:true},
    sinopsisPelicula:{type:String,required:true},
    urlfilmPelicula:{type:String,required:true},
    portadaPelicula:{type:String,required:true},
    fechaCreacionPelicula:{type:Date,default: new Date()},
    fechaActualizacionPelicula:{type: Date,default: new Date()},
    estrenoFechaPelicula:{type: Date, required:true},
    generoPelicula:{type:Schema.Types.ObjectId,ref:'Genero',},
    directorPelicula:{type:Schema.Types.ObjectId,ref:'Director',},
    productoraPelicula:{type:Schema.Types.ObjectId,ref:'Productora',},
    tipoPelicula:{type: Schema.Types.ObjectId,ref:'Tipo',}
});

module.exports = model ('media',MediaPeliculaSchema);