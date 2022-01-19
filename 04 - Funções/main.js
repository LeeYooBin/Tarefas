//1 - crie uma função que exiba uma mensagem no console
const imprimeMensagem = () => console.log('mensagem');
imprimeMensagem();
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
const exibeNome = nome => console.log(nome);
exibeNome('nome');
//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console
const func1 = (nome, numero, estiloMusical) => console.log(nome, numero, estiloMusical);
func1('nome', 20, 'Estilo musical');
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
const func2 = (filme, musica) => console.log(filme, musica);
func2('filme', 'musica');



//Bônus

//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)
const triplo = numero => numero * 3;
console.log(triplo(3));