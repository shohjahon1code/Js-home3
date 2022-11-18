// 1 - homework;

let number = Number(prompt("To'plagan balingizni kiriting?"));

if (number > 0 && number < 80) {
  console.log("Afsuski o'qishga kiraolmadingiz?");
} else if (number >= 80 && number < 100) {
  alert("siz super-kontrakt asosida o'qishga tavsiya qilindingiz");
  let SuperContract = +prompt(
    "Kontrakt miqdori yiliga 3000$ qancha pulingiz bor?"
  );
  if (SuperContract >= 3000) {
    console.log("Okey, oqishga qabul qilinasiz");
  } else {
    console.log("Afsuski, Pulingiz yetmiyaptiku");
  }
} else if (number >= 100 && number < 150) {
  alert("siz kontrakt asosida qabul qilindizngiz");
  let contract = +prompt(
    "siz kontrakt asosida qabul qilindizngiz, kontrakt miqdori yiliga 2000$ qancha pulingiz bor?"
  );
  if (contract >= 2000) {
    console.log("Okey, oqishga qabul qilinasiz");
  } else {
    console.log("Afsuski, Pulingiz yetmiyaptiku");
  }
} else if (number >= 150) {
  console.log("grant Asosida o'qishga qabul qilindingiz");
}
