const express = require('express');

const app = express();
app.get('/', (req, res)=> res.send("Hola con express"))

app.listen(3000);
console.log("Server en puerto 3000");
