// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,2';

if (numero <= 0.2){
  str = ' MENOR que 0,2';
}

console.log('\n' + numero + str + '\n');
