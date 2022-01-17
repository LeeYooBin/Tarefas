//1 - Criar um loop que conte de 1 até 10 usando FOR
console.log('1...10 com laço for');
for(let i = 1; i <= 10; i++) console.log(i);
//2 - Criar um loop que conte de 10 até 1 usando WHILE
console.log('10...1 com laço while');
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}
//3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log('Ímpares entre 0 e 100');
for(let i = 0; i <= 100; i++) if(i % 2 !== 0) console.log(i);
//4- Criar um loop que conte todos os números pares de 0 a 100
console.log('Pares entre 0 e 100');
for(let i = 0; i <= 100; i++) if(i % 2 === 0) console.log(i);