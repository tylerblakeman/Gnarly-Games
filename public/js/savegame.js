//setting gnarly id to a null value
var gnarly_id;
//waiting for the page to load before executing
$(document).ready(){
//setting session storage gnarly_id if gnarly_id is not defined - gnarly_id will be added by login/register functions - for now it is being randomized to allow testing of capturing based on the +/save button

//check if there is a gnarly_id in session storage - if there is check database api route for games linked with that id
gnarly_id = sessionStorage.getItem('gnarly_id');

if (!gnarly_id){
//generating a random number
var randomNumber = function () {
  return Math.floor((Math.random() * 9999) * 7);
}
//generating random characters
var randomChar = function () {
  return String.fromCharCode(64 + Math.floor((Math.random() * 26)+1));
}
//tying random number and characters into a string.
var gnarly_id = (randomChar()+randomChar()+randomNumber());
console.log(gnarly_id)
//setting the gnarly_id in session storage
sessionStorage.setItem('gnarly_id', gnarly_id);
}

$(".save-game").on('click', function(){
  event.preventDefault();
  var game_id = ($this).attr('id');
  if (!game_id || !gnarly_id) {
    return;
  }
  //creating the save game package to get sent to the save game table
  var newSaveGame = {
    gnarly_id: gnarly_id,
    game_id: game_id
  }
  submitSaveGame(newSaveGame);
})
};

  // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      alert("Game Saved");
    });
  }