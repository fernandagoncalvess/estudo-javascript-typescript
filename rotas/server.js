const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.listen(3000, ()=>{
    console.log('Servidor executando na porta 3000');
});