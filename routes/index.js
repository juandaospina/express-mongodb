const express = require('express');
const fs = require('fs')
const router = express.Router();

/* __dirname se usa para obtener la ruta del directorio actuar en el 
que nos situamos */  
const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    return filename.split(".").shift();
}

/* Returna el contenido de un directorio, string[], Buffer[] de acuerdo 
a la especificación de encoding pasada */ 
fs.readdirSync(PATH_ROUTES).filter(file => {
    const name = removeExtension(file);
    if(name !== "index") {
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router