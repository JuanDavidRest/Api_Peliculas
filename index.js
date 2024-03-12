const express = require ('express');
const cors = require('cors');
const app = express();

const {getConnection} = require ('./db/db-connect-mongo');

getConnection();

const port = 3000

app.listen(port, () => {
    console.log(`Conectado al puerto: ${port}`)
});

//Parseo
app.use(express.json());
app.use(cors());

//Rutas para la Api
app.use('/director',require('./routes/director'));
app.use('/genero',require('./routes/genero'));
app.use('/media',require('./routes/media'));
app.use('/productora',require('./routes/productora'));
app.use('/tipo',require('./routes/tipo'));




