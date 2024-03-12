const { Router } = require ('express');
const {check, validationResult } = require ('express-validator');
const Productora = require ('../models/Modulo_Productora');

const router = Router();

router.post('/', async function (req, res){
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()});
        } 
        let productora = new Productora();
        
        productora.nombreProductora = req.body.nombreProductora;
        productora.estadoProductora = req.body.estadoProductora;
        productora.esloganProductora = req.body.esloganProductora;
        productora.descriptionProductora = req.body.descriptionProductora;

        productora = await productora.save();

        res.send(productora);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');    
    }
});

router.get('/', async function (req, res){
    try {
        const productoras = await Productora.find();
        res.send(productoras);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});

router.put('/:tipoId', async function (req, res){
    try {
        let productora = await Productora.findById(req.params.tipoId);
        if(!productora){
            return res.send('Tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }

        productora.nombreProductora = req.body.nombreProductora;
        productora.estadoProductora = req.body.estadoProductora;
        productora.esloganProductora = req.body.esloganProductora;
        productora.descriptionProductora = req.body.descriptionProductora;  

        productora = await productora.save();
        res.send(productora);

    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.delete('/:tipoId', async function (req, res){
    try {
        let productora = await Productora.findById(req,params.tipoId);
        if (!productora) {
            return res.send('tipo no existe');
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({messages: errors.array()})
        }
        productora = await productora.deleteOne();
        res.send(productora);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');   
    }
});

module.exports = router;