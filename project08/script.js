// alert("Hi user, lets play a game!!!");
// alert("Insert two numbers and I will return some calculations:");

// const numberOne = Number(prompt("First number:"));
// const numberTwo = Number(prompt("Second number:"));

// const sum = numberOne + numberTwo;
// const subtraction = numberOne - numberTwo;
// const multiplication = numberOne * numberTwo;
// const division = numberOne / numberTwo;
// const rest = numberOne % numberTwo;

// alert("The sum of the two numbers is: " + sum);
// alert("The subtraction of the two numbers is: " + subtraction);
// alert("The multiplication of the two numbers is: " + multiplication);
// alert("The division of the two numbers is: " + division.toFixed(2));
// alert("The rest of the division of two numbers is: " + rest);

// if (rest == 0) {
//   alert("The sum of the two numbers is a number EVEN");
// } else {
//   alert("The sum of the two numbers is a number ODD")
// }

// if (numberOne == numberTwo){
//   alert("You chose equal numbers.");
// }else {
//   alert("You chose different numbers.");
// }


const students = [
  {name: "Henrique", firstNote: 10, secondNote: 8},
  {name: "Rafa", firstNote: 8, secondNote: 8},
  {name: "Biel", firstNote: 6, secondNote: 9},
  {name: "Luis", firstNote: 10, secondNote: 9},
  {name: "Joao", firstNote: 3, secondNote: 7},
  {name: "Maria", firstNote: 7, secondNote: 5},
  {name: "jose", firstNote: 2, secondNote: 4}
]

function calcMedia(student){
  let media = (student.firstNote + student.secondNote) / 2;
  if (media >= 7){
    return `The average grade of student ${student.name} is ${media},
    congratulations ${student.name}, you are approved.`;
  } else if (media <= 4){
    return `The average grade of student ${student.name} is ${media},
    sorry ${student.name}, you are NOT approved.`;
  } else {
    return `The average grade of student ${student.name} is ${media},
    ${student.name}, You stayed close, you can make a recovery test.`;
  }
}

for (let student of students){
  let mediaStudent = calcMedia(student);
  alert(mediaStudent);
}