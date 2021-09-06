const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas')

// CRUD functions
// Adicionando
router.post('/add', async (req, res) =>{
    await Musica.create(req.body)
    .then(() => {
        res.status(200).send("Musica cadastrada com sucesso");
    })
    .cacth((err)=> {
        res.status(400).send("Algo de errado não está certo!");
        console.log(err);
    })
});
// Vizualizando
// async faz algo funcionar de forma acincrona(Não sincronizada)
// await espera que a resposta do async para continuar o a leitura do código.
router.get('/', async (req, res) => {
    await Musica.find({})
    .then((musica) => {
        res.send(musica);
    })
    .cacth((err)=> {
        res.status(400).send("Algo de errado não está certo!");
        console.log(err);
    })
});
//Vizualizando por Nome
router.get('/findByName/:name', async (req, res) => {
    await Musica.find({nome : req.params.name})
    .then((musica) => {
        res.send(musica);
    })
    .cacth((err)=> {
        res.status(400).send("Algo de errado não está certo!");
        console.log(err);
    })
});
//Vizualizando por ID
router.get('/findByid/:id', async (req, res) => {
    await Musica.find({nome : req.params.id})
    .then((musica) => {
        res.send(musica);
    })
    .cacth((err)=> {
        res.status(400).send("Algo de errado não está certo!");
        console.log(err);
    })
});

//Atualizando
router.put("/update/:id", async (req, res) => {
    await Musica.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    });
});


//Deletando
router.delete("/delete/:id", async (req, res) => {
    await Musica.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Deletado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    });
});

module.exports = router;