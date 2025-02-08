alert('Menssagem');

confirm('Confirmar ou cancelar');//retorna true ou false

let palavras = prompt('Digit algo');//retorna valor em string
console.log(palavras);

document.body.innerHTML = `<strong>${palavras}</strong><br />`;
document.body.innerHTML += ` Tamanho do texto: ${palavras.length}`;

//DOMContentLoad: garante que todo o html esteja carregado antes de executar
//mesmo que todo html apareça na página, não é garantia de que ele foi carregado totalmente
document.addEventListener('DOMContentLoaded', () => {
    formulario();
    function formulario() {
        const form = document.querySelector('.form');

        //form.onSubmit = function(e){// onSubmit "on" é usado para eventos
        //  e.preventDefault(); // preventDefault, previne o reiniciar ao clicar um botão no form, padrão do navegador
        //  alert();
        // }

        function eventForm(evento) {
            evento.preventDefault();
            let nome = form.querySelector('.nome');
            console.log(nome.value);
            document.body.innerHTML += nome.value;
        }
        form.addEventListener('submit', eventForm);
    }
    document.addEventListener('click', function(){
        document.body.style.background = 'red';
    });
});

//iniciar.addEventListener('click', function(event){
//})