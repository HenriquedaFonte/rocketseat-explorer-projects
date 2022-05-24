/* 
  1º - 
  Encontre a solucao do problema:

  pergunte o nome do usuario e escreva a mensagem:
  "ola, [nome do usuario]"
  
Resposta:
  let nomeUsuario = prompt("Hi, what is your name?");
  alert("Hi, " + nomeUsuario); 
*/

/* 
  2º
  Solicite 2 numeros,  faca a soma deles e apresente o resultado.


alert("hello, we're going to make a sum!")
let userNumber1 = prompt("Insert one number.");
let userNumber2 = prompt("Insert another number.");
const sum = parseInt(userNumber1) + parseInt(userNumber2);
alert("The sum of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + sum + "!!");

alert("hello, we're going to make a sum!")
let userNumber1 = prompt("Insert one number.");
let userNumber2 = prompt("Insert another number.");
const sum = Number(userNumber1) + Number(userNumber2);
alert("The sum of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + sum + "!!");

*/

/*
  3º
  Capturar 2 numeros e fazer as operacoes matematicas de 
  soma, subtracao, multiplicacao, divisao e resto da divisao.

    E para cada operacao, mostrar um alerta com resultado.


alert ("Choose two numbers and I will present the result of all mathematical operations!");
let userNumber1 = parseInt(prompt("Insert one number."));
let userNumber2 = parseInt(prompt("Insert another number."));
const sum = userNumber1 + userNumber2;
const subtraction = userNumber1 - userNumber2;
const division = userNumber1 / userNumber2;
const multiplication  = userNumber1 * userNumber2;
const rest = userNumber1 % userNumber2;

alert("The sum of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + sum + "!!");
alert("The subtraction of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + subtraction + "!!");
alert("The multiplication of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + multiplication + "!!");
alert("The division of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + division + "!!");
alert("The rest of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + rest + "!!");

alert("The sum of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + sum + "!!\n" +
"The subtraction of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + subtraction + "!!\n" +
"The multiplication of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + multiplication + "!!\n" +
"The division of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + division + "!!\n" +
"The rest of the number " + userNumber1 + " and number " 
+ userNumber2 + " is: " + rest + "!!");

*/

/* 
  4º
  Solicitar o nome do aluno e as 3 notas do bimestre
  calcular a media daquele aluno.

  se o aluno passou do semestre, dar os parabens.

  se o aluno nao passou no bimestre, motivar o aluno a dar o seu melhor na prova 
  de recuperacao.

  Em ambos os casos, mostre uma mensagem com o nome e nota do aluno.


let studentName = prompt("Hi, what is your name?");
let studentNote1 = parseInt(prompt("Hi, " + studentName + ", What is your first test score?"));
let studentNote2 = parseInt(prompt("What is your second test score?"));
let studentNote3 = parseInt(prompt("What is your third test score?"));
let averageGrade = (studentNote1 + studentNote2 + studentNote3)/3;

averageGrade = averageGrade.toFixed(2);

if (averageGrade < 3) {
  alert("Hi " + studentName + ", your average grade was " + averageGrade + ", unfortunately you failed.");
}else if (averageGrade < 6) {
  alert("Hi " + studentName + ", your average grade was " + averageGrade + ", unfortunately you were not approved, try to do your best and you will succeed in the recovery test");
}else {
  alert("Congratulations " + studentName + ", your average grade was " + averageGrade + " and you were approved!");
}
*/

/* 
  5º
  Capture 10 itens para compor a lista de um supermercado.

  apos capturar os 10 itens, imprima-os separando por virgula.


// let shopList = [];

// for (count = 0; count < 10; count++ ){
//   shopList.push(prompt("Write item " + (count +1) + " for your shopping list."));
// }
// alert(shopList);

let shopList = [];

for (count = 0; count < 10; count++){
  let shopItem = prompt("Write the item " + (count + 1) + " to your shopping list.");
  shopList[count] = shopItem;
}

alert(shopList);
*/

/* 
  6º

  ** Jogo d a adivinhacao **

  Apresente a mensagem ao usuarioÇ
  " Adivinhe o numero qu eeu estou pensando? esta entre 0 e 10!"

  Crie uma logica para gerar um numero aleatorio e verificar se o numero digitado e o mesmo 
  que o aleatorio gerado pelo siatema.

  enquanto o usuario nao acertar, mostre a mensagem:
  "Errou, tente novamente"

  caso o usuario acerte o numero, apresentar a mensagem:

  "parabens! voce acertou o numero em x tentativas"

  substitua o "x" pelo numero de tentativas
  

  
// const maxIntervalNumber = parseInt(10);  
// // function teste(){
// // let choseNumber = parseInt(Math.random() * maxIntervalNumber + 1);
// // alert(choseNumber);
// // }

// const maxIntervalNumber = parseInt(11);
// const choseNumber = parseInt(Math.random() * maxIntervalNumber);
// let userNumber = parseInt(prompt("Guess what number I'm thinking! A number between 0 and 10."));
// const choseNumber = Math.round(Math.random() * 10);
//parseInt é parecido com Number().
// Math.round() é a função que arredonda o numero da fomra que conhecemos hoje.
// Math.ceil() é a função que arredonda para o numero de cima independete do que vem depois da virgula.
// Math.flor() é a função que arredonda para baixo, independente do que vem depois da virgula.

// for (count = 0; userNumber != choseNumber;  count++){
//   userNumber = parseInt(prompt("Try another number!"));
// }
 
// if (userNumber === choseNumber){
//   alert("Congratulations, you got it right in " + (count + 1) + " attempts.");
// }else{
// }

let userNumber = Number(prompt("Guess what number I'm thinking! A number between 0 and 10."));
const choseNumber = Math.round(Math.random() * 10);
let attempts = 1;

while (userNumber != choseNumber){
  userNumber = prompt("Try another number!");
  attempts++
}
if(attempts > 1){
alert(`Congratulations, you got it right in ${attempts} attempts.`);
}else{
  alert(`Congratulations, you got it right in ${attempts} attempt.`);
}
*/

/* 
  7º

  faca um programa que tenha um menu e apresente a seguinte mensagem:

  Ola usuario! Digite o numero da opcao desejada:

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.

  O programa devera capturar o numero digitado pelo usuario e mostrar os seguintes cenarios:

  Caso o usuario digite 1, ele podera cadastrar um item na lista,
  Caso o usuario digite 2, ele podera ver os itens cadastrados na lista,
  (se nao houver nenhum item cadastrado na lista, mostrar a mensagem: "Nao existem itens cadastrados")
  Caso o usuario digite 3, a aplicacao devere ser encerrada.

*/

// #Aperfeicoamento a resolucao de problemas 

// Perguntas s serem feitas: 

// 1.Quais os dados de entrada que terei? 

//2. Quais a s variaveis? 

// 3.Qual o caminho ideal? (fluxo ideal) 

// 4.Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo) 

// 5.Quais os tratamentos de dados preciso fazer? 

// 6.Qual e a saida, ou quais os dados de saida, esperada? (outputs). 

/* usando o aperfeicoamento a resolucao de problemas respondendo as perguntas acima:

1. Quais os dados?
  opcao desejada
  itens adicionados

2. Variaveis?  
  Opcao
  itens[]

3. Fluxo ideal?
  Caminhos que o usuario deve seguir

4. Alternativo?
  Se a lista estiver vazia.

5. tratamentos?
  A variavel opcao tem que ser convertida para numeros
  a variavel itens e uma lista (array)

6.outputs?
  a lista
  Mensagem de erro.


// let userOption = Number(prompt("Hello user! Enter the number of the desired option:\n 1. Register an item in the list \n 2. Show registered items \n 3. Exit the program."));
// let shopList = [];
// let count = 0;

// while (userOption != 3) {
//   if (userOption == 1) {
//     let items = (prompt("Enter your item:"));
//     shopList[count] = items;
//     count++;
//     userOption = Number(prompt("Hello user! Enter the number of the desired option:\n 1. Register an item in the list \n 2. Show registered items \n 3. Exit the program."));
//   } else if (userOption == 2) {
//     if (shopList != "") {
//       alert(shopList);
//       userOption = Number(prompt("Hello user! Enter the number of the desired option:\n 1. Register an item in the list \n 2. Show registered items \n 3. Exit the program."));
//     } else {
//       alert("The item list is empty.");
//       userOption = Number(prompt("Hello user! Enter the number of the desired option:\n 1. Register an item in the list \n 2. Show registered items \n 3. Exit the program."));
//     }
//   }
// }
// alert("See you nest time!!")

let userOption;
let shopList = [];

while (userOption != 3){
  
  userOption = Number(prompt(`Ola usuario! Digite o numero da opcao desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa.`));
  
  if (userOption == 1){
    let item = prompt("Digite o nome do seu item:");
    shopList.push(item);
  } else if (userOption == 2){
    if (shopList.length == 0){
      alert("A lista esta vazia!");
    }else{
      alert(shopList);
    }
  }  
}
alert("Ok, nos vemos na proxima!!");

*/

/* Usando Switch - switch é uma condicional parecida com o if onse usamos o case para definir cada ação a depender da condição porposta 

let userOption;
let shopList = [];

while (userOption != 3){
  
  userOption = Number(prompt(`Ola usuario! Digite o numero da opcao desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa.`));

  switch(userOption){
    case 1:
      let item = prompt("Digite o nome do seu item:");
    shopList.push(item);
    break;
    case 2:
      if (shopList.length == 0){
        alert("A lista esta vazia!");
      }else{
        alert(shopList);
      }
    break;
    case 3:
      alert("Ok, nos vemos na proxima!!");
    break;
    default: 
      alert("Opção inválida.")
    break;  
  }
}
*/

/* Crie uma lista de pacientes,
    cada paciente deverá conter:
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, suas idades, altura e pesos. */

// let patientList = [
//   {name:"Luis", age: 42, weight: 88, height: 180},
//   {name:"Maria", age: 22, weight: 60, height: 170},
//   {name:"Carla", age: 66, weight: 77, height: 140},
// ]

/*for(let index = 0; index < patientList.length; index++){
  alert(patientList[index].name);
}

let patientName = [];
for(let index = 0; index< patientList.length; index++){
  patientName[index] = patientList[index].name;
}
alert(patientName);*/

/* uma nova forma de escrever o FOR, usando o for OF */
/*
let patientName = [];
 a cada entrada no for ele vai para o item seguinte na lista.
for(let patient of patientList){
  patientName.push(patient.name);
}
alert(patientName);

for(let index = 0; index < patientList.length; index++){
  alert("O paciente " + patientList[index].name + ", tem " + patientList[index].age + " anos, " + patientList[index].weight + " quilos e " + patientList[index].height + " centimetros!");
}
*/

/* Usando a lista de pacientes acima, descubra o IMC de cada um e imprima.

"paciente X possui o IMC de :Y"

crie a funcao para fazer o calculo */
/*function calcIMC(weight, height) {
  const imc = (weight / ((height / 100) ** 2)).toFixed(2);
  return imc;
}

function printIMC (patient){
  alert("Paciente " + patient.name + ", possui o IMC de : " + calcIMC(patient.weight, patient.height));
}

for (let patient of patientList){
  printIMC(patient);
}*/

/* Myke Version */

/* existem tres formas de escrever essa mesma funcao:*/
//  function printPatientIMC(patient){
//   return `
//     Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
//   `
// }
/* funcao anonima */
// const printPatientIMC = function (patient){
//   return `
//     Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
//   `
// }
/* arrow function */
// const printPatientIMC = (patient) => {
//   return `
//     Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
//   `
// }

// for (let patient of patientList){
//   let megReturn = printPatientIMC(patient);
//   alert(megReturn);
  
// } 