let notas = [10, 8, 7, 6, 5];
console.log(notas[0]);
console.log(notas[notas.length - 1])
notas.forEach((nota) => {
  console.log(nota);
});

notas.push(9);
notas.shift();
console.log(notas);

notas.forEach((nota) => {
   console.log(nota);
})

let media = notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
console.log(`A média das notas é: ${media}`);

let notasFilter = notas.filter((nota) => {
  return nota > 7;
});
console.log(notasFilter);

console.log(notas.sort());

if(notas.includes(6.5)) {
  console.log("Sim, 6.5 está presente na lista de notas.");
} else {
  console.log("Não, 6.5 não está presente na lista de notas.");
} 

let notaProcurada = 8.0;
let indiceNota = notas.indexOf(notaProcurada);
console.log(`O índice da nota ${notaProcurada} é: ${indiceNota}`);

let notasAoQuadrado = notas.map((nota) => {
   return nota * nota;
})

console.log(notasAoQuadrado);



