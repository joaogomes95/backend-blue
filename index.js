// comandos de inicialização e instalação de todas as dependencias
// npm init -y
// npm i express
// npm i -D nodemon
// npm i mongoose@5.13.8
//------------------------------------------------------------------------------------------------
//Comandos de importação
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

const port = 3000;
//--------------------------------------------------------------------------------------

const musica = require('./routers/musicas.routes');
app.use('/musicas', musica);

app.listen(port, ()=> {
    console.info(`Servidor rodando na porta: ${port}`);
})


