const mongoose = require('mongoose');

const getConnection = async () => {

    try {

        const url = 'mongodb+srv://mongoatlass123iu:mongoatlass123@backendinventarios.bjh96kr.mongodb.net/inventariosMongoIU?retryWrites=true&w=majority&appName=Backendinventarios'
        await mongoose.connect(url);
        console.log('Conexion exitosa');

    } catch (error) {
        console.log('Fallo la conexion a la base de datos:',error);
    }  

}

module.exports = {
    getConnection,
}