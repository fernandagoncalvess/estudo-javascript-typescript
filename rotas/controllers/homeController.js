

export function paginaInicial(req, res){
    res.send(`
        <form action="/"  method="POST">
        <p>Nome: <input type="text" name="nome"></p>
        <button>Enviar</button>
        </form>
        `);
}