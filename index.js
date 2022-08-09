//variables
const form = document.querySelector("form");
const bills = document.getElementById("bill");
const peoples = document.getElementById("peoples");
const buttons = document.querySelectorAll(".button");

let calcTip,
  calcPeople,
  number_people,
  bill,
  totalTip,
  totalPeople,
  calcTipCustom,
  calcPeopleCustom;

//tips buttons & calc
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("btnclicked");
    });
    if (e.target.classList.contains("button")) {
      e.target.classList.add("btnclicked");
    }
    calcTip = e.target.id / 100;
    calcPeople = 1 + e.target.id / 100;
  });
});
//custom tip
custom.addEventListener("change", (e) => {
  calcTipCustom = e.target.value / 100;
  calcPeopleCustom = 1 + e.target.value / 100;
  custom.style.border = "1.5px solid hsl(172, 67%, 45%)";
});
//number of people
peoples.addEventListener("change", (e) => {
  number_people = e.target.value;
  peoples.style.border = "1.5px solid hsl(172, 67%, 45%)";
});
//bill price
bills.addEventListener("change", (e) => {
  bill = e.target.value;
  bills.style.border = "1.5px solid hsl(172, 67%, 45%)";
});
//if bill, tip btn, number selected => calc => display tip amount and Total to pay by person
form.addEventListener("change", () => {
  if (number_people > 0 && bill > 0 && calcTip > 0) {
    totalTip = ((bill * calcTip) / number_people).toFixed(2); //tip amount
    totalPeople = ((bill * calcPeople) / number_people).toFixed(2); //total price person
    amountTip.textContent = `$${totalTip}`;
    amountTotal.textContent = `$${totalPeople}`;
  }
  //if bill, tip custom, number selected => calc => display tip amount and Total to pay by person
  if (calcTipCustom > 0 && number_people > 0 && bill > 0) {
    totalTip = ((bill * calcTipCustom) / number_people).toFixed(2); //tip amount
    totalPeople = ((bill * calcPeopleCustom) / number_people).toFixed(2); //total price person
    amountTip.textContent = `$${totalTip}`;
    amountTotal.textContent = `$${totalPeople}`;
  }
});

//reset button
reset.addEventListener("click", (e) => {
  bills.value = "";
  peoples.value = "";
  buttons.value = 0;
  custom.value = "";
  amountTip.textContent = "$0.00";
  amountTotal.textContent = "$0.00";
  buttons.forEach((e) => {
    e.classList.remove("btnclicked");
  });
});
