//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 20;
console.log(idade > 18 ? 'É maior que 18.' : 'Não é maior que 18.');
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true
let humano = true;
console.log(idade > 18 && humano ? 'É maior de 18 e humano.' : 'Não é maior de 18 ou não é humano.');
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes1 = 'janeiro';
let mes2 = 'dezembro';
let mes3 = 'junho';

console.log(mes1 === 'janeiro' || mes1 === 'dezembro' ? 'Aniversário em janeiro ou dezembro.' : 'Aniversário em outro mês');
console.log(mes2 === 'janeiro' || mes2 === 'dezembro' ? 'Aniversário em janeiro ou dezembro.' : 'Aniversário em outro mês');
console.log(mes3 === 'janeiro' || mes3 === 'dezembro' ? 'Aniversário em janeiro ou dezembro.' : 'Aniversário em outro mês');

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome1 = 'Roberdan';
let nome2 = 'Nome com outra letra';
console.log(nome1.toLowerCase()[0] === 'r' ? `O nome começa com 'R'.` : `O nome não começa com 'R'.`);
console.log(nome2.toLowerCase()[0] === 'r' ? `O nome começa com 'R'.` : `O nome não começa com 'R'.`);
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let fullName = 'Roberdan Santos';
let arr = fullName.split(' ');
console.log(arr[1].length > 6 || arr[0].toLowerCase()[0] === 'e' ? `O sobrenome tem mais de 6 letras ou o nome começa com 'E'.` :
            `O sobrenome não tem 6 ou mais letras e o nome não começa com 'E'.`);

fullName = 'Edson Arantes';
arr = fullName.split(' ');
console.log(arr[1].length > 6 || arr[0].toLowerCase()[0] === 'e' ? `O sobrenome tem mais de 6 letras ou o nome começa com 'E'.` :
            `O sobrenome não tem 6 ou mais letras e o nome não começa com 'E'.`);