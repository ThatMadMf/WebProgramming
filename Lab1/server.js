'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Лабораторна робота 1</h1><p>Оношко Максiм</p>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
