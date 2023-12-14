// if conditional--------------------------------
// if (condition) {

// } else {

// }

// const age = 21;

// if (age >= 17) {
//   console.log("di atas 17");
// } else {
//   console.log("dibawah 17");
// }

// console.log("session 2");

// const nilai = 78;
// if (nilai >= 90) {
//   console.log("nilai kamu A");
// } else if (nilai >= 80) {
//   console.log("nilai kamu B");
// } else if (nilai >= 70) {
//   console.log("nilai kamu C");
// } else if (nilai >= 60) {
//   console.log("nilai kamu D");
// }

// switchcase------------------------------
// const bulan = 5;

// switch (bulan) {
//   case 1:
//     console.log("januari");
//     break;
//   case 2:
//     console.log("februari");
//     break;
//   case 3:
//     console.log("maret");
//     break;
//   case 4:
//   case 5:
//     console.log("april-juni");
//     break;
//   default:
//     console.log("bulan tidak ditemukan");
// }

// truthy and falsy values --------------------------------

// let nilai = 0;
// if (nilai) {
//   console.log("ada nilainya");
// } else {
//   console.log("tidak ada nilainya");
// }

// for LOOP-------------------------------------
// const input = "purwadhika";
// for (let i = 0; i < 5; i++) {
//   console.log(input.charAt(i));
// }

// const input = "purwadhika";
// const lengthOfInput = input.length;
// for (let i = 0; i < lengthOfInput; i++) {
//   console.log(input.charAt(i));
// }

// const input = "purwadhika";
// const lengthOfInput = input.length;
// for (let i = 0; i < lengthOfInput; i++) {
//   console.log(input[i]);
// }

// while true do something and break/continue------------------------------

// const input = "purwadhika";
// const lengthOfInput = input.length;
// for (let i = 0; i < lengthOfInput; i++) {
//   console.log(input[i]);
//   if (i >= lengthOfInput / 2) {
//     break;
//   }
// }
// const input = "purwadhika";
// const lengthOfInput = input.length;
// let i = 0;
// do {
//   console.log(input[i]);
//   //   i++;
// } while (i !== 0);

// const input = "purwadhika";
// const lengthOfInput = input.length;
// for (let i = 0; i < lengthOfInput; i++) {
//   console.log(input[i]);
//   if (input[i] === "d") {
//     console.log("huruf d ada di index ke", i);
//     break;
//   }
// }

// const str = "ccbbaabbccbbaabbcc";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "a") {
//     continue; //bisa break,terhenti di ccbb
//   } else {
//     console.log(str[i]);
//   }
// }

// for LOOP--------------------
// const input = "ivanno";
// for (i = 0; i < input.length; i++) {
//   if (
//     input[i] === "a" ||
//     input[i] === "i" ||
//     input[i] === "u" ||
//     input[i] === "e" ||
//     input[i] === "o"
//   ) {
//     console.log("*");
//   } else {
//     console.log(input[i]);
//   }
// }

// LOOP while--------------------------
// const input = "a";
// const targetLength = 10;

// let i = 0;
// let result = "";
// while (i < targetLength) {
//   result += input;
//   i++;
// }

// console.log("result", result);

// EXERCISE-------------------------------
// let n = 174892371894;
// if (n % 2 === 0) {
//   console.log(n + " " + "is an even Number.");
// } else if (n % 2 !== 0) {
//   console.log(n + " " + "is an odd number.");
// } else {
//   console.log("wrong integer!");
// }

// let tempCelcius = 60;
// let tempFahrenheit = (9 / 5) * tempCelcius + 32;
// console.log(tempFahrenheit);
// //atau:
// const celcius = 60;
// //celcius * 9 / 5 + 32
// const fahrenheit = (celcius * 9) / 5 + 32;
// console.log(fahrenheit);

// let i = 3;
// let sumNumber = (i * (i + 1)) / 2;
// console.log(sumNumber);

// let y = 6;
// let factorial = 1;
// for (i = 1; i <= y; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// let z = 12;
// let isPrime = true;
// for (i = 2; i < z; i++) {
//   if (z % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);
// atau:
// const input = 13;
// let isPrime = true;
// for (let i = 2, s = Math.sqrt(input); i <= s; i++) {
//   if (input % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(`is ${input} prime? ${isPrime}`);

// const input = 6;
// let result = 0;
// for (let i = 1; i <= input; i++) {
//   result += i;
// }
// console.log("result:", result);

// const ntargetOfFibonacci = 16;

// let lastValueOfFibonacci = 1;
// let secondLastValueOfFibonacci = 0;
// let fibonacciNumber = "";

// if (!ntargetOfFibonacci) {
//   fibonacciNumber += "invalid";
// } else if (ntargetOfFibonacci === 1) {
//   fibonacciNumber += secondLastValueOfFibonacci;
// } else if (ntargetOfFibonacci === 2) {
//   fibonacciNumber += `${secondLastValueOfFibonacci} ${lastValueOfFibonacci}`;
// } else {
//   if (ntargetOfFibonacci >= 3) {
//     fibonacciNumber += `${secondLastValueOfFibonacci} ${lastValueOfFibonacci}`;

//     for (let i = 3; i <= ntargetOfFibonacci; i++) {
//       const sumOfTwoNumbers = secondLastValueOfFibonacci + lastValueOfFibonacci;

//       fibonacciNumber += ` ${sumOfTwoNumbers}`;
//       secondLastValueOfFibonacci = lastValueOfFibonacci;
//       lastValueOfFibonacci = sumOfTwoNumbers;
//     }
//     console.log("fibonacci number:", fibonacciNumber);
//   }
// }
