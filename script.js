function BMI(weight = 1, height = 1) {
  let result = weight / (height * height);
  return result;
}
console.log(BMI(65, 1.6));

function Status(BMI) {
  if (BMI >= 25) {
    color = "#FB6107";
    return ` Overweight.`;
  } else {
    if (BMI >= 18) {
      color = "#7DDF64";
      return ` Healthy weight.`;
    } else {
      color = "#DE9E36";
      return `Under healthy measures! `;
    }
  }
}
function calculate() {
  let weight = document.getElementById("weightt").value;
  let height = document.getElementById("heightt").value;
  let bmi_value = BMI(weight, height);
  let desc = Status(bmi_value);
  let box = document.getElementById("result");
  box.innerText = bmi_value + " == " + desc;
  box.style.color = color;
}
