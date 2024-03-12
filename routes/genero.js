
const { Router } = require ('express');
const {check, validationResult } = require ('express-validator');
const Genero = require ('../models/Modulo_Genero');

const router = Router();

router.post('/', async function (req, res){
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()});
        } 
        let genero = new Genero();
        
        genero.nombreGenero = req.body.nombreGenero;
        genero.estadoGenero = req.body.estadoGenero;
        genero.descripcionGenero = req.body.descripcionGenero;

        genero = await genero.save();

        res.send(genero);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');    
    }
});

router.get('/', async function (req, res){
    try {
        const generos = await Genero.find();
        res.send(generos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});

router.put('/:tipoId', async function (req, res){
    try {
        let genero = await Genero.findById(req.params.tipoId);
        if(!genero){
            return res.send('Tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }

        genero.nombreGenero = req.body.nombreGenero;
        genero.estadoGenero = req.body.estadoGenero;
        genero.descripcionGenero = req.body.descripcionGenero;  

        genero = await genero.save();
        res.send(genero);

    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.delete('/:tipoId', async function (req, res){
    try {
        let genero = await Genero.findById(req,params.tipoId);
        if (!genero) {
            return res.send('tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }
        genero = await genero.deleteOne();
        res.send(genero);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');   
    }
});

module.exports = router;