$(document).ready(function() {
  $("form#Favorites").submit(function(event) {
    event.preventDefault();
    var Item1 = $("#Item1").val();
    var Item2 = $("#Item2").val();
    var Item3 = $("#Item3").val();
    var Item4 = $("#Item4").val();

    alert(Item1);
  });
});
