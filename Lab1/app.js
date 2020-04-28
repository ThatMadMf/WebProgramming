const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Лабораторна робота 1 <h1><br><p>Виконав Оношко Максім</p>");
});

app.listen(8080);