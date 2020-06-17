// Creating a function to pull in game prices from CheapShark API
function gamePrice() {
  var cSharkURL = "https://www.cheapshark.com/redirect?"

  $.ajax({
    url: cSharkURL,
    method: "GET",
  }).then(function(data) {
    console.log(data);
  });

}