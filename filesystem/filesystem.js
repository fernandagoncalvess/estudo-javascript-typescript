const fs= require('fs').promises;
const path = require('path');

fs.readdir(path.resolve(__dirname))
.then(files => console.log(files))
.catch(e=>console.log(e));

fs.writeFile(path.resolve(__filename),
'\n//Frase escrita pelo writeFile', {flag: 'a'});

const pessoas = [
    {nome: 'Fernanda'},
    {nome: 'Maria'},
    {nome: 'Vinícius'},
];

const json = JSON.stringify(pessoas);

fs.writeFile(path.resolve(__dirname, 'teste.json'), json, {flag: 'w'});
//Frase escrita pelo writeFile

