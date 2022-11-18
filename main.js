// 2-homework
let name = prompt("Ismingizni kiriting?");
let age = +prompt(`${name} aka yoshingiz nechida?`);

if (age >= 18) {
  alert("Tabriklaymiz siz haydovchilik guvohnomasini olaolasiz");
} else {
  alert(`${name} aka ${18 - age} yil bor ekan`);
}

// 3-homework

let num1 = +prompt("Birinchi sonni kiriting?");
let num2 = +prompt("Ikkinchi sonni kiriting?");
let num3 = +prompt("Uchinchi sonni kiriting?");

if (num1 > num2 && num1 > num3) {
  console.log("Birinchi kiritgan soningiz " + num1 + " katta hammasidan");
} else if (num2 > num1 && num2 > num3) {
  console.log("ikkinchi kiritgan soningiz " + num2 + " katta hammasidan");
} else if (num1 == num2 && num1 == num3 && num2 == num3) {
  console.log("Hamma sonlar ozaro teng");
} else if (num3 > num1 && num3 > num2) {
  console.log("Uchinchi kiritgan soningiz " + num3 + " katta hammasidan");
} else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Raqam kiriting dedimku eee unaqamasda");
}
