

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
  
  
