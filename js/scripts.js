var romanNumeral = function (userNumber) {
  var thousands = ["","M","MM","MMM"];
  var hundreds = ["","C","CC", "CCC", "CD", "D","DC","DCC","DCCC","CM"];
  var tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var singles = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

  // userNumber/1000 = how many thousands
  // (userNumber % 1000)/100 = how many hundreds
  // (userNumber % 100)/10 = how many tens
  // (userNumber % 10) = how many singles

  return thousands[Math.floor(userNumber/1000)] +
         hundreds[Math.floor((userNumber % 1000)/100)] +
         tens[Math.floor((userNumber % 100)/10)] +
         singles[Math.floor(userNumber % 10)];
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
