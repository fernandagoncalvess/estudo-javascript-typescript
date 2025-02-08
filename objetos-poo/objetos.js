const pessoa = new Object();
pessoa.nome = 'Ana';
pessoa.sobrenome = 'Silva';
pessoa.idade = 78;
console.log(pessoa);
// Object.freeze(this);
pessoa.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa.getDataNascimento());

Object.freeze(pessoa); //congela os valores do objeto, não pode alterar mais
pessoa.nome = 'Maria';
console.log(pessoa);


// defineProperty - defineProperties
function Produto(nome, preco, estoque, marca, tipo) {
    this.nome = nome;
    this.preco = preco;
    let tipoPrivado = tipo;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, //valor não pode ser alterado
        configurable: false // configurável
    });

    Object.defineProperties(this,
        {
            marca: {
                enumerable: true,
                value: marca,
                writable: false,
                configurable: false
            },
            tipo: {
                enumerable: true,
                configurable: false,
                get: function () {
                    return tipoPrivado;
                },
                set: function (valor) {
                    tipoPrivado = valor;
                }
            }
        }
    )
}

const p1 = new Produto('Computador', 3000, 4, 'Acer');
console.log(p1);
p1.tipo = 'Tecnologia'
console.log(p1.tipo);

//copiar objetos
const p2 = { ...p1, codigo: 1234 };
const p3 = Object.assign({}, p2);
console.log(p2, p3);

//mostra as chaves do objeto em um array
console.log(Object.keys(p1));

//mostra valores das chaves em um array
console.log(Object.values(p1));

// mostra as propriedades da chave escolhida
console.log(Object.getOwnPropertyDescriptor(p1, 'nome'));

//percorrendo chave e valor
for(let [chave, valor] of Object.entries(p1)){
    console.log(chave, valor);
}
console.log(Object.entries(p1));

//__proto__ recomendado não alterar
Produto.prototype.fornecedor='desconhecido';

console.log(p1.fornecedor);

// __proto__ de objB vira objA que tem o próprio proto
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

// delegação/herança prototype
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
   
  Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
  };
   
  function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
  }
  Camiseta.prototype = Object.create(Produto.prototype);
  Camiseta.prototype.constructor = Camiseta;

  //.repeat
  