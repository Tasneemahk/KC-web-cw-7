function BMI(weight = 1, height = 1) {
  let result = weight / (height * height);
  return result;
}
console.log(BMI());

function Status(BodyMass) {
  if (BodyMass >= 25) {
    return `Overweight.`;
  } else {
    if (BodyMass >= 18) {
      return `Healthy weight.`;
    } else {
      return `Under healthy measures!`;
    }
  }
}
function calculate() {
  let weight = document.getElementById(weight).value;
  let height = document.getElementById(height).value;
  let bmi_value = BMI();
  let desc = Status(bmi_value);
  let box = document.getElementById(result);
  box.innerText = `${bmi_value}== ${desc}`;
}
