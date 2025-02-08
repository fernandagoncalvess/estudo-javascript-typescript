
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;     
        this._idade = null; 
    }
    falar(){
        console.log(`${this.nome} esta falando`);
    }
    get idade(){
        return this._idade;
    }
    set idade(valor){
        this._idade = valor;
    }
}

const p1 = new Pessoa('Fernanda', 'Gonçalves');
p1.idade =19;
console.log(p1.idade);
p1.falar();

//Herança
class Aluno extends Pessoa{
    constructor(nome, sobrenome,prontuario){
        super(nome, sobrenome);
        this.prontuario = prontuario;
    }

    static apresentacao(){
        console.log('Sou aluno(a)!');
        console.log(this);
    }
}

const a1 = new Aluno('Maria', 'Silva', 112333);
a1.idade=22;
console.log(a1.idade);
a1.falar();
console.log(a1);

//não estancia a classe, não acesso aos dados da instância
Aluno.apresentacao();