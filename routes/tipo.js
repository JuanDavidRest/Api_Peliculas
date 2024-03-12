const { Router } = require ('express');
const {check, validationResult } = require ('express-validator');
const Tipo = require ('../models/Modulo_Tipo');

const router = Router();

router.post('/', async function (req, res){
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()});
        } 
        let tipo = new Tipo();
        
        tipo.nombreTipoPelicula = req.body.nombreTipoPelicula;
        tipo.estadoTipoPelicula = req.body.estadoTipoPelicula;
        tipo.descripcionTipoPelicula = req.body.descripcionTipoPelicula;

        tipo = await tipo.save();

        res.send(tipo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');    
    }
});

router.get('/', async function (req, res){
    try {
        const tipos = await Tipo.find();
        res.send(tipos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});

router.put('/:tipoId', async function (req, res){
    try {
        let tipo = await Tipo.findById(req.params.tipoId);
        if(!tipo){
            return res.send('Tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }

        tipo.nombreTipoPelicula = req.body.nombreTipoPelicula;
        tipo.estadoTipoPelicula = req.body.estadoTipoPelicula;
        tipo.descripcionTipoPelicula = req.body.descripcionTipoPelicula;

        tipo = await tipo.save();
        res.send(tipo);

    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.delete('/:tipoId', async function (req, res){
    try {
        let tipo = await Tipo.findById(req,params.tipoId);
        if (!tipo) {
            return res.send('tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }
        tipo = await tipo.deleteOne();
        res.send(tipo);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');   
    }
});

module.exports = router;