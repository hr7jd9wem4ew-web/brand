// --------------------------------Завдання 1----------------------------

// let num1 = parseFloat(prompt("Введіть число початок діапазону: "));
// let num2 = parseFloat(prompt("Введіть число кінець діапазону: "));
// let sum = 0;
// if (isNaN(num1) || isNaN(num2)) {
//     alert("Введено невірні дані!");
// } else {
//     let nummin = Math.min(num1, num2);
//     let nummax = Math.max(num1, num2);
//     for (let i = nummin; i <= nummax; i++) {
//         sum += i;
//     }
//     alert(`Сума всіх чисел у діапазоні від ${nummin} до ${nummax} = ${sum}`);
// }

// --------------------------------Завдання 2----------------------------

// let num1 = parseFloat(prompt("Введіть число 1: "));
// let num2 = parseFloat(prompt("Введіть число 2: "));
// if (isNaN(num1) || isNaN(num2)) {
//     alert("Введено невірні дані!");
// } else {
//     num1 = Math.abs(num1);
//     num2 = Math.abs(num2);
//     while (num2 !== 0) {
//         let num3 = num2;
//         num2 = num1 % num2;
//         num1 = num3;
//     }
//     alert(`Найбільший спільний дільник = ${num1}`);
// }

// --------------------------------Завдання 3----------------------------

// let num1 = parseFloat(prompt("Введіть число: "));
// let num2 = "";
// if (isNaN(num1) || num1 <= 0) {
//   alert("Введено невірні дані!");
// } else {
//   for (let i = 1; i <= num1; i++) {
//     if (num1 % i === 0) {
//       num2 += i + " ";
//     }
//   }
//   alert(`Дільники числа ${num1}: ${num2}`);
// }

// --------------------------------Завдання 4----------------------------

// let num1 = parseFloat(prompt("Введіть число: "));
// let num2 = 0;
// if (isNaN(num1)) {
//   alert("Введено невірні дані!");
// } else {
//   num1 = Math.abs(num1);
// if (num1 === 0) {
//     num2 = 1;
//   } else {
//     while (num1 > 0) {
//       num1 = Math.floor(num1 / 10);
//       num2++;
//     }
//   }
// alert(`Кількість цифр: ${num2}`);
// }

// --------------------------------Завдання 5----------------------------

// let numplus = 0;
// let numminus = 0;
// let numnull = 0;
// let numx2 = 0;
// let numx1 = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = parseFloat(prompt(`Введіть число ${i} з 10:`));
//   if (isNaN(num)) {
//     alert("Введено невірні дані! Це число не буде враховано.");
//     continue;
//   }
//   if (num > 0) {
//     numplus++;
//   } else if (num < 0) {
//     numminus++;
//   } else {
//     numnull++;
//   }
//   if (num % 2 === 0) {
//     numx2++;
//   } else {
//     numx1++;
//   }
// }
// alert(`Додатні: ${numplus}
// Від’ємні: ${numminus}
// Нулі: ${numnull}
// Парні: ${numx2}
// Непарні: ${numx1}`);

// --------------------------------Завдання 6----------------------------

// do {
//     let num1 = parseFloat(prompt("Введіть перше число:"));
//     let num2 = parseFloat(prompt("Введіть друге число:"));
//     let sign = prompt("Введіть знак (+, -, *, /): ");
//     let result;
//     switch (sign) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Ділення на нуль неможливе!";
//             }
//             break;
//         default:
//             result = "Невірний знак!";
//     }
//     alert(`Результат: ${result}`);
// } while (confirm("Повторимо?"));