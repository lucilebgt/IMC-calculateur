const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector('form');
const inputs = document.querySelectorAll("input");
const displayBmi = document.querySelector(".bmi-value");
const result = document.querySelector(".result");
// console.log(form);
// console.log(inputs)

const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
// console.log(BMI);

const handleError = () => {
  displayBmi.textContent = "OUPS !";
  displayBmi.style.color = "inherit"
  result.textContent = "Remplissez correctement les champs";
}

const handleForm = (event) => {
  event.preventDefault();
  calculateBmi();
}

const showResult = (BMI) => {
  const rank = BMIData.find(data => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  })
  displayBmi.textContent = BMI;
  displayBmi.style.color = `${rank.color}`;
  result.textContent = `Resultat : ${rank.name}`;
}

const calculateBmi = () => {
  const height = inputs[0].value;
  const weight = inputs[1].value;
  // console.log(height,weight)

  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }
  showResult(BMI)
}

form.addEventListener('submit', handleForm);