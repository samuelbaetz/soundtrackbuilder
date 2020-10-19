
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
  
 


  $(document).on("click", "#search", function(){
    
    
    
  spotifyApi.searchTracks($('#search1').val()).then(
      
    function (data) {
        
      console.log(data)
      for (var i = 0; i < 5; i++) {
        var results = data.tracks.items[i].name;
        var artist = data.tracks.items[i].artists[0].name;
        var p = $('<button>').text(results + " " + artist).attr('id', 'trackbutton'[i]);
        var content = $("#soundtrack");
        content.prepend(p);
        
      }
          $('#k').on("click", function(){
            // console.log(this.text());
            // var trackFull=this.text();
            // var trackSplit=trackFull.split("-");
            // var trackTitle=trackSplit[0];
            // var trackArtist=trackSplit[1];
            // console.log(trackFull);
            // console.log(trackSplit);
            // console.log(trackTitle);
            // console.log(trackArtist);
            // $('#lyricsDisplay').empty();
            
            var queryURL = "https://orion.apiseeds.com/api/music/lyric/" + artist + "/" + results + "?apikey=SBJNOlBRhfayoBjkQVpzhTc79xTG4qAyVlnG9WsYOFtxkpoFELDxJsSejr16yC0o "
            $.ajax({
                url: queryURL,
                method: "GET"
          
            }).then(function(response) {
                var trackName = $('<p>').text("Track: " + response.result.track.name);
                var trackLyrics = $('<p>').text("Lyrics: " + response.result.track.text);
                $('#lyricsDisplay').append(trackName, trackLyrics);
            });
            
          })

      },
      function (err) {
        console.error(err);
      }
      );

  });
  


  $(document).on("click", "#remove", function(){
    function clearLyrics() {
        $('#lyricsDisplay').remove();
        $('#soundtrack').remove();
      }
    clearLyrics();

  });