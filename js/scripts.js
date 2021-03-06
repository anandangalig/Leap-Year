var leapYear = function(yearInput) {
  if ((yearInput % 4 === 0) && (yearInput % 100 !== 0) || (yearInput % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
//   if (yearInput % 400 === 0) {
//     return true;
//   } else if (yearInput % 100 === 0) {
//       return false;
//   } else if (yearInput % 4 === 0) {
//       return true;
//   } else {
//       return false;
//   }

$(document).ready(function() {
  $('form#leap-year').submit(function(event) {
    event.preventDefault();
    var yearInput = parseInt($('input#year').val());
    var result = leapYear(yearInput)

    $(".year").text(yearInput);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    };

    $("#result").show();
  });
});
