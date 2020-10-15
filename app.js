

var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('BQDC0V9Ek3Sb1vGIfcSHhJGfZX-if19Z7KER1oCq7IfX8WKbRu44Ekb8W2AOJkBTIQ9-U_qqjDWYb4iJmgtboFivRzB_F0NsJ7wM6hgBGr_kK-16alaWEzzbu4GY6O9cFhLKye5Xk_Oy7j3CMKV5-EnwAJ_oje2QGMxW&token_type=Bearer&expires_in=3600&state=x0dpcqkQs7n2SACi');

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err,data) {
    if (err) console.error(err);
    else var results = data.items[0].name;
    $('#results2').html('<h1>' + results + '</h1>')
    console.log(results)
  });
  
 

  $(document).on("click", "#search", function(){

    
    
  spotifyApi.searchTracks($('#search1').val()).then(
      
    function (data) {
        
        console.log(data)
        for (var i = 0; i < 5; i++) {
            
      var results = data.tracks.items[i].name;
      var artist = data.tracks.items[i].artists[i].name;
      var queryURL = "https://orion.apiseeds.com/api/music/lyric/" + artist + "/" + results + "?apikey=SBJNOlBRhfayoBjkQVpzhTc79xTG4qAyVlnG9WsYOFtxkpoFELDxJsSejr16yC0o "
      $.ajax({
          url: queryURL,
          method: "GET"
    
      }).then(function(response) {
          console.log('response:', response)
          var artistName = $('<h1>').text("Artist: " + response.result.artist.name);
          console.log('artistName:', artistName)
          var trackName = $('<h3>').text("Track: " + response.result.track.name);
          var trackLyrics = $('<p>').text("Lyrics: " + response.result.track.text);
          
          $('#lyricsDisplay').append(artistName, trackName, trackLyrics);
      });
      console.log(artist)
      console.log(results)
      $('#results').val(results + " " + artist)
        }
      },
      function (err) {
        console.error(err);
      }
      );

  });
  
  
