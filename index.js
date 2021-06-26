function calculateResult() {
  var climateValue = document.getElementById("climateOptions").value
  var climate = document.getElementById("climate")
  var mass = document.getElementById("mass").value
  // console.log(climateValue.value);
  if (climateValue != "" && mass != "" && climate.value != "none") {
    console.log(mass, climateValue)
  } else {
    alert("Enter Something")
  }
}

$(function () {
  $("#climate").on("change", function () {
    var val = $(this).val()
    var sub = $("#climateOptions")
    $("option", sub).filter(function () {
      if (
        $(this).attr("data-group") === val ||
        $(this).attr("data-group") === "SHOW"
      ) {
        if ($(this).parent("span").length) {
          $(this).unwrap()
        }
      } else {
        if (!$(this).parent("span").length) {
          $(this).wrap("<span>").parent().hide()
        }
      }
    })
  })
  $("#climate").trigger("change")
})