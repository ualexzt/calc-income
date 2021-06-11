// Incom inputs
const incomeSalary = document.querySelector('#income-salary'),
  incomeFreelance = document.querySelector('#income-freelance'),
  incomeExtra1 = document.querySelector('#income-extra-1'),
  incomeExtra2 = document.querySelector('#income-extra-2')

// Incom outputs
const costsFlat = document.querySelector('#costs-flat'),
  costsHouseServices = document.querySelector('#costs-house-services'),
  costsTransport = document.querySelector('#costs-transport'),
  costsCredit = document.querySelector('#costs-credit')

// Total inputs
const totalMonthInput = document.querySelector('#total-month'),
  totalDayInput = document.querySelector('#total-day'),
  totalYearInput = document.querySelector('#total-year')

let totalMonth, totalDay, totalYear;

// money box
const moneyBoxRange = document.querySelector('#money-box-range'),
  accumulationInput = document.querySelector('#accumulation'),
  spend = document.querySelector('#spend')
let accumulation;
let totalPresent;

const inputs = document.querySelectorAll('.input');

for (input of inputs) {
  input.addEventListener('input', () => {
    countigMoney();
    calcPrecents();
  })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;


const countigMoney = () => {
  let totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
  let totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsCredit) + strToNum(costsTransport);
  totalMonth = totalPerMonth - totalCosts;
  totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
  const totalPresentE1 = document.querySelector('#total-precents');
  totalPresent = e.target.value;
  totalPresentE1.innerHTML = totalPresent;
  calcPrecents();
});

const calcPrecents = () => {
  if (totalMonth > 0) {
    accumulation = ((totalMonth * totalPresent) / 100).toFixed();
    accumulationInput.value = accumulation;
    totalYearInput.value = accumulation * 12;
  } else {
    accumulation = 0;
  }
  spend.value = totalMonth - accumulation;
  totalDay = (spend.value / 30).toFixed();
  totalDayInput.value = totalDay;
}