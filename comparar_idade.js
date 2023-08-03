class pessoa{
    idade;
    nome;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - this.idade;
    } 
}

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
            console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
        }else if(p1.idade < p2.idade){
            console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
        }else{
            console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
        }
}

const maria = new pessoa('Maria', 25);
const joao = new pessoa('João', 23);

compararPessoa(maria, joao);