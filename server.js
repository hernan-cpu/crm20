//Carga las variables de entorno desde .ev
require('dotenv').config();

//importar las dependencias
//Frameworks para manejar el servidor
const express = require('express');

//middleware para habilitar peticiones de otro dominio
const cors = require('cors');
//procesar datos json
const bodyParser = require('body-parser');
//Crea la aplicacion 
const app = express();
//si PORT no tiene valor usa el 3000
const port = process.env.PORT || 3001;
//habilita cors
app.use(cors());
//habilita bodyParser para leer los datos JSON
app.use(bodyParser.json());
//rutas de prueba
app.get('/',(req,res)=>{
    res.send('API de CRM funcionando')
});

const clientesRoutes = require('./routes/clientes')
app.use('/clientes',clientesRoutes)
//iniciar el servidor

app.listen(port,()=>{
    console.log(`API CRM corriendo en http://localhost:${port}`)
})