const nomes = ['Maria', 'Júlia', 'Sandra'];
const novoarray = [...nomes];
nomes[2] = 'Jussara';
console.log(nomes);

const removido = nomes.pop();
console.log(nomes);
console.log(novoarray);
console.log(nomes.length);
console.log('item removido: ' + removido)

nomes.push('Ana');

console.log(nomes);
const nomesnovos = novoarray.slice(1, -1);
console.log(nomesnovos);

//.split(,)
//.join - unir os valores dp aray

//splice(indice, delete, elem1, elm2, elem3)
const removidos = nomes.splice(1, 2, 'Paula'); //começa no indice 1, remove 2 itens, adiciona Paula no indice 1 e retorna os removidos em um array
console.log(removidos);
console.log(nomes);


//concatenando arrays
const todos = [...nomes.concat(nomesnovos, novoarray, removido), ...removidos];
console.log(todos);

//filter
const nomesComecaJ = todos.filter(x => x[0] === 'J');
console.log(nomesComecaJ);

//map
let num = 0;
const adicionandoNumero = todos.map((x) => {
    num++;
    return x + ' ' + num;
});
console.log(adicionandoNumero, 'Quantidade de nomes:', num);

//reduce
//recomendado para usar quando quer diminuir o array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayreuzido = numeros.reduce((acumulador, x) => {
    acumulador += x;
    console.log(x);
    return acumulador
}, 0); //0 define o valor inicial do acumulador, não é obrigatório
console.log(arrayreuzido);

