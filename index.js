const form = document.querySelector("form");
const ul = document.querySelector("ul");
const bills = document.getElementById("bill");
const peoples = document.getElementById("peoples");
const buttons = document.querySelectorAll(".button");
let number, numberT, number_people, bill, totalP;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    number = e.target.id / 100;
    numberT = 1 + e.target.id / 100;
  });
});

peoples.addEventListener("input", (e) => {
  number_people = e.target.value;
  console.log(number_people);
});

bills.addEventListener("input", (e) => {
  bill = e.target.value;
});

form.addEventListener("input", (e) => {
  if ((number_people > 0, bill > 0, number > 0)) {
    total = (bill * number) / number_people;
    totalP = (bill * numberT) / number_people;
    total = total.toFixed(2);
    totalP = totalP.toFixed(2);
    amountP.textContent = `$${total}`;
    amountT.textContent = `$${totalP}`;
    console.log(total);
  } else {
    amountP.textContent = `0.00`;
  }
});
