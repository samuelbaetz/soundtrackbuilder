
  $(document).on("click", "#connect", function(){  



    const authEndpoint = 'https://accounts.spotify.com/authorize';
    
    
    const clientId = 'ffc5928010d940108535769e67ced9b0';
    const redirectUri = 'https://samuelbaetz.github.io/soundtrackbuilder/';
    const scopes = [
      
    ];
    
    
    if (!token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
    }
    
    
    
    });
    
    const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
    window.location.hash = '';
    
    
    let token = hash.access_token;






var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken(token);
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err,data) {
    if (err) console.error(err);
    else var results = data.items[0].name;
    $('#results2').html('<h1>' + results + '</h1>')
    console.log(results)
  });
  
 
  function clearLyrics() {
    $('#lyricsDisplay').empty();
  }

  $(document).on("click", "#search", function(){
    clearLyrics();
    
    
  spotifyApi.searchTracks($('#search1').val()).then(
      
    function (data) {
        
        console.log(data)
        for (var i = 0; i < 5; i++) {
            
      var results = data.tracks.items[i].name;
      var artist = data.tracks.items[i].artists;
      console.log(artist)
      console.log(results)
      $('#soundtrack').html('<p>' + results + " " + artist +'</p>')
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
      
        }
      },
      function (err) {
        console.error(err);
      }
      );

  });
  


