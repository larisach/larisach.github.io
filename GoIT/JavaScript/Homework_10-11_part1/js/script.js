function pow(x, y) {
  var b = x;
	
  for (var i = 1; i < y; i++) {
  b *= x;
  }

  return b;
}

var base = prompt('Введите число', '');
var exponent = prompt('Введите степень', '');

if (exponent < 0) {
	alert('Степень ' + exponent + ' не поддерживается, введите целую степень, большую 0!');
} else {
console.log('result = ', pow(base, exponent));
alert( pow(base, exponent) );
}