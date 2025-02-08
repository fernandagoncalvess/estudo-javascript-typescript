//funções

function funcao(nome) {
  console.log(`Bom dia ${nome}! `)
}

funcao('Fernanda');

//arrow function
const raiz = (n) => n ** 0.5;
console.log(raiz(9));


const fala = function () {
  console.log("estou falando");
};
fala(); //variavel passa a ser uma função

function executaFuncao(funcao) {
  funcao();
}
executaFuncao(fala);

//arguments sustenta todos os argumentos eviados, independente se foi passado na função em si
//só funciona com function
function funcao1() {
  console.log(arguments[0], arguments[1]);
}

funcao1('teste', 1, 23);

//passando um array 
function funcao2([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao2(['valor 1', 'valor 2', 'valor 2']);

function conta(operador, acumulador, ...numeros) {//...->rest operator, vai obter os argumentos restantes 
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
  }
  console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

//callback- função passada por argumento para outra função
//usado para ser chamado após terminar uma tarefa

function processar(valor, callback) {
  console.log("Processando valor...");
  callback(valor);
}

function imprimirResultado(resultado) {
  console.log("Resultado:", resultado);
}

processar(10, imprimirResultado);

//IIFE(Immediately Invoked Function Expression)
//função é definida e executada imediatamente após sua criação
(function () {
  const mensagem = "Olá, IIFE!";
  console.log(mensagem);
})();

//Objetos
const pessoa = {
  nome: 'Fernanda',
  idade: 25,
  fala() {
    console.log("Meu nome é", this.nome);
  }
}

pessoa.fala();

//Function factory
//função usada para criar objetos dinamicamente

function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    saudacao: function () {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
}

const pessoa1 = criarPessoa("Fernanda", 23);
console.log(pessoa1.saudacao());

//Constructor function
//convenção letra maiuscula no nome da classe

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ' chamou o método');
  };
}

const p1 = new Pessoa('Fernada', 'Gonçalves');
p1.metodo();

//função recursiva

function recursiva(num) {
  if (num > 10) return;
  console.log(num);
  num++;
  recursiva(num);
}
recursiva(1);

//funções geradoras