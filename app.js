

var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('BQCtfFi9s4Ydu_D8pB7M9nhf7zzA1E_iy2aLFIyA8QH3DuEmFIRNufbV7n1_eTqk2n8UN3jEhMJst3W3VOIJc-w5k20fzgSpsiVuBboTeRiXZ6yJq2kQSn4TQ9gHFq7EegAWP4V_FL51WYiajY7qfXEiZAePHl8GxVhy');

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err,data) {
    if (err) console.error(err);
    else var results = data.items[0].name;
    $('#results2').html('<h1>' + results + '</h1>')
    console.log(results)
  });
  
 

  $(document).on("click", "#search", function(){

    
    console.log('work')
  spotifyApi.searchTracks($('#search1').val()).then(
    function (data) {
      console.log(data.tracks.items[0].name);
      var results = data.tracks.items[0].name;
      console.log(results)
      $('#results').html(results)
    },
    function (err) {
      console.error(err);
    }
  );

  });
  
  
