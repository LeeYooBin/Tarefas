// Crie um objeto que receba ao menos três propriedades sobre você.
const objeto = {
    nome: 'Roberdan',
    idade: 20,
    cidade: 'Socorro'
};
// Adicione uma nova propriedade sem alterar seu objeto inicial.
objeto.estado = 'Sergipe';
// Remova uma propriedade desse objeto.
delete objeto.idade;
//Mostre no console todas as propriedades desse objeto.
for(let i in objeto){
    console.log(i + ': ' + objeto[i]);
}
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [
    {
        nome: 'nome1',
        idade: 20,
        telefone: 'xx xxxxxxxxx',
        amigos: ['amigo1', 'amigo2', 'amigo3', 'amigo4', 'amigo5']
    },
    {
        nome: 'nome2',
        idade: 22,
        telefone: 'xx xxxxxxxxx',
        amigos: ['amig01', 'amig02', 'amig03', 'amig04', 'amig05']
    },
    {
        nome: 'nome3',
        idade: 18,
        telefone: 'xx xxxxxxxxx',
        amigos: ['amige1', 'amige2', 'amige3', 'amige4', 'amige5']
    },
    {
        nome: 'nome4',
        idade: 21,
        telefone: 'xx xxxxxxxxx',
        amigos: ['amigx1', 'amigx2', 'amigx3', 'amigx4', 'amigx5']
    },
    {
        nome: 'nome5',
        idade: 30,
        telefone: 'xx xxxxxxxxx',
        amigos: ['4migo1', '4migo2', '4migo3', '4migo4', '4migo5']
    }
];

// Mostre no console o nome de um amigo de cada lista.
let aux = 0;
for(let i of cadastro){
    console.log(i.amigos[aux++]);
}