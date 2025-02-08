// Básico de Javascript 

// Console.log 

let nome = 'Ana'; //também existe var mas ela tem alguns erros, usar sempre let
let nome2; // undefined, caso queira uma variável não definida, recomendado usar null

const idade2 = 5; // const não pode modifiar o valor depois que ja foi declarado
//- Primitivos(imutáveis) - string, number, boolean,undefined, null
//- Referência(mutável) - array,object, function

// A Cada console.log novo tem quebra de linha
console.log(`"Fernanda" e 'Maria' tem ${idade2} anos,`, nome.concat(' tem 1 ano e Dora tem ') + (2 + idade2), 'anos', nome2);
/* 
*Resultado:
* "Fernanda" e 'Maria' tem 5 anos, Ana tem 1 ano e Dora tem 7 anos
*/
console.log(Number.MAX_VALUE);

let contador = 1;
console.log(contador++); //A conta é feita depois do print da variável
console.log(contador);
console.log(++contador);//Aconta é feita antes de printar a variável
/**
 * Resultado:
 * 1 2 3
 */

//Strings

let barras = "um \"texto com aspas\"" // barra invertida ignora o próximo caractere

//strings são indexadas em javascript
let varA = 'A';
let varB = 'B';
let varC = 'C';
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
/**
 * Resultado:
 * B, C, A
 */

//Funções
//dependendo podem ser usadas em arrays, strings, numbers, objetos

let texto = 'Um texto escrito';

console.log(texto.charAt(4)); //letra que corresponde a essa posição
console.log(texto.indexOf('o')) //indice da letra
console.log(texto.indexOf('e', 6))//procura a partir da posição 6
console.log(texto.lastIndexOf('o'))// retorna o indice da última ocorrência do valor especificado
console.log(texto.replace('texto', 'outro'))//substitui a primeira palavra pela segunda
console.log(typeof (texto)) //retorna o tipo da variável
console.log(parseInt(3.1));//transaforma número para inteiro
console.log((3).toString()); //transforma o valor em string temporariamente
console.log((38.9).toFixed()); //formata o numero, o valor passado é para o número de casas depois da vírgula, se não colocar nada ele arredonda
console.log(Number.isInteger(9)) // verifica se o numero é inteiro
console.log(Number.isNaN(NaN)) // verifica se o valor é um número

// Operadores de comparação

console.log("90" == 90) // retorna true por não considerar os tipos das variáveis
console.log("90" === 90) // retorna false pois considera os tipos
console.log("90" !== 90)


//Array

const alunos = ['Ana', 'Maria', 'Geovana'];
/*const em arrays e objetos podem ser mutaveis
*acontece porque quando alteramos um valor interno de um objeto, não ocorre reatribuição da variável (=)
*a variável continua apontando para o mesmo lugar
*/
alunos[alunos.length] = 'Luiza'; //adicionando um nome ao final
alunos.push('Fabiana'); //adicionando um nome ao final
console.log(alunos);


//Operador Condicional

let velocidade = 2;
(velocidade > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100");//se a expressão for verdadeira a primeira opção acontece, usado para blocos pequenos


//Função Date

const data = new Date();