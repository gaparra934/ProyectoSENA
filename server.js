const express = require('express')
const app = express()
const port = 8080;

// Servir contenido estático
app.use( express.static('public') );

// Handlebars
app.get('/ingreso', (req, res) => {
    res.sendFile(__dirname + '/public/ingreso.html')
});

// Handlebars
app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/public/registro.html')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});