var romanNumeral = function (userNumber) {
  var thousands = ["","M","MM","MMM"];
  var hundreds = ["","C","CC", "CCC", "CD", "D","DC","DCC","DCCC","CM"];
  var tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var singles = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

  // userNumber/1000 = how many thousands
  // (userNumber % 1000)/100 = how many hundreds
  // (userNumber % 100)/10 = how many tens
  // (userNumber % 10) = how many singles
  if (userNumber>=4000) {
    alert("It is not possible to convert the number greater or eaqual than 4000");
  } else if (userNumber<=0) {
    alert("Please type the number that is greater than 0")
  } else {
    return thousands[Math.floor(userNumber/1000)] +
           hundreds[Math.floor((userNumber % 1000)/100)] +
           tens[Math.floor((userNumber % 100)/10)] +
           singles[Math.floor(userNumber % 10)];
  };
};


$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var result = romanNumeral(userNumber);
    $(".result").show();
    $("#romanNumeral").text(result);
  });
});
