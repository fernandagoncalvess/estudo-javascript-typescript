const express = require('express');
const app = express();

//app.get('/', (requisicao, resposta)=>{
//    resposta.send('Teste');
//});

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

//'/parametros/:id?' -> ? parametro é opcional
app.get('/parametros/:id', (request, response)=>{
    console.log(request.params);
    console.log(request.query);
    //query string, par de cahave e valor
    //localhost:porta/?nome=Maria&sobrenome=Silva
});

app.get('/', (req, res)=>{
    res.send(`
        <form action="/"  method="POST">
        <p>Nome: <input type="text" name="nome"></p>
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (req,res)=>{
    console.log(req.body);
    res.send(`Recebi o formulário: ${req.body.nome}`); //name="nome"
})

app.listen(3000, ()=>{
    console.log('Servidor executando na porta 3000');
});