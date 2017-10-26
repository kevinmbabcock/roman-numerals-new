var romanNumeral = function (number) {
  var romanNumeral = "";
  var remainder = number;

  if (number > 4000) {
    alert("This number is too large! Only numbers less than 4,000 may be converted to Roman Numerals");
  } else if (isNaN(number)) {
    alert("Please enter a number");
  } else {
    if (remainder >= 1000) {
      remainder = number % 1000;
      number = number / 1000;
      number = Math.floor(number);
      for (index = 1; index <= number; index++) {
        romanNumeral = romanNumeral.concat("M");
      }
    }
    if (remainder >= 500) {
      number = remainder / 500;
      number = Math.floor(number);
      //console.log(number);
      remainder = remainder % 500;
      //console.log(remainder);
      if (remainder >= 400) {
        romanNumeral = romanNumeral.concat("CM");
        remainder = remainder % 400;
        //console.log(remainder);
      } else {
      for (index = 1; index <= number; index++) {
        romanNumeral = romanNumeral.concat("D");
        }
      }
    }
    if (remainder >= 100) {
      number = remainder / 100;
      number = Math.floor(number);
      //console.log(number);
      remainder = remainder % 100;
      //console.log(remainder);
      if (number === 4) {
        romanNumeral = romanNumeral.concat("CD")
      } else {
      for (index = 1; index <= number; index++) {
        romanNumeral = romanNumeral.concat("C");
        }
      }
    }
    if (remainder >= 50) {
      number = remainder / 50;
      number = Math.floor(number);
      //console.log(number);
      remainder = remainder % 50;
      //console.log(remainder);
      if (remainder >= 40) {
        romanNumeral = romanNumeral.concat("XC");
        remainder = remainder % 40;
        //console.log(remainder);
      } else {
      for (index = 1; index <= number; index++) {
        romanNumeral = romanNumeral.concat("L");
        }
      }
    }
    if (remainder >= 10) {
      number = remainder / 10;
      number = Math.floor(number);
      //console.log(number);
      remainder = remainder % 10;
      //console.log(remainder);
      if (number === 4) {
        romanNumeral = romanNumeral.concat("XL")
      } else {
      for (index = 1; index <= number; index++) {
        romanNumeral = romanNumeral.concat("X");
        }
      }
    }
    if (remainder >= 5) {
      number = remainder / 5;
      number = Math.floor(number);
      //console.log(number);
      remainder = remainder % 5;
      //console.log(remainder);
      if (remainder >= 4) {
        romanNumeral = romanNumeral.concat("IX");
        remainder = remainder % 4;
      } else {
      for (index = 1; index <= number; index++) {
        romanNumeral = romanNumeral.concat("V");
        }
      }
    }
    if (remainder > 0) {
      number = remainder / 1;
      if (number === 4) {
        romanNumeral = romanNumeral.concat("IV")
      } else {
      for (index = 1; index <= remainder; index++) {
        romanNumeral = romanNumeral.concat("I");
        }
      }
    }
  }
  return romanNumeral;
}

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var result = romanNumeral(userNumber);
    $(".result").show();
    $("#romanNumeral").text(result);
  });
});
