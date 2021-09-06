// comandos de inicialização e instalação de todas as dependencias
// npm init -y
// npm i express
// npm i -D nodemon
// npm i mongoose@5.13.8
//------------------------------------------------------------------------------------------------
//Comandos de importação
const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

Conn("localhost",27017,"musicas");

const port = 3000;
//--------------------------------------------------------------------------------------

const musica = require('./routers/musicas.routes');
app.use('/musicas', musica);

app.listen(port, ()=> {
    console.info(`Servidor rodando na porta: ${port}`);
})


