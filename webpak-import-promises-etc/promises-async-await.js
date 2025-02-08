//Promises
//usado para códigos a serem executados de forma assíncrona
//tem 3 estados pending, fulfilled, rejected

const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;

    if (!sucesso) {
      resolve("Operação concluída com sucesso!"); // Chama o resolve
    } else {
      reject("Ocorreu um erro na operação."); // Chama o reject
    }
  }, 2000);
});

minhaPromise
  .then(resultado => {
    console.log("Sucesso:", resultado);
  })
  .catch(erro => {
    console.log("Erro:", erro);
  })
  .finally(() => {
    console.log("Operação finalizada.");
  });

//Promise.all
const p1 = new Promise(res => setTimeout(() => res("P1 resolvida"), 2000));
const p2 = new Promise((res, reject) => setTimeout(() => reject("p2 falhou"), 1000));
const p3 = new Promise(res => setTimeout(() => res("P3 resolvida"), 3000));

Promise.all([p1, p2]).then(resultados => {
  console.log(resultados); // ["P1 resolvida", "P2 resolvida"]
}).catch(erro => {
  console.log(erro);  // se uma promise der errado, todas são rejeitadas
});

Promise.all([p1, p3]).then(resultados => {
  console.log(resultados);
}).catch(erro => {
  console.log(erro);
});

//Promise.race

Promise.race([p1, p2, p3])
  .then((resultado) => {
    console.log("Primeira Promise resolvida ou rejeitada:", resultado);
  })
  .catch((erro) => {
    console.log("Erro detectado:", erro);
  });


//Promise.any(promises) retorna a primeira promise resolvida, ignora rejeições

//Promise.allSettled
Promise.allSettled([p1, p2, p3]).then((resultado) => {
  console.log("Promises e seus status:", resultado);
});

//async await

function testando(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('sucesso na função async');
    }, 2000);
  });
}

async function teste(){
  const resultado = await testando();
  console.log(resultado);
}
teste()

function semAsync(){ //promise fica pendente
  const resultado = testando();
  console.log(resultado);
}
semAsync();