const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors()); // sem parâmetros no cors, libera para todos os acessos
app.use(router);

module.exports = app;
