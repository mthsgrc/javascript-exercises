var ftoc = function(fahrenheitToCelsius) {
  let celsius = (fahrenheitToCelsius - 32) * (5/9);
  return Math.round(celsius * 10) / 10;
}

var ctof = function(celsiusToFahrenheit) {
  let fahrenheit = celsiusToFahrenheit * (9/5) + 32;
  return Math.round(fahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
