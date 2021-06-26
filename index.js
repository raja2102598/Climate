function calculateResult() {
  var value
  var climateValue = document.getElementById("climateOptions")
  var climate = document.getElementById("climate")
  var mass = document.getElementById("mass").value
  // console.log(climateValue.value);
  if (climateValue.value != "" && mass != "" && climate.value != "none") {
    if (climateValue.value == "Value1") {
      value = 0.5
    } else if (climateValue.value == "Value2") {
      value = 0.6
    } else if (climateValue.value == "Value3") {
      value = 1.5
    } else {
      value = 2
    }
    console.log(mass, value)
  } else {
    alert("Enter Something")
  }
}
