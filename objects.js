var playlist = {
  Drake: "A Little Bit"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;

  return playlist;
}
