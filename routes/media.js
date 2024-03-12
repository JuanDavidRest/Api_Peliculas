const { Router } = require('express');
const {check, validationResult } = require ('express-validator');
const Media = require ('../models/Modulo_Media');

const router =  Router();

router.post('/', async function (req, res){
    try {
        const existeMediaxSerial = await Media.findOne({serialPelicula: req.body.serialPelicula});
        const existeUrlMedia = await Media.findOne({urlfilmPelicula: req.body.urlfilmPelicula});

        if (existeMediaxSerial){
            return res.status(400).send('El serial ya existe para otra Pelicula');
        }
        if(existeUrlMedia){
            return res.status(400).send('la Url ya existe para otra Pelicula');
        }
        let media = new Media();

        media.serialPelicula = req.body.serialPelicula;
        media.tituloPelicula = req.body.tituloPelicula;
        media.sinopsisPelicula = req.body.sinopsisPelicula;
        media.urlfilmPelicula = req.body.urlfilmPelicula;
        media.portadaPelicula = req.body.portadaPelicula;
        media.estrenoFechaPelicula = req.body.estrenoFechaPelicula;
        media.generoPelicula = req.body.generoPelicula._id;
        media.directorPelicula = req.body.directorPelicula._id;
        media.productoraPelicula = req.body.productoraPelicula._id;
        media.tipoPelicula = req.body.tipoPelicula._id;

        media = await media.save();
        res.send(media);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear la media para la pelicula')
    }
});

router.get('/', async function (req, res){
    try {
        const medias = await Media.find();
        res.send(medias);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});

router.get('/mediaId', async function (req, res){
    try {
        const media = await media.findbyId(req.params.mediaId);
        if(!media){
            return res.status(404).send('Media no existe');
        }
        res.send(media);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio Un error al consultar la media para la pelicula');    
    }
});

router.put('/:mediaId', async function(req, res){
    try{
        let media = await Media.findById(req.params.mediaId);
        if(!media){
            return res.status(400).send('Media no existe');
        }
        
        media.serialPelicula = req.body.serialPelicula;
        media.tituloPelicula = req.body.tituloPelicula;
        media.sinopsisPelicula = req.body.sinopsisPelicula;
        media.urlfilmPelicula = req.body.urlfilmPelicula;
        media.portadaPelicula = req.body.portadaPelicula;
        media.estrenoFechaPelicula = req.body.estrenoFechaPelicula;
        media.generoPelicula = req.body.generoPelicula;
        media.directorPelicula = req.body.directorPelicula;
        media.productoraPelicula = req.body.productoraPelicula;
        media.tipoPelicula = req.body.tipoPelicula;

        media = await media.save();

        res.send(media);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al actualizar media para la pelicula');
    }
});


router.delete('/:mediaId', async function(req, res){
    try{
        let media = await Media.findById(req.params.mediaId);
        if(!media){
            return res.status(400).send('Media no existe');
        }

        media = await media.deleteOne();

        res.send(media);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al eliminar media de la pelicula')
    }
});

module.exports = router;