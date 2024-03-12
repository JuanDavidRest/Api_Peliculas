const { Router } = require ('express');
const {check, validationResult } = require ('express-validator');
const Director = require ('../models/Modulo_Director');

const router = Router();

router.post('/', async function (req, res){
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()});
        } 
        let director = new Director();
        
        director.nombreDirector = req.body.nombreDirector;
        director.estadoDirector = req.body.estadoDirector;

        director = await director.save();

        res.send(director);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');    
    }
});

router.get('/', async function (req, res){
    try {
        const directores = await Director.find();
        res.send(directores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});

router.put('/:tipoId', async function (req, res){
    try {
        let director = await Director.findById(req.params.tipoId);
        if(!director){
            return res.send('Tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }

        director.nombreDirector = req.body.nombreDirector;
        director.estadoDirector = req.body.estadoDirector;  

        director = await director.save();
        res.send(director);

    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.delete('/:tipoId', async function (req, res){
    try {
        let director = await Director.findById(req,params.tipoId);
        if (!director) {
            return res.send('tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }
        director = await director.deleteOne();
        res.send(director);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');   
    }
});

module.exports = router;