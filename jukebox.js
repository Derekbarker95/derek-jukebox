// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//

var enableButton = function(){
          $('button').html("<h3>Play</h3>");
          $('button').attr('disabled', false);
        };

var disableButton = function() {
            $('button').html("<h3>Playing</h3>");
            $('button').attr('disabled', 'disabled');
        };


var promptAndPlay = function() {
      var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
      var song = parseSong(songString);
      playSong(song, 500, enableButton); };


$(document).ready(function(){

    $('button').on('click', function(){
      // Get things going.
      promptAndPlay();
      disableButton();
      
    });

});