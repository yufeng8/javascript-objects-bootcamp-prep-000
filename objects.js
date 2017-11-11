var playlist = {Phil Ochs: "Here's to the State of Mississippi"};

function updatePlaylist(playlist, artist, title) {
  return Object.assign({}, playlist, {artist: title});
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
