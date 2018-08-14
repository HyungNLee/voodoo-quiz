function result(good, bad) {
  if (good > bad) {
    $(".good-result").slideDown();
  } else if (bad > good) {
    $(".bad-result").slideDown();
  } else {
    $(".neutral-result").slideDown();
  }
}


$(document).ready(function(){
  var goodSymptomsSum;
  var badSymptomsSum;
  $("form#good_survey").submit(function(event){
    event.preventDefault();
    goodSymptomsSum = $("input:checkbox[name=good-symptoms]:checked").length;
      $("#bad_survey").slideDown();
      $('#good_survey').hide();
  });

  $("form#bad_survey").submit(function(event){
    event.preventDefault();
    badSymptomsSum = $("input:checkbox[name=bad-symptoms]:checked").length;
      // $("#bad_survey").slideDown();
      $('#bad_survey').hide();
      result(goodSymptomsSum, badSymptomsSum);
  });
});
